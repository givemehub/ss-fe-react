import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserList } from '@/components/user-list';

describe('UserList 컴포넌트', () => {
  it('빈 배열이 전달된 경우, 사용자 없음을 화면에 표시', () => {
    render(<UserList users={[]} />);

    const element = screen.getByRole('paragraph');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/사용자|없습니다/);
  });

  it('users 배열 데이터 리스트 렌더링', () => {
    const users = [
      {
        id: 1,
        name: '야무',
      },
      {
        id: 2,
        name: '수잔',
      },
    ];

    render(<UserList users={users} />);
    // screen.debug();

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    });
  });
});
