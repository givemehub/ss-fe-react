import { useState } from 'react';
import { UserList } from './components/user-list';
import { UserListCount } from './components/user-list-count';
import { UserSearchBox } from './components/user-search-box';

export function UsersPage() {
  // 상태(state)
  // 선언된 상태 값이 변경되면
  // 리액트에 렌더 트리거(요청)
  // 리액트 컴포넌트 렌더(실행)
  // 이전 가상 DOM vs. 다음 가상 DOM 비교
  // 변경사항만 실제 DOM 커밋(반영)
  const [users] = useState([
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
  ]);

  const [search, setSearch] = useState('');

  // 파생된 상태(derived state)
  const searchedUsers = users.filter((user) => user.name.includes(search));

  // 이벤트 핸들러
  const handleSearchUsers = (searchTerm) => setSearch(searchTerm);
  const handleSearchReset = () => setSearch('');

  return (
    <>
      <h2>Users Page</h2>
      <UserSearchBox onSearch={handleSearchUsers} onReset={handleSearchReset} />
      <UserList data={searchedUsers} />
      <UserListCount
        searchedUsersCount={searchedUsers.length}
        totalUsersCount={users.length}
      />
    </>
  );
}
