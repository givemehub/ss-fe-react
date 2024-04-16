// Markup

// <main class="learn">
//   <h1>리액트 러닝 가이드</h1>
//   <p>리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.</p>
//   <a class="button" href="https://react.dev" target="_blank" rel="noopener noreferrer">
//     react.dev
//   </a>
// </main>

// React
import { createElement } from 'https://esm.sh/react';

// Web     ( ReactDOM )
// Mobile  ( React Native )
// Desktop ( Electron )

// ReactDOM (for Web app)
import { createRoot } from 'https://esm.sh/react-dom/client';

// React.ReactElement
// 가상 DOM 엘리먼트 (그냥 객체에 불과)
const heading = createElement(
  // type,
  'h1',
  // props,
  null, // {}
  // ...children (slot)
  '리액트 러닝 가이드' // props.children
);

const paragraph = createElement('p', {}, [
  '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.',
]);

const link = createElement(
  'a',
  {
    className: 'button',
    href: 'https://react.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: ['react.dev'],
  }
  // 'react.dev'
);

const main = createElement('main', {
  className: 'learn',
  children: [heading, paragraph, link],
});

// React DOM Tree
// React DOM Root Element
console.log(main);

// React를 렌더링 할 DOM 엘리먼트 (컨테이너)
// 웹 표준 DOM API
const rootElement = document.getElementById('root');

// 타입 가드
if (rootElement && rootElement.nodeType === document.ELEMENT_NODE) {
  // ReactDOM Root 생성
  const reactDOMRoot = createRoot(rootElement);

  reactDOMRoot.render(main);
} else {
  alert('"root" 이름의 DOM 요소가 문서에 존재하지 않습니다.');
}
