import { Component, Fragment } from 'react';
import { Description, Headline, Link } from '@/components';
import { getPublic } from '@/utils';

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
    products: [
      {
        id: crypto.randomUUID(),
        title: '두부 5kg',
        price: 9800,
        image:
          'https://images.pexels.com/photos/4518610/pexels-photo-4518610.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: crypto.randomUUID(),
        title: '만두 3kg',
        price: 26700,
        image:
          'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    headline: '리액트 러닝 가이드',
    description:
      '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.',
    link: {
      className: 'button',
      href: 'https://dev',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'react.dev',
    },
  };

  render() {
    const { headline, description, link, products } = this.state;
    const announceText = '리액트 공식 문서 (새 탭 열림)';
    const imageStyles = {
      blockSize: 12,
      inlinleSize: 12,
      verticalAlign: -1,
    };

    return (
      <>
        <Headline>{headline}</Headline>
        {products.map(({ title, price, id }) => (
          <Fragment key={id}>
            <Description message={title} />
            <Description message={price} />
          </Fragment>
        ))}
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
      </>
    );
  }
}

export default App;
