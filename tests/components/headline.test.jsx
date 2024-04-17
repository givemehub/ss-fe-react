import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Headline } from '@/components';

describe('Headline 컴포넌트', () => {
  it('초기 렌더링 (props.children 표시)', () => {
    // screen.debug();

    const textContent = 'TESTING LIBRARY';
    render(<Headline>{textContent}</Headline>);
    // screen.debug();

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/testing library/i);
  });
});
