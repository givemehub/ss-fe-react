import S from './user-list.module.css';

export function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p>표시할 사용자가 없습니다.</p>;
  }

  return (
    <ul className={S.component}>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}
