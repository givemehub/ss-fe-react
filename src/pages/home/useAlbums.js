import useFetchData from '@/hooks/useFetchData';

export const useAlbums = () => {
  const {
    isLoading,
    error,
    data: albums,
    refetch,
  } = useFetchData('https://jsonplaceholder.typicode.com/albums');

  return {
    isLoading,
    error,
    albums,
    refetch,
  };
};
