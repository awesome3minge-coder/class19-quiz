import fs from 'node:fs';
import path from 'node:path';

const questionsPath = process.argv[2] ?? path.resolve('app/questions.ts');

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

function isUnbalanced(value, left, right) {
  return [...value].filter((character) => character === left).length
    !== [...value].filter((character) => character === right).length;
}

const questions = readQuestions(questionsPath);
const knowledge = questions.filter((question) => /^kp\d+$/.test(question.id));
const issues = [];

function issue(question, code, detail) {
  issues.push({ id: question.id, page: question.page, code, detail });
}

const promptGroups = Object.groupBy(knowledge, (question) => normalize(question.prompt));
for (const groupedQuestions of Object.values(promptGroups)) {
  if (groupedQuestions.length < 2) continue;
  const correctTexts = new Set(groupedQuestions.flatMap((question) => question.options
    .filter((option) => question.correct.includes(option.key))
    .map((option) => normalize(option.text))));
  for (const question of groupedQuestions) {
    for (const option of question.options.filter((item) => !question.correct.includes(item.key))) {
      if (correctTexts.has(normalize(option.text))) {
        issue(question, 'CROSS_QUESTION_ANSWER', `${option.key}. ${option.text}`);
      }
    }
  }
}

const vaguePromptPattern = /^(?:颁布情况|适用范围|处理措施|考试要求|挑战[一二三]|核心目标|业务类型|用户性质|看不到的方面|主要特征|三大关键技术|运营机制|基础设施|物质基础|核心引擎|关键驱动|新发力点)(?:是|为|包括哪些内容)？?：?$/;

for (const question of knowledge) {
  if (/^关于“.*”，下列说法正确的是：$/.test(question.prompt)) {
    issue(question, 'ANSWER_PREFIX_IN_PROMPT', question.prompt);
  }
  if (vaguePromptPattern.test(question.prompt.trim())) {
    issue(question, 'MISSING_SUBJECT', question.prompt);
  }

  for (const option of question.options) {
    if (isUnbalanced(option.text, '（', '）') || isUnbalanced(option.text, '(', ')')) {
      issue(question, 'UNBALANCED_OPTION_BRACKETS', `${option.key}. ${option.text}`);
    }
    if (isUnbalanced(option.text, '“', '”')) {
      issue(question, 'UNBALANCED_OPTION_QUOTES', `${option.key}. ${option.text}`);
    }
    if (/[+＋/]$/.test(option.text) || /[（(][^）)]*$/.test(option.text)) {
      issue(question, 'TRUNCATED_OPTION', `${option.key}. ${option.text}`);
    }
  }
}

const groupedIssues = Object.groupBy(issues, (item) => item.code);
const report = {
  counts: {
    total: questions.length,
    knowledge: knowledge.length,
    issues: issues.length,
  },
  issuesByCode: Object.fromEntries(Object.entries(groupedIssues).map(([code, items]) => [code, items.length])),
  issues,
};

console.log(JSON.stringify(report, null, 2));
if (issues.length) process.exitCode = 1;
