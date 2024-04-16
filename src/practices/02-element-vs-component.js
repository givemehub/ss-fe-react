import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

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

const IconWeather = (props /* { type } */) =>
  React.createElement('img', {
    src: `/icons/weather-${props.type}.svg`,
    alt: '맑고 구름 조금',
    title: '맑고 구름 조금',
  });

class WeatherWidget extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return React.createElement('article', {
      className: 'widget widget__weather',
      children: [
        React.createElement('h2', { className: 'sr-only' }, '날씨'),
        React.createElement(IconWeather),
        React.createElement('div', {
          className: 'weather__info',
          role: 'group',
          children: [
            React.createElement(
              'span',
              { className: 'weater__info--template' },
              '-0.9°'
            ),
            React.createElement(
              'span',
              { className: 'weather__info--description' },
              '어제보다 10.3° 낮아요'
            ),
          ],
        }),
      ],
    });
  }
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement(WeatherWidget),
      React.createElement('h1', {}, '리액트 컴포넌트'),
      React.createElement(IconWeather, { type: 'fine-dust' }),
      React.createElement(IconWeather, { type: 'lightning' }),
      React.createElement(IconWeather, { type: 'partly-cloudy' }),
      React.createElement(IconWeather, { type: 'rainy' }),
      React.createElement(IconWeather, { type: 'sunny' })
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(App)
);
