import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import App from '@/app';

describe('App 컴포넌트', () => {
  it('렌더링', () => {
    render(<App />);
    const app = screen.getByTestId('app');

    screen.debug();
    expect(app).toBeInTheDocument();
  });
});
