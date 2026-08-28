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

function categoryFromHeading(line) {
  const headingMatch = line.match(/^\d+(?:\.\d+)*[.、]?\s*(.+)$/);
  if (!headingMatch) return null;
  const heading = headingMatch[1];
  const patterns = [
    ['数字化与人工智能', /^(?:电力系统基础[（(])?数字化与人工智能/],
    ['新型电力系统', /^新型电力系统(?:$|\s|[（(])/],
    ['供应链与现代物流', /^供应链[：:].*南网现代物流体系/],
    ['招标采购', /^供应链[：:].*招标采购/],
    ['主网调度', /^电力系统基础[（(]主网调度/],
    ['配网调度', /^电力系统基础[（(]配网调度/],
    ['变电检修', /^电力系统基础[（(]变电检修/],
    ['变电运行', /^(?:电力系统基础[（(])?变电运行(?:$|\s|[）)])/],
    ['配电运行', /^(?:电力系统基础[（(])?配电运行(?:$|\s|[）)])/],
    ['输电线路', /^电力系统基础[（(]输电线路/],
    ['电力电缆', /^电力电缆(?:$|\s|[（(])/],
    ['客户服务', /^客户服务(?:$|\s|[（(])/],
    ['电能计量', /^电能计量(?:$|\s|[（(])/],
    ['储能技术', /^储能技术(?:$|\s|[（(])/],
    ['发电技术', /^电力系统基础[（(]发电技术/],
    ['用电检查', /^用电检查(?:$|\s|[（(])/],
    ['舆情素养', /^舆情素养(?:$|\s|[（(])/],
  ];
  return patterns.find(([, pattern]) => pattern.test(heading))?.[0] ?? null;
}

function categoryForPage(pageNumber) {
  if (pageNumber <= 2) return '舆情素养';
  if (pageNumber <= 7) return '用电检查';
  if (pageNumber <= 10) return '输电线路';
  if (pageNumber <= 14) return '变电运行';
  if (pageNumber <= 22) return '配电运行';
  if (pageNumber <= 28) return '新型电力系统';
  if (pageNumber <= 30) return '电力电缆';
  if (pageNumber <= 31) return '数字化与人工智能';
  if (pageNumber <= 43) return '客户服务';
  if (pageNumber <= 51) return '电能计量';
  if (pageNumber <= 54) return '主网调度';
  if (pageNumber <= 59) return '配网调度';
  if (pageNumber <= 63) return '变电检修';
  if (pageNumber <= 69) return '招标采购';
  if (pageNumber <= 71) return '发电技术';
  if (pageNumber <= 72) return '储能技术';
  return '供应链与现代物流';
}

function categoryAtPageStart(pageNumber) {
  if (pageNumber === 72) return '发电技术';
  if (pageNumber === 73) return '储能技术';
  return categoryForPage(pageNumber);
}

function answerFor(line) {
  const letterMatches = [...line.matchAll(/[（(]\s*([A-D]{1,4})\s*[)）]/g)];
  if (letterMatches.length) return [...letterMatches.at(-1)[1]];
  if (/错误|→\s*错|错→/.test(line)) return ['B'];
  if (/正确/.test(line)) return ['A'];
  return [];
}

function cleanQuestion(line) {
  return line
    .replace(/^.*?(?:💡\s*)?e\.?g\.\s*\d+\s*/i, '')
    .replace(/【判断题】|【判断】|【多选题】/g, '')
    .replace(/[（(]PPT原题[)）]/g, '')
    .replace(/[（(]\s*[A-D]{1,4}\s*[)）]/g, '')
    .replace(/[（(]\s*(?:→\s*错(?:误)?|错(?:误)?\s*→).*$/g, '')
    .replace(/[（(]\s*(?:错误|正确)[^）)]*[)）]/g, '')
    .replace(/→\s*错.*$/g, '')
    .replace(/【[^】]*】\s*$/g, '')
    .replace(/[。；;]?\s*$/, '')
    .trim();
}

function sourceVerdict(line, correct) {
  const verdict = correct[0] === 'A' ? '正确' : '错误';
  const rawDetail = line.match(/[（(]\s*(?:错误|正确)[^）)]*[)）]/)?.[0]
    ?? line.match(/(?:错|错误)\s*→.*$/)?.[0]
    ?? line.match(/→\s*错.*$/)?.[0]
    ?? '';
  const detail = rawDetail
    .trim()
    .replace(/^[（(]\s*|\s*[)）]+$/g, '')
    .trim()
    .replace(/^→\s*错(?:误)?\s*/, '')
    .replace(/^错(?:误)?\s*→\s*/, '')
    .replace(/^(?:错误|正确)\s*[，,：:]?\s*/, '')
    .replace(/^[（(]\s*|\s*[)）]+$/g, '')
    .trim();
  return `PDF原文判定：${verdict}${detail ? `（${detail}）` : ''}`;
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
const rawExampleStarts = [];
const sourceByPageCategory = new Map();
const questionPattern = /(?:💡\s*)?e\.?g\.\s*\d+/i;
let activeSourceCategory = null;

for (const [pageNumber, pageText] of rawPages) {
  activeSourceCategory = categoryAtPageStart(pageNumber);
  for (const rawLine of pageText.split(/\r?\n/)) {
    const line = rawLine.trim().replace(/\s+/g, ' ');
    if (!line) continue;
    activeSourceCategory = categoryFromHeading(line) ?? activeSourceCategory;
    if (questionPattern.test(line)) {
      rawExampleStarts.push({ page: pageNumber, category: activeSourceCategory, text: line });
    }
    if (activeSourceCategory) {
      const key = `${pageNumber}:${activeSourceCategory}`;
      const categoryLines = sourceByPageCategory.get(key) ?? [];
      categoryLines.push(line);
      sourceByPageCategory.set(key, categoryLines);
    }
  }
}
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

if (examples.length !== rawExampleStarts.length) {
  errors.push({
    id: 'GLOBAL',
    page: null,
    code: 'RAW_EXAMPLE_COUNT',
    detail: `题库例题 ${examples.length} 道，但 PDF 原始文本检出 ${rawExampleStarts.length} 个例题标记`,
  });
}

for (let index = 0; index < Math.min(examples.length, starts.length); index += 1) {
  const question = examples[index];
  const start = starts[index];
  const nextStart = starts[index + 1]?.index ?? lines.length;
  const block = lines.slice(start.index, nextStart).map((entry) => entry.text).join('\n');
  const blockNormalized = normalize(block);
  const sourceCorrect = answerFor(start.text);

  if (normalize(question.prompt) !== normalize(cleanQuestion(start.text))) {
    issue(errors, question, 'PROMPT_MISMATCH', `题库题干“${question.prompt}”，PDF 题干“${cleanQuestion(start.text)}”`);
  }

  if (question.page !== start.page) {
    issue(errors, question, 'PAGE_MISMATCH', `题库第 ${question.page} 页，PDF 例题实际在第 ${start.page} 页`);
  }


  const rawStart = rawExampleStarts[index];
  if (rawStart?.category && question.category !== rawStart.category) {
    issue(errors, question, 'CATEGORY_MISMATCH', `题库分类“${question.category}”，PDF章节“${rawStart.category}”`);
  }

  if (sourceCorrect.join('') !== question.correct.join('')) {
    issue(errors, question, 'CORRECT_MISMATCH', `题库答案 ${question.correct.join('')}，PDF 标注 ${sourceCorrect.join('') || '缺失'}`);
  }

  if (isVerdictQuestion(start.text)) {
    const verdictOptions = question.options.map((option) => option.text).join('|');
    if (verdictOptions !== '正确|错误') {
      issue(errors, question, 'VERDICT_OPTIONS', `判断题选项应为“正确/错误”，当前为“${verdictOptions}”`);
    }
    const expectedAnswerText = sourceVerdict(start.text, sourceCorrect);
    if (question.answerText !== expectedAnswerText) {
      issue(errors, question, 'VERDICT_ANSWER_TEXT', `题库“${question.answerText}”，PDF应为“${expectedAnswerText}”`);
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
  const normalizedOptions = question.options.map((option) => normalize(option.text));
  if (new Set(normalizedOptions).size !== normalizedOptions.length) {
    issue(errors, question, 'DUPLICATE_OPTION_TEXT', question.options.map((option) => `${option.key}. ${option.text}`).join('；'));
  }
}

const knowledgeByAnswer = new Map();
for (const question of knowledge) {
  const key = normalize(question.answerText);
  const sources = knowledgeByAnswer.get(key) ?? [];
  sources.push(question);
  knowledgeByAnswer.set(key, sources);
}

for (const question of knowledge) {
  const selected = question.options.find((option) => option.key === question.correct[0]);
  if (!selected || selected.text !== question.answerText) {
    issue(errors, question, 'KNOWLEDGE_ANSWER_MISMATCH', `正确选项“${selected?.text ?? '缺失'}”，答案原文“${question.answerText}”`);
  }

  const expectedPrompt = `以下哪项属于“${question.category}”知识板块的资料原文？`;
  if (question.prompt !== expectedPrompt) {
    issue(errors, question, 'KNOWLEDGE_PROMPT_FORMAT', `题库“${question.prompt}”，应为“${expectedPrompt}”`);
  }

  const pageText = (pages.get(question.page) ?? []).join('\n');
  const rawPageText = rawPages.get(question.page) ?? '';
  const categoryPageText = (sourceByPageCategory.get(`${question.page}:${question.category}`) ?? []).join('\n');
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
  if (!normalizeSource(categoryPageText).includes(answerNormalized)) {
    issue(errors, question, 'KNOWLEDGE_CATEGORY_MISMATCH', `答案原文不在 PDF 的“${question.category}”章节内：${question.answerText}`);
  }


  for (const option of question.options) {
    const sources = knowledgeByAnswer.get(normalize(option.text)) ?? [];
    if (!sources.length) {
      issue(errors, question, 'OPTION_WITHOUT_PROVENANCE', `${option.key}. ${option.text}`);
      continue;
    }
    if (!question.correct.includes(option.key) && sources.some((source) => source.category === question.category)) {
      issue(warnings, question, 'DISTRACTOR_SAME_CATEGORY', `${option.key}. ${option.text}`);
    }
    if (
      !question.correct.includes(option.key)
      && normalizeSource(rawPageText).includes(normalize(option.text))
    ) {
      issue(warnings, question, 'DISTRACTOR_ON_SOURCE_PAGE', `${option.key}. ${option.text}`);
    }
  }
}


const ids = questions.map((question) => question.id);
if (new Set(ids).size !== ids.length) {
  errors.push({ id: 'GLOBAL', page: null, code: 'DUPLICATE_ID', detail: '题库存在重复 ID' });
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
