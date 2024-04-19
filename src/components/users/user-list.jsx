import { useEffect, useRef } from 'react';
import classes from './user-list.module.css';

export function UserList({ users = [] }) {
  if (users?.length === 0) {
    return <p className={classes.empty}>표시할 사용자가 없습니다.</p>;
  }

  return (
    <ul className={classes.component}>
      {users?.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

function UserListItem({ user }) {
  const linkRef = useRef(null);

  useEffect(() => {
    const linkElement = linkRef.current;

    if (linkElement) {
      linkElement.style.transition = 'background-color 0.4s ease-in-out';
      linkElement.style.backgroundColor = 'rgba(254, 245, 145, 0.1)';

      setTimeout(() => {
        ['background-color', 'transition'].forEach((property) =>
          linkElement.style.removeProperty(property)
        );
      }, 900);
    }
  });

  return (
    <li>
      <a ref={linkRef} href={`/users/${user.id}`}>
        {user.name}
      </a>
    </li>
  );
}
