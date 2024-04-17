import { useCallback, useEffect, useState } from 'react';

export default function useFetch(endpoint, options) {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  const refetch = useCallback(
    async (options = {}) => {
      setState((state) => ({
        ...state,
        isLoading: true,
        error: null,
      }));

      try {
        const response = await fetch(endpoint, options);
        const data = await response.json();

        setState((state) => ({
          ...state,
          isLoading: false,
          data,
        }));
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setState((state) => ({
            ...state,
            isLoading: false,
            error,
          }));
        }
      }
    },
    [endpoint]
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
          ...options,
        });

        const data = await response.json();

        setState((state) => ({
          ...state,
          isLoading: false,
          data,
        }));
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setState((state) => ({
            ...state,
            isLoading: false,
            error,
          }));
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  return {
    ...state,
    refetch,
  };
}
