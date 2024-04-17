import { useRef } from 'react';
import classes from './users.module.css';
import useUsers from '@/hooks/useUsers';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { UserList, UserListCount, UserSearchBox } from '@/components';

export function UsersPage() {
  const changeCountRef = useRef(0);
  const searchBoxHandleRef = useRef(null);

  useDocumentTitle('사용자 목록 & 검색');

  const { isLoading, error, users, searchedUsers, refetch, onChange } =
    useUsers();

  const handleChange = (search) => {
    onChange(search, () => {
      changeCountRef.current += 1;

      const searchBoxHandle = searchBoxHandleRef.current;
      searchBoxHandle.highlight(/* {
        color: '#d02578',
        timeout: 1500,
      } */);
    });
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
    searchedUsers && <UserList users={searchedUsers} />
  );

  return (
    <div className={classes.component}>
      <button className="button" type="button" onClick={() => refetch()}>
        refetch
      </button>
      <UserSearchBox ref={searchBoxHandleRef} onChange={handleChange} />
      {userList}
      <UserListCount count={searchedUsers?.length} total={users?.length} />
    </div>
  );
}
