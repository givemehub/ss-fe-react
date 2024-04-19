import { useEffect, useState } from 'react';

export default function useFetchData(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return {
    isLoading,
    error,
    data,
  };
}
