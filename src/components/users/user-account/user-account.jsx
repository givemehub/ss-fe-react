export function UserAccount(
  { user } /* { user: { name: string, isLogin: boolean } } */
) {
  // let button = null;

  // if (user.isLogin) {
  //   button = <button type="button">수정</button>;
  // }

  return (
    <div data-testid="user-account" className="UserAccount">
      <h2 className="name">{user.name}</h2>
      {/* {button} */}
      {/* {user.isLogin ? <button type="button">수정</button> : null} */}
      {user.isLogin && <button type="button">수정</button>}
    </div>
  );
}
