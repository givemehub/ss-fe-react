export function UserListCount({ count, total }) {
  return (
    <span data-testid="user-list-count">
      {count} / {total}
    </span>
  );
}
