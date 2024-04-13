import './styles/globals.css';
import { createRoot } from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  alert('id 속성 이름이 "root"인 요소가 문서에 존재하지 않습니다.');
}
