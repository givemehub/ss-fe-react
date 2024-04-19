import { useEffect, useRef, useState } from 'react';
import { UserList, UserListCount, UserSearchBox } from '@/components';
import { StateVsRefVsVariable } from '@/learn';
import classes from './users.module.css';
import VanillaTilt from 'vanilla-tilt';

// useRef 용도
// - 리액트의 렌더링 프로세스에 영향을 미치지 않으면서 어떤 값을 기억하고자 할 때
// - 이전, 이후 값 비교

export function UsersPage() {
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

  // 이벤트
  const handleChange = (search) => {
    setSearchedUsers(
      search !== 'reset'
        ? users.filter((user) => user.name.includes(search))
        : users
    );
  };

  // 이펙트
  useEffect(() => {
    if (users) {
      setSearchedUsers(users);
    }
  }, [users]);

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

  // Vanilla Tilt (ref, useRef, useEffect)
  const containerRef = useRef(null);

  useEffect(() => {
    const { current: container } = containerRef;

    // init
    VanillaTilt.init(container, {
      glare: true,
      'max-glare': 0.54,
    });

    return () => {
      // destroy
      container.vanillaTilt.destory?.();
    };
  }, []);

  return (
    <>
      <StateVsRefVsVariable />

      <div
        ref={containerRef}
        className={classes.component}
        style={{ marginBlockStart: 100 }}
      >
        <UserSearchBox onChange={handleChange} />
        {userList}
        <UserListCount count={searchedUsers.length} total={users.length} />
      </div>
    </>
  );
}
