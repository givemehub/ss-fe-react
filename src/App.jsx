import { Component } from 'react';
// import { jsx } from 'react/jsx-runtime';
import { Description, Headline, IconReact, Link } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state /* component data */ = {
      container: {
        className: 'learn',
      },
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
    const {
      container: { className: mainClassName },
      headline,
      description,
      link,
    } = this.state;
    const { text: linkText, ...restLinkProps } = link;
    // const { className, href, target, rel } = restLinkProps;

    return (
      <main className={mainClassName}>
        {/* 슬롯(slot) = props.children */}
        <Headline>{headline}</Headline>
        {/* 기본 슬롯(default slot) = props.children */}
        <Description>{description}</Description>
        {/* classic: React.createElement */}
        {/* automatic: React.jsx */}
        {/* {jsx(Link, {
          ...restLinkProps,
          children: linkText,
        })} */}
        {/* <Link className={className} href={href} rel={rel} target={target}>
          {linkText}
        </Link> */}
        <Link
          {...restLinkProps}
          // 이름이 부여된 슬롯 (named slot: named prop)
          icon={<IconReact />}
        >
          {/* 기본 슬롯 (default slot: props.children) */}
          {linkText}
        </Link>
      </main>
    );
  }
}

export default App;
