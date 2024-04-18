import S from './user-list-count.module.css';

export function UserListCount({ count, total }) {
  return (
    <span data-testid="user-list-count" className={S.component}>
      {count} / {total}
    </span>
  );
}
