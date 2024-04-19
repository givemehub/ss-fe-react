import { UserList, UserListCount, UserSearchBox } from '@/components';
import { useEffect, useRef, useState } from 'react';
import classes from './users.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '@/hooks/useFetchData';

export function UsersPage() {
  useDocumentTitle('유저 리스트');

  const changeCountRef = useRef(0);
  const searchBoxHandleRef = useRef(null);

  const {
    isLoading,
    error,
    data: users,
  } = useFetchData('https://jsonplaceholder.typicode.com/users');

  const [searchedUsers, setSearchedUsers] = useState(users);
  useEffect(() => {
    setSearchedUsers(users);
  }, [users]);

  const handleChange = (search) => {
    setSearchedUsers(
      search !== 'reset'
        ? users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
        : users
    );

    changeCountRef.current += 1;

    const searchBoxHandle = searchBoxHandleRef.current;
    searchBoxHandle.highlight(/* {
      color: '#d02578',
      timeout: 1500,
    } */);
  };

  const userList = isLoading ? (
    <div role="alert" className={classes.loading}>
      사용자 정보 로딩 중...
    </div>
  ) : error ? (
    <div role="alert" className={classes.error}>
      {error.message}
    </div>
  ) : (
    <UserList users={searchedUsers} />
  );

  return (
    <div className={classes.component}>
      <UserSearchBox ref={searchBoxHandleRef} onChange={handleChange} />
      {userList}
      <UserListCount count={searchedUsers.length} total={users.length} />
    </div>
  );
}
