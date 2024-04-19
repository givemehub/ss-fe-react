import { useEffect, useRef } from 'react';

// 표현을 목적으로 하는 컴포넌트
// Presentational Component
export function UserListItem({ user }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    item.style.cssText = `
      transition: all 0.3s ease-in-out;
      background-color: #ffdf5f54;
      border-radius: 2px;
    `;

    const timerId = setTimeout(() => {
      item.style.removeProperty('background-color');
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <li ref={itemRef}>
      <a href={`/users/${user.id}`}>{user.name}</a>
    </li>
  );
}
