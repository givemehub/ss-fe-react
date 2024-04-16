import { createElement } from 'react';

export const IconWeather = (props) =>
  createElement('img', {
    src: `/icons/weather-${props.type}.svg`,
    alt: '맑고 구름 조금',
    title: '맑고 구름 조금',
  });
