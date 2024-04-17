import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TermsAndConditions } from './terms-and-conditions';

describe('TermsAndConditions 컴포넌트', () => {
  const renderComponent = () => {
    const user = userEvent.setup();
    render(<TermsAndConditions />);

    return {
      user,
      heading: screen.getByRole('heading', { level: 2 }),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    };
  };

  // 렌더링 테스트
  it('이용 약관 렌더링', () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/확인/);
  });

  // 상호작용 테스트
  it('이용 약관 체크 후, 확인 과정 렌더링', async () => {
    const { user, checkbox, button } = renderComponent();

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(button);
  });
});
