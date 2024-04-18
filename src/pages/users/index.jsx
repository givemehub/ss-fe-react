import { useState } from 'react';
import classes from './users.module.css';
import { UserSearchBox } from './components/user-search-box';
import { UserListCount } from './components/user-list-count';
import { UserList } from './components/user-list';

export function UsersPage({ data = [] }) {
  const [users] = useState(data);
  const [searchedUsers, setSearchedUsers] = useState(users);

  const handleChange = (search) => {
    setSearchedUsers(
      search !== 'reset'
        ? users.filter((user) => user.name.includes(search))
        : users
    );
  };

  return (
    <div className={classes.component}>
      <UserSearchBox onChange={handleChange} />
      <UserList users={searchedUsers} />
      <UserListCount count={searchedUsers.length} total={users.length} />
    </div>
  );
}
