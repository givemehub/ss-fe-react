import classes from './user-list-count.module.css';

export function UserListCount({ count, total }) {
  return (
    <span className={classes.component} data-testid="user-list-count">
      {count} / {total}
    </span>
  );
}
