import { useEffect, useRef } from 'react';
import classes from './user-list.module.css';

// 사용자 이름 입력 후, Enter 키를 누르면
// 아래 표시되는 목록의 아이템이 하이라이팅 표시되도록 한다.
// 특정 시간이 지나면 되돌림
// - ref 속성
// - useRef 훅
// - useEffect 훅

export function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className={classes.empty}>표시할 사용자가 없습니다.</p>;
  }

  return (
    <ul className={classes.component}>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

function UserListItem({ user }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    item.style.backgroundColor = '#ffdf5f42';

    const timerId = setTimeout(() => {
      item.style.removeProperty('background-color');
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <li ref={itemRef}>
      <a href={`/users/${user.id}`}>{user.name}</a>
    </li>
  );
}
