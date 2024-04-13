import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserAccount } from '@/components';

describe('UserAccount 컴포넌트', () => {
  let user = {
    id: 1,
    name: '야무',
    isAdmin: false,
  };

  it('렌더링 시, 사용자 이름 표시', () => {
    render(<UserAccount user={user} />);
    // screen.debug();

    const container = screen.getByTestId('user-account');
    expect(container).toBeInTheDocument();
    const userName = screen.getByText('야무');
    expect(userName).toBeInTheDocument();
  });

  it('인증 사용자인 경우, 수정 버튼 렌더링', () => {
    render(<UserAccount user={{ ...user, isAdmin: true }} />);
    // screen.debug();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/수정/);
  });

  it('인증 사용자가 아닌 경우, 수정 버튼 렌더링 되지 않음', () => {
    render(<UserAccount user={user} />);
    // screen.debug();

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
