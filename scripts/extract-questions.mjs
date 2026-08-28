import fs from 'node:fs';
import path from 'node:path';

const inputPath = process.argv[2];
const outputPath = process.argv[3];
const knowledgeInputPath = process.argv[4];

if (!inputPath || !outputPath) {
  throw new Error('Usage: node scripts/extract-questions.mjs <layout.txt> <output.ts> [raw.txt]');
}

const raw = fs.readFileSync(inputPath, 'utf8');
const rawLines = raw.split(/\r?\n/);
const lines = [];
let page = 1;

for (let index = 0; index < rawLines.length; index += 1) {
  const rawLine = rawLines[index];
  const pageBreaks = (rawLine.match(/\f/g) || []).length;
  const text = rawLine.replace(/\f/g, '').trim();
  lines.push({ index, lineNumber: index + 1, page, text });
  page += pageBreaks;
}

const questionPattern = /(?:💡\s*)?e\.?g\.\s*\d+/i;
const noisePattern = /^(班|１９|理|整|重点整理-19班|⭐️|考点速记[：:]?)$/;

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

function cleanQuestion(line) {
  return line
    .replace(/^.*?(?:💡\s*)?e\.?g\.\s*\d+\s*/i, '')
    .replace(/【判断题】|【判断】|【多选题】/g, '')
    .replace(/[（(]PPT原题[)）]/g, '')
    .replace(/[（(]\s*[A-D]{1,4}\s*[)）]/g, '')
    .replace(/[（(]\s*(?:错误|正确)[^）)]*[)）]/g, '')
    .replace(/→\s*错.*$/g, '')
    .replace(/【[^】]*】\s*$/g, '')
    .replace(/[。；;]?\s*$/, '')
    .trim();
}

function answerFor(line) {
  const letterMatches = [...line.matchAll(/[（(]\s*([A-D]{1,4})\s*[)）]/g)];
  if (letterMatches.length) return [...letterMatches.at(-1)[1]];
  if (/错误|→\s*错|错→/.test(line)) return ['B'];
  if (/正确/.test(line)) return ['A'];
  return [];
}

function splitOptions(text) {
  const normalized = text.replace(/^[^A-D]*(?=[A-D][.．、])/u, '');
  const matches = [...normalized.matchAll(/([A-D])[.．、]\s*/g)];
  if (!matches.length) return [];

  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? normalized.length;
    return {
      key: match[1],
      text: normalized.slice(start, end).trim().replace(/\s+/g, ' '),
    };
  });
}

function sourceVerdict(line, correct) {
  const verdict = correct[0] === 'A' ? '正确' : '错误';
  const rawDetail = line.match(/[（(]\s*(?:错误|正确)[^）)]*[)）]/)?.[0]
    ?? line.match(/(?:错|错误)\s*→.*$/)?.[0]
    ?? line.match(/→\s*错.*$/)?.[0]
    ?? '';
  const detail = rawDetail
    .replace(/^[（(]|[)）]$/g, '')
    .replace(/^(?:错误|正确)\s*[，,：:]?\s*/, '')
    .replace(/^错\s*→\s*/, '应为：')
    .trim();
  return `PDF原文判定：${verdict}${detail ? `（${detail}）` : ''}`;
}

const starts = lines.filter((entry) => questionPattern.test(entry.text));
const questions = [];

for (let qIndex = 0; qIndex < starts.length; qIndex += 1) {
  const start = starts[qIndex];
  const nextStart = starts[qIndex + 1]?.index ?? lines.length;
  const correct = answerFor(start.text);
  const hasLetterAnswer = /[（(]\s*[A-D]{1,4}\s*[)）]/.test(start.text);
  const isVerdict = !hasLetterAnswer && /判断|正确|错误|→\s*错|错→/.test(start.text);
  const optionMap = new Map();

  if (!isVerdict) {
    const scanEnd = Math.min(nextStart, start.index + 55);
    for (let i = start.index + 1; i < scanEnd; i += 1) {
      const text = lines[i].text;
      if (!text || noisePattern.test(text)) continue;
      for (const option of splitOptions(text)) {
        if (option.text && !optionMap.has(option.key)) optionMap.set(option.key, option.text);
      }
      if (optionMap.size >= 4) break;
    }
  }

  const options = isVerdict
    ? [{ key: 'A', text: '正确' }, { key: 'B', text: '错误' }]
    : [...optionMap.entries()].map(([key, text]) => ({ key, text }));

  const answerText = isVerdict
    ? sourceVerdict(start.text, correct)
    : correct.map((key) => {
        const option = options.find((item) => item.key === key);
        return option ? `${key}. ${option.text}` : `${key}.（原文选项待核对）`;
      }).join('；');

  questions.push({
    id: `q${String(qIndex + 1).padStart(3, '0')}`,
    category: categoryForPage(start.page),
    page: start.page,
    type: correct.length > 1 ? 'multiple' : 'single',
    prompt: cleanQuestion(start.text),
    options,
    correct,
    answerText,
  });
}

