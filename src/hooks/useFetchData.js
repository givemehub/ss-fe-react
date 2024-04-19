import { useEffect, useState } from 'react';

// fetch 옵션 설정 기능 추가
// 리-패치(refetch) 기능 추가
// 함수 메모이제이션

export default function useFetchData(endpoint, options) {
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

  const refetchData = async (options) => {
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
  };

  return {
    ...state,
    refetch: refetchData,
  };
}
