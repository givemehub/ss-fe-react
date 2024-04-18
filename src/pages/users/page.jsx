import { UserList } from './components/user-list';
import { UserListCount } from './components/user-list-count';
import { UserSearchBox } from './components/user-search-box';

export function UsersPage() {
  return (
    <>
      <h2>Users Page</h2>
      <UserSearchBox />
      <UserList />
      <UserListCount />
    </>
  );
}
