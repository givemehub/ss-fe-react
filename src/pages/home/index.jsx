import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useAlbums } from './useAlbums';

export function HomePage() {
  useDocumentTitle('홈');
  const { isLoading, error, refetch, albums } = useAlbums();

  if (isLoading) {
    return <div role="alert">로딩 중....</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <div className="Home">
      <h2>홈</h2>
      <button type="button" onClick={refetch}>
        refetch albums
      </button>
      <ul>
        {albums?.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
