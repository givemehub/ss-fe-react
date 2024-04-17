import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

export default function useUsers() {
  const { isLoading, error, data: users, refetch } = useFetch(ENDPOINT);

  const [searchedUsers, setSearchedUsers] = useState(users);

  useEffect(() => {
    setSearchedUsers(users);
  }, [users]);

  const handleChange = (search, callback) => {
    setSearchedUsers(
      search !== 'reset'
        ? users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
        : users
    );

    callback?.();
  };

  return {
    isLoading,
    error,
    users,
    searchedUsers,
    onChange: handleChange,
    refetch,
  };
}
