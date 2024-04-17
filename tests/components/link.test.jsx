import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from '@/components';

describe('Link 컴포넌트', () => {
  it('<a href> 링크 요소 렌더링', () => {
    render(<Link href="/">홈</Link>);

    const link = screen.getByRole('link', { name: /홈/ });
    expect(link).toBeInTheDocument();
  });

  it('버튼 모양 렌더링', () => {
    render(
      <Link href="/" className="button">
        홈
      </Link>
    );

    const link = screen.getByRole('link', { name: /홈/ });
    expect(link).toHaveClass('button');
  });

  it('외부 링크 렌더링', () => {
    render(
      <Link
        href="https://ko.react.dev"
        rel="noopener"
        target="_blank"
        className="button"
      >
        리액트 공식 문서 (번역)
      </Link>
    );

    const link = screen.getByRole('link', { name: /리액트/ });
    expect(link).toHaveAttribute('rel');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('주어진 속성 외 추가 속성 확장 렌더링', () => {
    render(
      <Link
        href="https://ko.react.dev"
        className="button"
        aria-label="리액트 공식 문서 (번역)"
      >
        react.dev
      </Link>
    );
    // screen.debug();

    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('aria-label', '리액트 공식 문서 (번역)');
  });
});
