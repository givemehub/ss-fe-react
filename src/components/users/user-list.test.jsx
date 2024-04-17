import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserList } from './user-list';

describe('UserList 컴포넌트', () => {
  it.skip('숫자 데이터 리스트 렌더링', () => {
    const numbers = [11, 22, 33, 100];
    render(<UserList users={numbers} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(numbers.length);
    screen.debug();
  });

  const users = [
    {
      id: crypto.randomUUID(),
      name: '야무',
    },
    {
      id: crypto.randomUUID(),
      name: '레베카',
    },
    {
      id: crypto.randomUUID(),
      name: '하울',
    },
    {
      id: crypto.randomUUID(),
      name: '수잔',
    },
  ];

  const renderComponent = () => {
    render(<UserList users={users} />);
    return {
      listItems: screen.getAllByRole('listitem'),
    };
  };

  it('users 데이터 리스트 렌더링', () => {
    const { listItems } = renderComponent();
    expect(listItems).toHaveLength(users.length);
  });

  it('users 데이터의 각 아이템이 모두 정상적으로 렌더링', () => {
    const { listItems } = renderComponent();
    users.forEach((user, index) => {
      expect(listItems[index]).toHaveTextContent(user.name);
    });
  });

  it('users 데이터 갯수가 0인 경우 렌더링', () => {
    render(<UserList users={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    listItems.forEach((item) => expect(item).not.toBeInTheDocument());

    const infoParagraph = screen.getByText(/없습니다/i);
    expect(infoParagraph).toBeInTheDocument();
  });
});
