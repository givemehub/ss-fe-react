import { useId, useState } from 'react';
import classes from './user-search-box.module.css';

export default function UserSearchBox({ searchInputRef, onChange }) {
  const id = useId();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value.trim());
    if (value.trim().length === 0) {
      onChange?.('reset');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim().length > 0) {
      onChange?.(search);
    }
  };

  return (
    <div className={classes.component}>
      <label htmlFor={id} className="sr-only">
        사용자 검색
      </label>
      <input
        // ref={ref}
        ref={searchInputRef} // { current: <input /> }
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
