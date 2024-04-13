import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TermsAndConditions } from '@/components';

describe('TermsAndConditions 컴포넌트', () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    };
  };

  it('이용 약관 최초 렌더링', () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toHaveTextContent(/이용 약관/);
    expect(checkbox).not.toBeChecked();
    expect(button).toHaveTextContent(/확인/);
    // expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('이용 약관 체크 또는 해제 시, 확인 버튼 활성 또는 비활성화', async () => {
    const user = userEvent.setup();
    const { checkbox, button } = renderComponent();
    screen.debug();

    await user.click(checkbox);
    expect(button).toHaveAttribute('aria-disabled', 'false');
    screen.debug();

    await user.click(checkbox);
    expect(button).toHaveAttribute('aria-disabled', 'true');
    screen.debug();
  });
});
