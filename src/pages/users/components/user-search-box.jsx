import { useId, useState } from 'react';

export function UserSearchBox() {
  const searchId = useId();

  const [searchTerm, setSearchTerm] = useState('');
  const handleUpdate = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor={searchId} className="sr-only">
        사용자 이름 검색
      </label>
      <input
        id={searchId}
        type="search"
        value={searchTerm}
        onChange={handleUpdate}
        placeholder="사용자 이름"
      />
      <button type="submit">검색</button>
    </form>
  );
}
