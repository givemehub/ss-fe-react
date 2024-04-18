import { UserList, UserListCount, UserSearchBox } from '@/components';
import { Component, useEffect, useRef, useState } from 'react';
import classes from './users.module.css';

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

  // 상태(변경되면 리-렌더 ✅ 및 값 기억)
  const [count, setCount] = useState(9);
  const handleCountUp = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  // 참조(변경되도 리-렌더 ❌ 및 값 기억)
  const countRef = useRef(9);
  const handleCountRefUp = () => {
    countRef.current += 3;
    console.log('countRef.current = ', countRef.current);
  };

  let countVariable = 9;
  const handleCountVariableUp = () => {
    countVariable += 3;
    console.log('countVariable = ', countVariable);
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
      <button type="button" onClick={handleCountUp}>
        count = {count} (+3)
      </button>
      <button type="button" onClick={handleCountRefUp}>
        countRef.current = {countRef.current} (+3)
      </button>
      <button type="button" onClick={handleCountVariableUp}>
        countVariable = {countVariable} (+3)
      </button>

      <UserSearchBox onChange={handleChange} />
      {userList}
      <UserListCount count={searchedUsers.length} total={users.length} />
    </div>
  );
}

export class UsersPAGE extends Component {
  state = {
    count: 9,
  };

  count = 9; // useRef()

  render() {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.setState(
              (state) => ({ count: state.count + 1 }),
              // effect
              () => {
                console.log(this.state.count); // 10
              }
            );
          }}
        >
          change state
        </button>
        <button
          type="button"
          onClick={() => {
            this.count += 1;
          }}
        >
          change instance member
        </button>
      </>
    );
  }
}
