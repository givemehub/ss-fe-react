import classes from './user-list.module.css';

export function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className={classes.empty}>표시할 사용자가 없습니다.</p>;
  }

  return (
    <ul className={classes.component}>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}
