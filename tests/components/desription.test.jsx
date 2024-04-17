import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Description } from '@/components';

describe('Description 컴포넌트', () => {
  it('props.children 렌더링', () => {
    render(<Description>컴포넌트 렌더 테스트</Description>);

    // screen.debug();

    const description = screen.getByRole('paragraph');

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(/렌더/i);
  });

  it('props.message 렌더링', () => {
    render(
      <Description message="메시지 콘텐츠 출력">
        컴포넌트 렌더 테스트
      </Description>
    );

    // screen.debug();

    const description = screen.getByRole('paragraph');

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(/메시지 콘텐츠/i);
  });

  it('외부 속성 확장 렌더링', () => {
    render(<Description lang="es">¡Reaccionar es increíble!</Description>);
    // screen.debug();

    const description = screen.getByRole('paragraph');
    expect(description).toHaveAttribute('lang', 'es');
  });
});
