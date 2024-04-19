import useFetchData from '@/hooks/useFetchData';
import { useState } from 'react';

export const useUsers = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useFetchData('https://jsonplaceholder.typicode.com/users');

  const [search, setSearch] = useState([]);

  const handleChange = (search) => setSearch(search);

  const searchedUsers = users?.filter((user) => user.name.includes(search));

  return {
    isLoading,
    error,
    users,
    searchedUsers,
    handleChange,
    refetch,
  };
};
