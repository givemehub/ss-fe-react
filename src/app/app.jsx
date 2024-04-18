import { useEffect, useState } from 'react';
import { ErrorMessage, Spinner } from '@/components';
import { UsersPage } from '@/pages/users/users';
import { delay } from '@/utils';
import './app.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: abortController.signal }
        );

        const data = await response.json();

        await delay(500);
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        const isAbort = error.name.toLowerCase().includes('abort');
        if (!isAbort) {
          setError(error);
        }
      }
    };

    fetchData();

    return () => {
      // 정리
      // 이전 요청 중지
      abortController.abort();
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <UsersPage data={users} />
      )}
    </div>
  );
}

export default App;
