'use client';

import { useEffect, useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { questions, type Question } from './questions';

type Mode = 'all' | 'random' | 'wrong';
type View = 'home' | 'quiz' | 'summary';
type AnswerRecord = { attempts: number; lastCorrect: boolean };
type SessionAnswer = { selected: string[]; isCorrect: boolean };
type ProgressState = {
  answered: Record<string, AnswerRecord>;
  wrongIds: string[];
  totalAttempts: number;
  totalCorrect: number;
};

const STORAGE_KEY = 'class19-quiz-progress-v2';
const EMPTY_PROGRESS: ProgressState = {
  answered: {},
  wrongIds: [],
  totalAttempts: 0,
  totalCorrect: 0,
};

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sameAnswer(selected: string[], correct: string[]) {
  return [...selected].sort().join('') === [...correct].sort().join('');
}

function questionById(id: string) {
  return questions.find((question) => question.id === id);
}

export default function Home() {
  const [progress, setProgress] = useState<ProgressState>(EMPTY_PROGRESS);
  const [hydrated, setHydrated] = useState(false);
  const [view, setView] = useState<View>('home');
  const [mode, setMode] = useState<Mode>('all');
  const [category, setCategory] = useState('全部');
  const [sessionIds, setSessionIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, SessionAnswer>>({});
  const [jumpValue, setJumpValue] = useState('1');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setProgress({ ...EMPTY_PROGRESS, ...JSON.parse(saved) });
      } catch {
        setProgress(EMPTY_PROGRESS);
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [hydrated, progress]);

  const categories = useMemo(() => ['全部', ...new Set(questions.map((question) => question.category))], []);
  const categoryPool = useMemo(
    () => category === '全部' ? questions : questions.filter((question) => question.category === category),
    [category],
  );
  const answeredCount = Object.keys(progress.answered).length;
  const accuracy = progress.totalAttempts
    ? Math.round((progress.totalCorrect / progress.totalAttempts) * 100)
    : 0;
  const completion = Math.round((answeredCount / questions.length) * 100);
  const currentQuestion = sessionIds.length ? questionById(sessionIds[currentIndex]) : undefined;
  const modeLabel = mode === 'all' ? '顺序刷题' : mode === 'random' ? '随机 20 题' : '错题重刷';

  function startSession(nextMode: Mode) {
    let pool: Question[] = categoryPool;
    if (nextMode === 'wrong') {
      const wrongSet = new Set(progress.wrongIds);
      pool = categoryPool.filter((question) => wrongSet.has(question.id));
    }
    if (!pool.length) {
      setNotice(nextMode === 'wrong' ? '当前筛选范围还没有错题，先去完成一轮练习吧。' : '当前章节没有可用题目。');
      return;
    }

    const session = nextMode === 'random' ? shuffle(pool).slice(0, 20) : pool;
    setMode(nextMode);
    setSessionIds(session.map((question) => question.id));
    setCurrentIndex(0);
    setSelected([]);
    setSubmitted(false);
    setLastCorrect(false);
    setSessionCorrect(0);
    setSessionAnswers({});
    setJumpValue('1');
    setNotice('');
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function chooseOption(key: string) {
    if (!currentQuestion || submitted) return;
    if (currentQuestion.type === 'single') {
      setSelected([key]);
      return;
    }
    setSelected((previous) => previous.includes(key)
      ? previous.filter((item) => item !== key)
      : [...previous, key]);
  }

  function submitAnswer() {
    if (!currentQuestion || !selected.length || submitted) return;
    const isCorrect = sameAnswer(selected, currentQuestion.correct);
    setSubmitted(true);
    setLastCorrect(isCorrect);
    setSessionAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: { selected: [...selected], isCorrect },
    }));
    if (isCorrect && !sessionAnswers[currentQuestion.id]) {
      setSessionCorrect((value) => value + 1);
    }

    setProgress((previous) => {
      const wrongIds = new Set(previous.wrongIds);
      if (isCorrect && mode === 'wrong') wrongIds.delete(currentQuestion.id);
      if (!isCorrect) wrongIds.add(currentQuestion.id);
      const existing = previous.answered[currentQuestion.id];
      return {
        answered: {
          ...previous.answered,
          [currentQuestion.id]: {
            attempts: (existing?.attempts ?? 0) + 1,
            lastCorrect: isCorrect,
          },
        },
        wrongIds: [...wrongIds],
        totalAttempts: previous.totalAttempts + 1,
        totalCorrect: previous.totalCorrect + (isCorrect ? 1 : 0),
      };
    });
  }

  function showQuestion(targetIndex: number) {
    const boundedIndex = Math.min(Math.max(targetIndex, 0), sessionIds.length - 1);
    if (boundedIndex === currentIndex) {
      setJumpValue(String(boundedIndex + 1));
      return;
    }

    const savedAnswer = sessionAnswers[sessionIds[boundedIndex]];
    setCurrentIndex(boundedIndex);
    setSelected(savedAnswer?.selected ?? []);
    setSubmitted(Boolean(savedAnswer));
    setLastCorrect(savedAnswer?.isCorrect ?? false);
    setJumpValue(String(boundedIndex + 1));
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function previousQuestion() {
    if (currentIndex > 0) showQuestion(currentIndex - 1);
  }

  function nextQuestion() {
    if (currentIndex >= sessionIds.length - 1) {
      setView('summary');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    showQuestion(currentIndex + 1);
  }

  function jumpToQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const targetNumber = Number.parseInt(jumpValue, 10);
    if (!Number.isInteger(targetNumber) || targetNumber < 1 || targetNumber > sessionIds.length) return;
    showQuestion(targetNumber - 1);
  }

  function returnHome() {
    setView('home');
    setSessionIds([]);
    setSelected([]);
    setSubmitted(false);
    setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetProgress() {
    if (!window.confirm('确定清空全部练习进度和错题记录吗？此操作无法撤销。')) return;
    setProgress(EMPTY_PROGRESS);
    setNotice('练习进度已清空。');
  }

  return (
    <main className={`app-shell view-${view}`}>
      <header className="topbar">
        <button className="brand-button" onClick={returnHome} aria-label="返回首页">
          <span className="brand-mark">19</span>
          <span className="brand-copy">
            <span className="eyebrow">入职培训 · 重点整理</span>
            <strong>19班刷题册</strong>
          </span>
        </button>
        <span className="source-pill">{questions.length} 道 · 逐知识点覆盖</span>
      </header>

      {view === 'home' && (
        <>
          <section className="dashboard">
            <div className="intro-card">
              <p className="eyebrow gold">学习工作台</p>
              <h1>把重点，<br />刷成得分点。</h1>
              <p className="intro-copy">选择题统一作答，支持多选。提交后立即显示正确答案原文，答错自动收进错题本。</p>
              <div className="mode-row">
                <button className="primary-button" onClick={() => startSession('all')}>开始顺序刷题</button>
                <button className="secondary-button" onClick={() => startSession('random')}>随机 20 题</button>
              </div>
              <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
            </div>

            <div className="stat-card">
              <span className="stat-label">已完成</span>
              <strong>{answeredCount}<small> / {questions.length}</small></strong>
              <span className="stat-caption">题库覆盖 {completion}%</span>
              <div className="progress-track"><span style={{ width: `${completion}%` }} /></div>
            </div>

            <div className="stat-card accuracy-card">
              <span className="stat-label">累计正确率</span>
              <strong>{accuracy}<small>%</small></strong>
              <span className="stat-caption">共提交 {progress.totalAttempts} 次</span>
              <div className="mini-bars" aria-hidden="true"><i /><i /><i /><i /></div>
            </div>

            <div className="stat-card wrong-card">
              <span className="stat-label">错题本</span>
              <strong>{progress.wrongIds.length}<small> 题</small></strong>
              <span className="stat-caption">答对后可移出错题本</span>
              <button className="text-button" onClick={() => startSession('wrong')} disabled={!progress.wrongIds.length}>立即重刷 →</button>
            </div>
          </section>

          {notice && <div className="notice" role="status">{notice}</div>}

          <section className="home-grid">
            <aside className="chapter-card">
              <div className="section-heading">
                <div><p className="eyebrow">题库范围</p><h2>按章节练习</h2></div>
                <span>{categoryPool.length} 题</span>
              </div>
              <div className="chapter-list">
                {categories.map((item, index) => {
                  const count = item === '全部' ? questions.length : questions.filter((question) => question.category === item).length;
                  return (
                    <button key={item} className={`chapter-item ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>
                      <span className="chapter-index">{String(index).padStart(2, '0')}</span>
                      <span className="chapter-title">{item}</span>
                      <span className="chapter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <article className="guide-card">
              <div className="guide-topline"><span>作答说明</span><span>本机自动保存</span></div>
              <h2>每一次提交，都有原文可核对。</h2>
              <div className="guide-steps">
                <div><span>01</span><strong>选择答案</strong><p>单选题点选一个选项；多选题可勾选多个选项。</p></div>
                <div><span>02</span><strong>提交判题</strong><p>多选题必须选全且不多选，才会判定为正确。</p></div>
                <div><span>03</span><strong>核对原文</strong><p>提交后显示正确选项文字与 PDF 页码，错误题自动收录。</p></div>
              </div>
              <div className="guide-footer">
                <span>当前章节：<strong>{category}</strong></span>
                <button onClick={resetProgress}>清空学习记录</button>
              </div>
            </article>
          </section>
        </>
      )}

      {view === 'quiz' && currentQuestion && (
        <section className="quiz-layout">
          <aside className="session-card">
            <button className="back-button" onClick={returnHome}>← 退出练习</button>
            <div className="session-mobile-progress" aria-label={`第 ${currentIndex + 1} 题，共 ${sessionIds.length} 题`}>
              <span>{modeLabel}</span>
              <strong>{currentIndex + 1}<small> / {sessionIds.length}</small></strong>
            </div>
            <p className="eyebrow">{modeLabel}</p>
            <div className="session-progress-ring" style={{ '--progress': `${((currentIndex + 1) / sessionIds.length) * 360}deg` } as CSSProperties}>
              <span><strong>{currentIndex + 1}</strong><small>/{sessionIds.length}</small></span>
            </div>
            <div className="session-stat"><span>本轮答对</span><strong>{sessionCorrect}</strong></div>
            <div className="session-stat"><span>当前错题</span><strong>{progress.wrongIds.length}</strong></div>
            <p className="storage-note">学习记录保存在当前浏览器中。</p>
          </aside>

          <article className="question-card">
            <div className="question-progress"><span style={{ width: `${((currentIndex + 1) / sessionIds.length) * 100}%` }} /></div>
            <div className="question-meta">
              <span className="question-number">第 {currentIndex + 1} 题</span>
              <span className="type-badge">{currentQuestion.type === 'multiple' ? '多选题' : '单选题'}</span>
              <span className="chapter-name">{currentQuestion.category} · PDF 第 {currentQuestion.page} 页</span>
            </div>
            <nav className="question-quick-nav" aria-label="题目导航">
              <button className="nav-button previous-button" disabled={currentIndex === 0} onClick={previousQuestion}>← 上一题</button>
              <button className="nav-button next-button" onClick={nextQuestion}>{currentIndex === sessionIds.length - 1 ? '查看结果' : '下一题 →'}</button>
              <form className="jump-control" onSubmit={jumpToQuestion}>
                <label htmlFor="jump-question">跳到</label>
                <input
                  id="jump-question"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={sessionIds.length}
                  value={jumpValue}
                  onChange={(event) => setJumpValue(event.target.value)}
                  aria-label={`输入 1 到 ${sessionIds.length} 之间的题号`}
                />
                <span>/ {sessionIds.length}</span>
                <button type="submit" disabled={!/^\d+$/.test(jumpValue) || Number(jumpValue) < 1 || Number(jumpValue) > sessionIds.length}>跳转</button>
              </form>
            </nav>
            <h2>{currentQuestion.prompt}</h2>
            {currentQuestion.type === 'multiple' && !submitted && <p className="multi-hint">本题有多个正确答案，请选择全部正确选项后再提交。</p>}

            <div className="options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = selected.includes(option.key);
                const isCorrectOption = currentQuestion.correct.includes(option.key);
                const optionState = submitted
                  ? isCorrectOption ? 'correct' : isSelected ? 'incorrect' : ''
                  : isSelected ? 'selected' : '';
                return (
                  <button
                    key={option.key}
                    className={`option-button ${optionState}`}
                    onClick={() => chooseOption(option.key)}
                    disabled={submitted}
                    aria-pressed={isSelected}
                  >
                    <span className="option-letter">{option.key}</span>
                    <span className="option-text">{option.text}</span>
                    {submitted && isCorrectOption && <span className="option-mark">✓</span>}
                    {submitted && isSelected && !isCorrectOption && <span className="option-mark wrong">×</span>}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className={`answer-panel ${lastCorrect ? 'is-correct' : 'is-wrong'}`} role="status">
                <div className="answer-icon">{lastCorrect ? '✓' : '!'}</div>
                <div>
                  <strong>{lastCorrect ? '回答正确' : '回答错误，已加入错题本'}</strong>
                  <p><span>正确答案原文</span>{currentQuestion.answerText}</p>
                  <small>来源：《重点整理-19班》PDF 第 {currentQuestion.page} 页</small>
                  {lastCorrect && mode === 'wrong' && <small className="removed-note">本题已从错题本移出。</small>}
                </div>
              </div>
            )}

            <div className="question-footer">
              <span>{submitted ? `正确选项：${currentQuestion.correct.join('、')}` : selected.length ? `已选择：${[...selected].sort().join('、')}` : '请选择答案'}</span>
              {!submitted
                ? <button className="submit-button" disabled={!selected.length} onClick={submitAnswer}>提交答案</button>
                : <button className="submit-button" onClick={nextQuestion}>{currentIndex === sessionIds.length - 1 ? '查看本轮结果' : '下一题 →'}</button>}
            </div>
          </article>
        </section>
      )}

      {view === 'summary' && (
        <section className="summary-card">
          <div className="summary-badge">本轮完成</div>
          <p className="eyebrow">{modeLabel}</p>
          <h1>{sessionCorrect}<small> / {sessionIds.length}</small></h1>
          <p className="summary-copy">本轮正确率 {Math.round((sessionCorrect / sessionIds.length) * 100)}%，当前错题本共有 {progress.wrongIds.length} 道题。</p>
          <div className="summary-actions">
            <button className="primary-button" onClick={() => startSession(mode)}>再刷一轮</button>
            <button className="outline-button" onClick={returnHome}>返回首页</button>
            {!!progress.wrongIds.length && <button className="outline-button coral" onClick={() => startSession('wrong')}>重刷错题</button>}
          </div>
        </section>
      )}

      <footer className="disclaimer">
        <span>资料说明</span>
        本题库依据“重点整理-19班”的正文知识点与原文例题制作。原资料为19班学员个人学习整理，仅供备考参考，非官方复习材料，考试内容请以培训课件为准。
      </footer>
    </main>
  );
}
