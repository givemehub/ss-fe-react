import { createElement, Component } from 'react';
import { IconWeather } from './IconWeather';

export class WeatherWidget extends Component {
  constructor(props) {
    console.log('WeatherWidget Props: ', props);
    super(props);
  }

  render() {
    return createElement('article', {
      className: 'widget widget__weather',
      children: [
        createElement('h2', { className: 'sr-only' }, '날씨'),
        createElement(IconWeather),
        createElement('div', {
          className: 'weather__info',
          role: 'group',
          children: [
            createElement(
              'span',
              { className: 'weater__info--template' },
              '-0.9°'
            ),
            createElement(
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