const overrides = {
  q001: { options: [
    { key: 'A', text: '显微镜里看舆情' },
    { key: 'B', text: '放大镜里看舆情' },
    { key: 'C', text: '望远镜里看舆情' },
    { key: 'D', text: '哈哈镜里看舆情' },
  ] },
  q004: { options: [
    { key: 'A', text: '12小时' }, { key: 'B', text: '24小时' },
    { key: 'C', text: '36小时' }, { key: 'D', text: '48小时' },
  ] },
  q050: { options: [
    { key: 'A', text: '电动汽车' }, { key: 'B', text: '空调负荷' },
    { key: 'C', text: '智能电表' }, { key: 'D', text: '负荷调控点' },
  ] },
  q051: { options: [
    { key: 'A', text: '储能技术' }, { key: 'B', text: '电力电子技术' },
    { key: 'C', text: '信息技术与通信技术' }, { key: 'D', text: '电压调控技术' },
  ] },
};

for (const question of questions) {
  const override = overrides[question.id];
  if (!override) continue;
  Object.assign(question, override);
  question.answerText = question.correct.map((key) => {
    const option = question.options.find((item) => item.key === key);
    return option ? `${key}. ${option.text}` : `${key}.（原文选项待核对）`;
  }).join('；');
}

function stripMarker(text) {
  return text
    .replace(/^\d+(?:\.\d+)*[.、]?\s*/, '')
    .replace(/^[a-zA-ZivxIVX]+[.、]\s*/, '')
    .replace(/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]\s*/, '')
    .replace(/^（考点[？?]?）\s*/, '')
    .replace(/^\(考点[？?]?\)\s*/, '')
    .trim();
}

