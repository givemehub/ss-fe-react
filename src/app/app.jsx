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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        await delay(500);
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
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
