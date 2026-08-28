import fs from 'node:fs';
import path from 'node:path';

const layoutPath = process.argv[2];
const rawPath = process.argv[3];
const questionsPath = process.argv[4] ?? path.resolve('app/questions.ts');

if (!layoutPath || !rawPath) {
  throw new Error('Usage: node scripts/audit-question-bank.mjs <layout.txt> <raw.txt> [questions.ts]');
}

function readQuestions(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const declarationIndex = source.indexOf('export const questions');
  const equalsIndex = source.indexOf('=', declarationIndex);
  const startIndex = source.indexOf('[', equalsIndex);
  const endIndex = source.lastIndexOf('];');
  if (declarationIndex < 0 || equalsIndex < 0 || startIndex < 0 || endIndex < 0) {
    throw new Error(`Unable to locate questions array in ${filePath}`);
  }
  return JSON.parse(source.slice(startIndex, endIndex + 1));
}

function normalize(value) {
  return value
    .normalize('NFKC')
    .replace(/[\s\u200b-\u200f\ufeff]/g, '')
    .replace(/[，,。；;：:！？!?、（）()【】\[\]“”"'‘’·—–~～>%]/g, '')
    .toLowerCase();
}

function normalizeSource(value) {
  const withoutWatermarks = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !/^(?:１|９|1|9|班|整|理)$/.test(line))
    .join('\n')
    .replace(/重点整理-?19班/g, '');
  return normalize(withoutWatermarks);
}

function pageMapFromText(value) {
  const result = new Map();
  value.split(/\f/).forEach((pageText, index) => result.set(index + 1, pageText));
  return result;
}

function answerFor(line) {
  const letterMatches = [...line.matchAll(/[（(]\s*([A-D]{1,4})\s*[)）]/g)];
  if (letterMatches.length) return [...letterMatches.at(-1)[1]];
  if (/错误|→\s*错|错→/.test(line)) return ['B'];
  if (/正确/.test(line)) return ['A'];
  return [];
}

function isVerdictQuestion(line) {
  const hasLetterAnswer = /[（(]\s*[A-D]{1,4}\s*[)）]/.test(line);
  return !hasLetterAnswer && /判断|正确|错误|→\s*错|错→/.test(line);
}

const layout = fs.readFileSync(layoutPath, 'utf8');
const raw = fs.readFileSync(rawPath, 'utf8');
const rawLines = layout.split(/\r?\n/);
const lines = [];
const pages = new Map();
const rawPages = pageMapFromText(raw);
let page = 1;

for (let index = 0; index < rawLines.length; index += 1) {
  const rawLine = rawLines[index];
  const pageBreaks = (rawLine.match(/\f/g) || []).length;
  const text = rawLine.replace(/\f/g, '').trim();
  lines.push({ index, page, text });
  const pageLines = pages.get(page) ?? [];
  if (text) pageLines.push(text);
  pages.set(page, pageLines);
  page += pageBreaks;
}

const questionPattern = /(?:💡\s*)?e\.?g\.\s*\d+/i;
const starts = lines.filter((entry) => questionPattern.test(entry.text));
const questions = readQuestions(questionsPath);
const examples = questions.filter((question) => /^q\d+$/.test(question.id));
const knowledge = questions.filter((question) => /^kp\d+$/.test(question.id));
const errors = [];
const warnings = [];

function issue(list, question, code, detail) {
  list.push({ id: question.id, page: question.page, code, detail });
}

if (examples.length !== starts.length) {
  errors.push({
    id: 'GLOBAL',
    page: null,
    code: 'EXAMPLE_COUNT',
    detail: `题库例题 ${examples.length} 道，但 PDF 检出 ${starts.length} 个例题标记`,
  });
}

for (let index = 0; index < Math.min(examples.length, starts.length); index += 1) {
  const question = examples[index];
  const start = starts[index];
  const nextStart = starts[index + 1]?.index ?? lines.length;
  const block = lines.slice(start.index, nextStart).map((entry) => entry.text).join('\n');
  const blockNormalized = normalize(block);
  const sourceCorrect = answerFor(start.text);

  if (question.page !== start.page) {
    issue(errors, question, 'PAGE_MISMATCH', `题库第 ${question.page} 页，PDF 例题实际在第 ${start.page} 页`);
  }

  if (sourceCorrect.join('') !== question.correct.join('')) {
    issue(errors, question, 'CORRECT_MISMATCH', `题库答案 ${question.correct.join('')}，PDF 标注 ${sourceCorrect.join('') || '缺失'}`);
  }

  if (isVerdictQuestion(start.text)) {
    const verdictOptions = question.options.map((option) => option.text).join('|');
    if (verdictOptions !== '正确|错误') {
      issue(errors, question, 'VERDICT_OPTIONS', `判断题选项应为“正确/错误”，当前为“${verdictOptions}”`);
    }
  } else {
    for (const option of question.options) {
      const optionNormalized = normalize(option.text);
      if (optionNormalized.length >= 2 && !blockNormalized.includes(optionNormalized)) {
        issue(errors, question, 'OPTION_NOT_IN_SOURCE', `${option.key}. ${option.text}`);
      }
    }
  }

  const selected = question.correct
    .map((key) => question.options.find((option) => option.key === key)?.text)
    .filter(Boolean);
  if (!isVerdictQuestion(start.text) && selected.some((text) => !blockNormalized.includes(normalize(text)))) {
    issue(errors, question, 'ANSWER_NOT_IN_SOURCE', question.answerText);
  }
}

for (const question of questions) {
  const keys = question.options.map((option) => option.key);
  const keySet = new Set(keys);
  if (!question.prompt.trim()) issue(errors, question, 'EMPTY_PROMPT', '题干为空');
  if (question.options.length < 2) issue(errors, question, 'TOO_FEW_OPTIONS', `只有 ${question.options.length} 个选项`);
  if (keySet.size !== keys.length) issue(errors, question, 'DUPLICATE_OPTION_KEY', keys.join(','));
  if (!question.correct.length || question.correct.some((key) => !keySet.has(key))) {
    issue(errors, question, 'INVALID_CORRECT_KEY', question.correct.join(','));
  }
  if (question.type === 'single' && question.correct.length !== 1) {
    issue(errors, question, 'TYPE_MISMATCH', `单选题包含 ${question.correct.length} 个答案`);
  }
  if (question.type === 'multiple' && question.correct.length < 2) {
    issue(errors, question, 'TYPE_MISMATCH', `多选题只有 ${question.correct.length} 个答案`);
  }
}

for (const question of knowledge) {
  const selected = question.options.find((option) => option.key === question.correct[0]);
  if (!selected || selected.text !== question.answerText) {
    issue(errors, question, 'KNOWLEDGE_ANSWER_MISMATCH', `正确选项“${selected?.text ?? '缺失'}”，答案原文“${question.answerText}”`);
  }

  const pageText = (pages.get(question.page) ?? []).join('\n');
  const rawPageText = rawPages.get(question.page) ?? '';
  const answerNormalized = normalize(question.answerText);
  const pageNormalized = normalizeSource(pageText);
  const rawPageNormalized = normalizeSource(rawPageText);
  if (
    answerNormalized.length >= 4
    && !pageNormalized.includes(answerNormalized)
    && !rawPageNormalized.includes(answerNormalized)
  ) {
    issue(warnings, question, 'KNOWLEDGE_SOURCE_NOT_EXACT', question.answerText);
  }
}

const grouped = (items) => Object.groupBy(items, (item) => item.code);
const report = {
  counts: {
    total: questions.length,
    examples: examples.length,
    knowledge: knowledge.length,
    pdfExampleMarkers: starts.length,
    errors: errors.length,
    warnings: warnings.length,
  },
  errorsByCode: Object.fromEntries(Object.entries(grouped(errors)).map(([code, items]) => [code, items.length])),
  warningsByCode: Object.fromEntries(Object.entries(grouped(warnings)).map(([code, items]) => [code, items.length])),
  errors,
  warnings,
};

console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
