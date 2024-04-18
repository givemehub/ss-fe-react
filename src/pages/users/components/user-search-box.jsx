import { useId, useState } from 'react';

export function UserSearchBox() {
  const searchId = useId();

  const [searchTerm, setSearchTerm] = useState('');
  const handleUpdate = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm('');
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: 'inline-flex',
        gap: 4,
      }}
    >
      <div>
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
      </div>
      <button type="submit" disabled={!searchTerm}>
        검색
      </button>
    </form>
  );
}
