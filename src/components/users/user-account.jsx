export function UserAccount({ user }) {
  return (
    <div data-testid="user-account">
      <h2>프로필</h2>
      {user.isAdmin && <button type="button">수정</button>}
      <div>
        <strong>이름:</strong> {user.name}
      </div>
    </div>
  );
}
