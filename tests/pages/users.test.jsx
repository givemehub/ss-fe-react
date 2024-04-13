import { UsersPage } from '@/pages/users';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Users 페이지', () => {
  const users = [
    { id: 1, name: '야무' },
    { id: 2, name: '수잔' },
    { id: 3, name: '세느' },
    { id: 4, name: '고흐' },
    { id: 5, name: '미카엘' },
  ];

  const renderComponent = () => {
    render(<UsersPage data={users} />);

    return {
      input: screen.getByPlaceholderText(/사용자 이름/),
      count: screen.getByTestId('user-list-count'),
      user: userEvent.setup(),
    };
  };

  it('페이지 렌더링', () => {
    const { input, count } = renderComponent();

    expect(input).toBeInTheDocument();
    expect(count).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item) => expect(item).toBeInTheDocument());
    expect(listItems).toHaveLength(users.length);
  });

  it('사용자 이름 검색 시, 검색된 리스트 렌더링', async () => {
    const { user, input, count } = renderComponent();

    let search = '야무';
    let listItems = [];

    await user.type(input, search + '{enter}');
    listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    expect(count).toHaveTextContent(/1/);

    search = '헤이즐';
    await user.type(input, search + '{enter}');
    listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
    expect(count).toHaveTextContent(/0/);
  });
});
