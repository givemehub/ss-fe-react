// ul = 비순차 목록
// ol = 순차 목록
// dl = 설명 목록
// React.createElement(type, props, ...children)
// const reactElement = {
//   $$typeof: 'Symbol(react.element)',
//   key: null,
//   props: {},
//   type: 'li'
// }

export function UserList({ users }) {
  if (users.length === 0) {
    return <p>사용자 정보가 없습니다. 😳</p>;
  }

  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
