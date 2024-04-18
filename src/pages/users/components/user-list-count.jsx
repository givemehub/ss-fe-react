export function UserListCount({ searchedUsersCount, totalUsersCount }) {
  // return <p> 검색된 갯수 / 총 갯수</p>;
  return (
    <p
      style={{
        position: 'fixed',
        top: 2,
        right: 16,
        backgroundColor: 'white',
        padding: 6,
        border: '1px solid',
      }}
    >
      {searchedUsersCount} / {totalUsersCount}
    </p>
  );
}
