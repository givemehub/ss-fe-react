import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TermsAndConditions } from '@/components';

describe('TermsAndConditions 컴포넌트', () => {
  it('최초 렌더링', () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/이용 약관/);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/확인/);
  });

  it('이용 약관 체크 후, 확인 버튼 누름', async () => {
    render(<TermsAndConditions />);
    const user = userEvent.setup();

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    const button = screen.getByRole('button');
    await user.click(button);
  });
});
