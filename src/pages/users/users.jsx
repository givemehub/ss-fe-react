import { UserList, UserListCount, UserSearchBox } from '@/components';
import { useState } from 'react';
import classes from './users.module.css';

export function UsersPage({ data: users = [] }) {
  const [search, setSearch] = useState('');
  const searchedUsers = users.filter((user) => user.name.includes(search));
  const handleChange = (search) => setSearch(search);

  return (
    <div className={classes.component}>
      <UserSearchBox onChange={handleChange} />
      <UserList users={searchedUsers} />
      <UserListCount count={searchedUsers.length} total={users.length} />
    </div>
  );
}
