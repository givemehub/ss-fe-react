import './styles/globals.css';
import { createElement as h } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const headline = h('h1', {}, '리액트 러닝 가이드');

const description = h(
  'p',
  {},
  '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.'
);

const link = h(
  'a',
  {
    className: 'button',
    href: 'https://react.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  'react.dev'
);

const app = h('main', { className: 'learn' }, headline, description, link);

const rootElement = document.getElementById('root');

if (rootElement) {
  const reactRoot = createRoot(rootElement);
  reactRoot.render(app);
} else {
  alert('id 속성 이름이 root인 요소가 문서에 존재하지 않습니다.');
}
