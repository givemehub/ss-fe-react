import { UserList, UserListCount, UserSearchBox } from '@/components';
import { useState } from 'react';

export function UsersPage({ data }) {
  const [users] = useState(data ?? []);
  const [searchedUsers, setSearchedUsers] = useState(users);

  const handleChange = (search) => {
    setSearchedUsers(
      search !== 'reset'
        ? users.filter((user) => user.name.includes(search))
        : users
    );
  };

  return (
    <>
      <UserSearchBox onChange={handleChange} />
      <UserList users={searchedUsers} />
      <UserListCount count={searchedUsers.length} total={users.length} />
    </>
  );
}
