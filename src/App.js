import { createElement, Component } from 'react';
import { Headline, Description, Link } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '리액트 러닝 가이드',
      description:
        '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.',
      link: {
        className: 'button',
        href: 'https://react.dev',
        target: '_blank',
        rel: 'noopener noreferrer',
        text: 'react.dev',
      },
    };
  }

  render() {
    const { headline, description, link } = this.state;
    const { text: linkText, ...restLinkProps } = link;

    return createElement(
      'main',
      { className: 'learn' },
      createElement(Headline, {}, headline),
      createElement(Description, {}, description),
      createElement(Link, restLinkProps, linkText)
    );
  }
}

export default App;
