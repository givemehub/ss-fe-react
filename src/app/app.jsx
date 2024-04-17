import { Component } from 'react';
import { Description, Headline, Link } from '@/components';
import { getPublic } from '@/components';

class App extends Component {
  // 클래스 필드 구문 지원
  // constructor(props) {
  //   super(props);
  // }

  // 데이터 분리
  state = {
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

  render() {
    const { headline, description, link } = this.state;
    const announceText = '리액트 공식 문서 (새 탭 열림)';
    const imageStyles = {
      blockSize: 12,
      inlinleSize: 12,
      verticalAlign: -1,
    };

    return (
      <main data-testid="app" className="learn">
        {/* JSX 주석 */}
        {/* 기본 슬롯 */}
        <Headline>{headline}</Headline>
        {/* 이름이 설정된 슬롯 */}
        <Description message={description}></Description>
        {/* 속성 바인딩 */}
        <Link
          // 예약어 사용 못함
          className={link.className}
          href={link.href}
          target={link.target}
          rel={link.rel}
          // data-* 속성
          data-json-string={JSON.stringify(link)}
          // aria-* 속성
          aria-label={announceText}
          title={announceText}
        >
          {/* 셀프 클로즈(self close) */}
          <img
            src={getPublic('react.svg')}
            alt="리액트 공식 문서"
            // 인라인 스타일
            style={imageStyles}
          />{' '}
          {link.text}
        </Link>
      </main>
    );
  }
}

export default App;
