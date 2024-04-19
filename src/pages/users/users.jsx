import { UserList, UserListCount, UserSearchBox } from '@/components';
import { useEffect, useRef, useState } from 'react';
import classes from './users.module.css';

export function UsersPage() {
  const changeCountRef = useRef(0);
  const searchBoxHandleRef = useRef({});

  // useEffect(() => {
  //   searchBoxRef.current.remove();
  // }, []);

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

    const { highlight, blur } = searchBoxHandleRef.current;
    highlight();
    blur();
    // select();

    // const searchBoxInput = searchBoxRef.current;
    // searchBoxInput.style.borderColor = '#1ed799';
    // setTimeout(() => {
    //   searchBoxInput.style.removeProperty('border-color');
    // }, 900);
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
