import { useCallback, useEffect, useState } from 'react';

export default function useFetchData(endpoint, options) {
  console.log('call useFetchData');

  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
          ...options,
        });

        const responseData = await response.json();
        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            data: responseData,
          };
        });
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setState((prevState) => {
            return {
              ...prevState,
              isLoading: false,
              error,
            };
          });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  // 리패칭 시, 함수가 다시 생성되는 것을 방지하려면?

  const refetchData = useCallback(
    async (options) => {
      try {
        const response = await fetch(endpoint, options);
        const responseData = await response.json();

        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            data: responseData,
          };
        });
      } catch (error) {
        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            error,
          };
        });
      }
    },
    [endpoint]
  );

  return {
    ...state,
    refetch: refetchData,
  };
}
