import { Link } from '@/components';
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

describe('Link 컴포넌트', () => {
  it('내부 링크 렌더링', () => {
    render(<Link href="/home">홈</Link>);

    screen.debug();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(/홈/);
  });

  it('외부 링크 렌더링', () => {
    const linkInfo = {
      href: 'https://react.dev',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'React',
    };

    render(
      <Link href={linkInfo.href} target={linkInfo.target} rel={linkInfo.rel}>
        {linkInfo.text}
      </Link>
    );

    screen.debug();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', linkInfo.href);
    expect(link).toHaveAttribute('target', linkInfo.target);
    expect(link).toHaveAttribute('rel', linkInfo.rel);
    expect(link).toHaveTextContent(/react/i);
  });
});
