import { useEffect, useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle('홈');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAlbums = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/albums',
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        if (!/abort/i.test(error.name)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="Home">
      <h2>홈</h2>
    </div>
  );
}
