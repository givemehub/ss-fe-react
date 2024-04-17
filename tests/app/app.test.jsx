import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from '@/app/app';

it('App 컴포넌트 렌더링', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();

  // screen.debug();

  // const main = screen.getByRole('main');
  // expect(main).toBeInTheDocument();
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();

  // DOM API ❌
  // expect(container.querySelector('.learn')).toBeInTheDocument();
});
