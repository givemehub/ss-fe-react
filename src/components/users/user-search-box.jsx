import { useId, useLayoutEffect, useRef, useState } from 'react';
import classes from './user-search-box.module.css';

export function UserSearchBox({ onChange }) {
  const id = useId();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value.length === 0) {
      onChange?.('reset');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.length > 0) {
      if (search.trim().length === 0) {
        alert('유효한 이름이 입력되지 않았습니다. 😳');
        searchInputRef.current.select();
        return;
      }

      onChange?.(search);
    }
  };

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSearch(value.trim());
  //   if (value.trim().length === 0) {
  //     onChange?.('reset');
  //   }
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter' && search.trim().length > 0) {
  //     onChange?.(search);
  //   }
  // };

  // useLayoutEffect vs. useEffect
  //
  // render trigger (set state function)
  // component re-render (react)
  // 1. render
  // 1.1 useLayoutEffect Cleanup
  // 1.2 useEffect Cleanup
  // 2. dom commit
  // 2.1 useLayoutEffect
  // 3. browser painting
  // 3.1 useEffect
  // useEffect(() => {
  //   console.log('effect: ', searchInputRef.current);
  //   return () => {
  //     console.log('effect cleanup');
  //   };
  // }, []);

  const searchInputRef = useRef(null);

  useLayoutEffect(() => {
    const { current: searchInput } = searchInputRef;
    searchInput.focus();

    return () => {
      searchInput.blur();
    };
  }, []);

  return (
    <div className={classes.component}>
      <label htmlFor={id} className="sr-only">
        사용자 검색
      </label>
      <input
        ref={searchInputRef}
        type="search"
        placeholder="사용자 이름 입력"
        id={id}
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
