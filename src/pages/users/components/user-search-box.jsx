import { useId, useState } from 'react';
// import S from './user-search-box.module.css';

export function UserSearchBox({ onChange }) {
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
    <div
      className="border border-solid border-sky-500 rounded-full text-sm"
      // className={S.component}
    >
      <label htmlFor={id} className="sr-only">
        사용자 검색
      </label>
      <input
        className="w-full px-3 py-2 rounded-full"
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
