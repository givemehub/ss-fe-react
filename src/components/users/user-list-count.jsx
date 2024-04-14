import { useRef } from 'react';
import classes from './user-list-count.module.css';

export function UserListCount({ count, total }) {
  const clickedCountRef = useRef(0);

  const handleUpdateClickedCount = () => {
    clickedCountRef.current += 1;
    console.log(clickedCountRef.current);
  };

  return (
    <span
      className={classes.component}
      data-testid="user-list-count"
      onClick={handleUpdateClickedCount}
    >
      {count} / {total}
    </span>
  );
}
