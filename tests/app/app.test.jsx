import App from '@/app/app.default';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('App 컴포넌트', () => {
  it('렌더링', () => {
    render(<App />);
    const app = screen.getByTestId('app');

    screen.debug();
    expect(app).toBeInTheDocument();
  });
});
