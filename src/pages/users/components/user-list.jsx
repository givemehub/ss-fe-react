export function UserList({ data }) {
  if (!data)
    return (
      <div
        role="alert"
        style={{
          padding: '16px 0',
        }}
      >
        표시할 사용자 정보가 없습니다.
      </div>
    );

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
        {data.map((user) => (
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
