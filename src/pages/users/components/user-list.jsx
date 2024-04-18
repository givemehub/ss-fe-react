const users = [
  {
    id: 1,
    name: '야무',
  },
  {
    id: 2,
    name: '수잔',
  },
];

export function UserList() {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
