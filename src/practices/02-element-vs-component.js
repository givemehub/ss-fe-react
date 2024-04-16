import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../App';

// ------------------------------------------------------------
// React Element
// ------------------------------------------------------------

// const reactElement = {
//   $$typeof: 'Symbol(react.element)',
//   key: null,
//   type: 'div',
//   props: {
//     className: 'virtual-element',
//     children: 'hi react',
//   },
// };

// console.log({ reactElement });

// ------------------------------------------------------------
// React Component (Reusability)
// - 재사용 또는 변형을 목적으로 리액트 엘리먼트를 반환하는 클래스 또는 함수
// - class
// - funciton
// ------------------------------------------------------------

// React.createElement()
// 리액트 엘리먼트 생성

// ReactDOM.createRoot()
// 리액트 앱을 브라우저에 렌더링 할 리액트 돔 루트 생성

// function IconWeather() {
//   return React.createElement('img', {
//     src: '/icons/weather-lightning.svg',
//     alt: '맑고 구름 조금',
//     title: '맑고 구름 조금',
//   });
// }

// const IconWeather = () => {
//   return React.createElement('img', {
//     src: '/icons/weather-lightning.svg',
//     alt: '맑고 구름 조금',
//     title: '맑고 구름 조금',
//   });
// }

createRoot(document.getElementById('root')).render(createElement(App));
