import { createElement, Component } from 'react';
import { WeatherWidget } from './components/WeatherWidget';
import { IconWeather } from './components/IconWeather';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return createElement(
      'div',
      { className: 'app' },
      createElement(WeatherWidget),
      createElement('h1', {}, '리액트 컴포넌트'),
      createElement(IconWeather, { type: 'fine-dust' }),
      createElement(IconWeather, { type: 'lightning' }),
      createElement(IconWeather, { type: 'partly-cloudy' }),
      createElement(IconWeather, { type: 'rainy' }),
      createElement(IconWeather, { type: 'sunny' })
    );
  }
}
