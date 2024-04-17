import { Component } from 'react';
import { Description, Headline, Link } from './components';
import { getPublic } from './utils';
import { UserList } from './components/users/user-list';

class App extends Component {
  state = {
    users: [
      {
        id: crypto.randomUUID(),
        name: '리액트',
      },
      {
        id: crypto.randomUUID(),
        name: '리액트 라우터',
      },
    ],
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
      <main className="learn" data-testid="app">
        <Headline>{headline}</Headline>
        <Description message={description}></Description>
        <Link
          className={link.className}
          href={link.href}
          target={link.target}
          rel={link.rel}
          data-json-string={JSON.stringify(link)}
          aria-label={announceText}
          title={announceText}
        >
          <img
            src={getPublic('react.svg')}
            alt="리액트 공식 문서"
            style={imageStyles}
          />{' '}
          {link.text}
        </Link>

        <UserList users={[]} />
        <hr />
        <UserList users={this.state.users} />
      </main>
    );
  }
}

export default App;
