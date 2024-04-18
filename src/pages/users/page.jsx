import { useState } from 'react';
import { UserList } from './components/user-list';
import { UserListCount } from './components/user-list-count';
import { UserSearchBox } from './components/user-search-box';

const initialUsers = [
  {
    id: 1,
    name: '야무',
  },
  {
    id: 2,
    name: '수잔',
  },
  {
    id: 3,
    name: '하울',
  },
  {
    id: 4,
    name: '수연',
  },
];

export function UsersPage() {
  const [users, setUsers] = useState(initialUsers);

  const handleSearchUsers = (searchTerm) => {
    const nextUsers = users.filter((user) => user.name.includes(searchTerm));
    setUsers(nextUsers);
  };

  const handleSearchReset = () => {
    setUsers(initialUsers);
  };

  return (
    <>
      <h2>Users Page</h2>
      <UserSearchBox onSearch={handleSearchUsers} onReset={handleSearchReset} />
      <UserList data={users} />
      <UserListCount
        searchedUsersCount={users.length}
        totalUsersCount={initialUsers.length}
      />
    </>
  );
}
