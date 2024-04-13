import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Headline } from '@/components';

describe('Headline 컴포넌트', () => {
  it('props.children 렌더링', () => {
    render(<Headline>컴포넌트 렌더 테스트</Headline>);

    screen.debug();

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/렌더/i);
  });
});
