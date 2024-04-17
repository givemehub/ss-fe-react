import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserAccount } from './user-account';

describe('UserAccount 컴포넌트', () => {
  const user = {
    name: '야무',
    isLogin: false,
  };

  it('로그인 되지 않은 사용자 렌더링', () => {
    render(<UserAccount user={user} />);
    // screen.debug();

    const container = screen.getByTestId('user-account');
    // getBy (실제 존재하지 않을 경우 오류 발생)
    // queryBy (실제 존재하지 않을 경우 오류 발생 ❌)
    const button = screen.queryByRole('button');
    const userName = screen.getByText(user.name);
    expect(container).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();

    screen.debug();
  });

  it('로그인 된 사용자 렌더링', () => {
    render(<UserAccount user={{ ...user, isLogin: true }} />);
    // screen.debug();

    const container = screen.getByTestId('user-account');
    // getBy (실제 존재하지 않을 경우 오류 발생)
    // queryBy (실제 존재하지 않을 경우 오류 발생 ❌)
    const button = screen.queryByRole('button');
    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
