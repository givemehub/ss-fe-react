// --------------------------------------------------------------------------
// Virtual DOM

// 🔶 lib 폴더에 아래 유틸리티 함수를 각 파일에 작성하고, 내보내기 구문을 설정합니다.
//
// lib/
// ├── virtual/ # React
// │   ├── createElement.js
// │   └── index.js
// ├── virtual-dom/ # ReactDOM
// │   ├── VirtualDomRoot.js
// │   ├── createRoot.js
// │   └── index.js
// └── index.js

// Web Browser env.
// import * as VirtualModule from './lib/index.js';
import * as Virtual from './lib/index.js';

const { createElement, createRoot } = Virtual;

// 버츄얼 DOM 엘리먼트
// like React
const headingElement = createElement(
  'h1',
  { id: 'big-headline', className: 'heading', lang: 'en-UK' },
  '🍥',
  ' ',
  'ECMAScript is JavaScript'
);

const appElement = createElement(
  'div',
  { className: 'app' },
  headingElement,
  createElement(
    'p',
    {},
    'React is ',
    createElement(
      'strong',
      {},
      createElement('abbr', { title: 'JavaScript' }, 'JS'),
      ' Library'
    )
  )
);

// console.log(headingElement);

// 실제 DOM 엘리먼트
const rootElement = document.getElementById('root');
// console.log(rootElement);

// 가상 DOM 루트 생성
const virtualDomRoot = createRoot(rootElement);
// console.log(virtualDomRoot);

virtualDomRoot.render(appElement);

/* -------------------------------------------------------------------------- */

// 실제 DOM 엘리먼트
// 웹 표준 DOM API
// HTMLDivElement class
// new HTMLDivElement()
const div = document.createElement('div');
div.setAttribute('role', 'button');
div.textContent = 'this is a button';
console.log(div.nodeType === document.ELEMENT_NODE);

document.body.insertAdjacentElement('beforeend', div);

// React or Vue.js
// 가상 DOM 엘리먼트
// Virtual.createElement
const vDiv = Virtual.createElement(
  'div',
  {
    role: 'button',
  },
  'this is a virtual dom button'
);

console.log(vDiv.nodeType === document.ELEMENT_NODE);

// document.body.insertAdjacentElement('beforeend', vDiv);
