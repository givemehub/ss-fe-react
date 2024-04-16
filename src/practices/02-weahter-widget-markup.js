// 생성할 마크업 (구조 설계)
/* 
<article class="widget widget__weather">
  <h2 class="sr-only">날씨</h2>
  <img src="/images/weather-partly-cloudy.svg" alt="맑고 구름 조금" title="맑고 구름 조금" />
  <div class="weather__info" role="group">
    <span class="weather__info--template">-0.9°</span>
    <span class="weather__info--description">어제보다 1.3° 낮아요</span>
  </div>
</article>
*/

// 리액트 모듈 불러오기
import { createElement as h } from 'https://esm.sh/react';

// 리액트 돔 모듈 불러오기
import { createRoot } from 'https://esm.sh/react-dom/client';

// 1. React.createElement를 사용한다.
//    날씨 위젯 마크업을 생성한다.
//    날씨 위젯 스타일은 CSS 파일에 추가한다.
const weatherWidget = h('article', {
  className: 'widget widget__weather',
  children: [
    h('h2', { className: 'sr-only' }, '날씨'),
    h('img', {
      src: '/icons/weather-partly-cloudy.svg',
      alt: '맑고 구름 조금',
      title: '맑고 구름 조금',
    }),
    h('div', {
      className: 'weather__info',
      role: 'group',
      children: [
        h('span', { className: 'weater__info--template' }, '-0.9°'),
        h(
          'span',
          { className: 'weather__info--description' },
          '어제보다 1.3° 낮아요'
        ),
      ],
    }),
  ],
});

const app = h('div', {
  className: 'app',
  children: [weatherWidget],
});

// console.log(app);

// 2. ReactDOM.createRoot를 사용한다.
createRoot(document.getElementById('root')).render(app);
