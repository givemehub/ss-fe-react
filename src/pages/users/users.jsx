import { UserList, UserListCount, UserSearchBox } from '@/components';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useUsers } from './useUsers';
import classes from './users.module.css';
import { useRef } from 'react';

export function UsersPage() {
  useDocumentTitle('유저 리스트');

  const {
    isLoading,
    error,
    users,
    searchedUsers,
    handleChange: onChange,
    refetch,
  } = useUsers();

  const searchHandleRef = useRef(null);

  const handleChange = (search) => {
    onChange?.(search);
    searchHandleRef.current.highlight();
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
    <>
      <button type="button" onClick={refetch}>
        refetch users
      </button>

      <div className={classes.component}>
        <UserSearchBox ref={searchHandleRef} onChange={handleChange} />
        {userList}
        <UserListCount count={searchedUsers?.length} total={users?.length} />
      </div>
    </>
  );
}
