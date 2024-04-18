import { useState } from 'react';

export function UserList() {
  const [users] = useState([
    {
      id: 1,
      name: '야무',
    },
    {
      id: 2,
      name: '수잔',
    },
  ]);

  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          paddingInlineStart: 0,
          display: 'flex',
          flexFlow: 'column',
          gap: 8,
        }}
      >
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: 8,
              border: '1px solid currentColor',
              borderRadius: 6,
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
