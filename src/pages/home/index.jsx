import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '@/hooks/useFetchData';

export function HomePage() {
  useDocumentTitle('홈');

  const { isLoading, error, data } = useFetchData(
    'https://jsonplaceholder.typicode.com/albums'
  );

  if (isLoading) {
    return <div role="alert">로딩 중....</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <div className="Home">
      <h2>홈</h2>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
