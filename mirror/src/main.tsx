import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QuizApp from '../../app/page';
import '../../app/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('页面缺少 #root 挂载节点。');
}

createRoot(rootElement).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
);
