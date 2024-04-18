import { useEffect, useState } from 'react';
import { ErrorMessage, Spinner } from '@/components';
import { UsersPage } from '@/pages/users/users';
import { delay } from '@/utils';
import './app.css';

// 컴포넌트 마크업이 생성
// 컴포넌트 마크업 -> DOM 마운트
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 업데이트 마크업 재생성
// 컴포넌트 재성성된 마크업 -> DOM 커밋
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 업데이트 마크업 재생성
// 컴포넌트 재성성된 마크업 -> DOM 커밋
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 업데이트 마크업 재생성
// 컴포넌트 재성성된 마크업 -> DOM 커밋
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 업데이트 마크업 재생성
// 컴포넌트 재성성된 마크업 -> DOM 커밋
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 업데이트 마크업 재생성
// 컴포넌트 재성성된 마크업 -> DOM 커밋
// 이펙트 -> 클린업
// 이펙트 실행
// 컴포넌트 언마운트

function App() {
  // 관심사 [네트워크 요청/응답]

  const [isLoading, setIsLoading] = useState(() => {
    // 지연 처리...
    return false;
  });
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
