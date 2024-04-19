import { UserList, UserListCount } from '@/components';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classes from './users.module.css';
import { delay } from '@/utils';
import UserSearchBox from '@/components/users/user-search-box';

export function UsersPage() {
  const changeCountRef = useRef(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await fetch(ENDPOINT, { signal: controller.signal });
        const data = await response.json();

        await delay(1200);

        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

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
    console.log('change count', changeCountRef.current);
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

  const searchBoxRef = useRef(null);

  useLayoutEffect(() => {
    const searchInput = searchBoxRef.current;

    if (users.length > 0 && searchInput) {
      searchInput.style.borderColor = '#e95628';
    }

    setTimeout(() => {
      searchInput?.style.removeProperty('border-color');
    }, 1000);
  }, [users]);

  useEffect(() => {
    const { current: searchInput } = searchBoxRef;
    if (searchInput) searchInput.focus();
  }, []);

  return (
    <div className={classes.component}>
      <UserSearchBox searchInputRef={searchBoxRef} onChange={handleChange} />
      {userList}
      <UserListCount count={searchedUsers.length} total={users.length} />
    </div>
  );
}