function buildKnowledgeQuestions(rawText) {
  const rawPages = rawText.split(/\f/).filter((value, index, all) => value.trim() || index < all.length - 1);
  const points = [];
  const seen = new Set();
  const watermark = /^(?:１|９|班|整|理)$/;
  const optionLine = /^[A-D][.．、]\s*/;
  const newItem = /^(?:\d+(?:\.\d+)*[.、]?\s+|[a-zA-ZivxIVX]+[.、]\s+|[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]\s*)/;
  const labelLine = /^[^，。；]{1,28}[：:=]/;

  rawPages.forEach((pageText, pageIndex) => {
    const pageNumber = pageIndex + 1;
    const category = categoryForPage(pageNumber);
    const sourceLines = pageText.split(/\r?\n/)
      .map((value) => value.trim().replace(/\s+/g, ' '))
      .filter((value) => value && !watermark.test(value));
    const merged = [];

    for (const line of sourceLines) {
      if (questionPattern.test(line) || optionLine.test(line)) continue;
      if (/^(?:重点整理-19班|📢\s*免责声明|本文档为19班|内容请以培训课件|⭐️|考点速记[：:]?)$/.test(line)) continue;

      const previous = merged.at(-1);
      const previousIsShortHeading = previous
        && newItem.test(previous)
        && stripMarker(previous).length <= 24
        && !/[：:，。；=→]/.test(stripMarker(previous));
      const shouldJoin = previous
        && !/[。；;：:]$/.test(previous)
        && !previousIsShortHeading
        && !newItem.test(line)
        && !labelLine.test(line)
        && !/^(?:第[一二三四五六七八九十]+|[一二三四五六七八九十]+[、.])/.test(line);

      if (shouldJoin) merged[merged.length - 1] = `${previous}${line}`;
      else merged.push(line);
    }

    let section = category;
    let group = '';

    for (const rawLine of merged) {
      const line = rawLine
        .replace(/^\s+|\s+$/g, '')
        .replace(/\s+([，。；：）])/g, '$1')
        .trim();
      if (!line || line.length < 4) continue;
      if (/免责声明|仅供备考参考|不划定考试范围|批评指正/.test(line)) continue;
      if (/例题|章节框架|考点小结/.test(line)) continue;

      const plain = stripMarker(line);
      const isMajorHeading = /^\d+\.\s*(?:舆情素养|电力系统基础|供应链[:：])/.test(line);
      const isSubHeading = /^\d+(?:\.\d+)+\s+/.test(line) && !/[：:，。；]/.test(plain);
      const isShortNumberedHeading = /^\d+[.、]\s+/.test(line) && plain.length <= 18 && !/[：:，。；=→]/.test(plain);
      const isGroupHeading = /[：:]$/.test(line) && line.length <= 45;

      if (isMajorHeading || isSubHeading || isShortNumberedHeading) {
        section = plain.replace(/[：:]$/, '');
        group = '';
        continue;
      }
      if (isGroupHeading) {
        group = plain.replace(/[：:]$/, '');
        continue;
      }

      const normalized = plain.replace(/[；;]$/, '').trim();
      if (normalized.length < 4 || normalized.length > 280 || seen.has(normalized)) continue;
      seen.add(normalized);
      points.push({ category, page: pageNumber, section, group, text: normalized });
    }
  });

  const optionKeys = ['A', 'B', 'C', 'D'];
  const questionsFromPoints = points.map((point, index) => {
    const contextParts = [point.category, point.section, point.group]
      .filter(Boolean)
      .filter((value, valueIndex, all) => all.indexOf(value) === valueIndex);
    const context = contextParts.slice(-2).join(' / ');
    const distractors = [];
    const offsets = [17, 41, 73, 109, 151, 197, 239];

    for (const offset of offsets) {
      const candidate = points[(index + offset) % points.length];
      if (!candidate || candidate.text === point.text || candidate.category === point.category) continue;
      if (!distractors.includes(candidate.text)) distractors.push(candidate.text);
      if (distractors.length === 3) break;
    }
    for (let cursor = 1; distractors.length < 3 && cursor < points.length; cursor += 1) {
      const candidate = points[(index + cursor) % points.length];
      if (candidate.text !== point.text && !distractors.includes(candidate.text)) distractors.push(candidate.text);
    }

    const correctPosition = index % 4;
    const optionTexts = [...distractors];
    optionTexts.splice(correctPosition, 0, point.text);

    return {
      id: `kp${String(index + 1).padStart(3, '0')}`,
      category: point.category,
      page: point.page,
      type: 'single',
      prompt: `关于“${context}”，以下哪项与资料原文一致？`,
      options: optionTexts.map((text, optionIndex) => ({ key: optionKeys[optionIndex], text })),
      correct: [optionKeys[correctPosition]],
      answerText: point.text,
    };
  });

  return { points, questions: questionsFromPoints };
}

const knowledgeResult = knowledgeInputPath
  ? buildKnowledgeQuestions(fs.readFileSync(knowledgeInputPath, 'utf8'))
  : { points: [], questions: [] };
const allQuestions = [...questions, ...knowledgeResult.questions];

const invalid = allQuestions.filter((question) => {
  const keys = new Set(question.options.map((option) => option.key));
  return !question.prompt || question.options.length < 2 || !question.correct.length || question.correct.some((key) => !keys.has(key));
});

if (invalid.length) {
  console.error(JSON.stringify(invalid, null, 2));
  throw new Error(`${invalid.length} invalid questions require review.`);
}

const output = `export type Question = {\n  id: string;\n  category: string;\n  page: number;\n  type: 'single' | 'multiple';\n  prompt: string;\n  options: { key: string; text: string }[];\n  correct: string[];\n  answerText: string;\n};\n\nexport const questions: Question[] = ${JSON.stringify(allQuestions, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Generated ${allQuestions.length} questions (${questions.length} examples + ${knowledgeResult.questions.length} knowledge points) at ${outputPath}`);
