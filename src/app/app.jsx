import { useEffect, useState } from 'react';
import { ErrorMessage, Spinner } from '@/components';
import { UsersPage } from '@/pages/users/users';
import { delay } from '@/utils';
import './app.css';

function App() {
  // BEGIN : 관심사 [네트워크 요청/응답] -----------------

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

  // FINISH : 관심사 [네트워크 요청/응답] -----------------

  // BEGIN : 관심사 [타이머] ---------------------------

  const [countDown, setCountDown] = useState(100);

  useEffect(() => {
    if (countDown <= 0) return;

    const intervalId = setInterval(() => {
      const nextCountDown = countDown - 1;
      setCountDown(nextCountDown);
    }, 1000);

    // 정리(클린업: cleanup)를 안하면?
    return () => {
      clearInterval(intervalId);
    };
  }, [countDown]);

  // FINISH : 관심사 [타이머] ---------------------------

  // BEGIN : 관심사 [메시지] ---------------------------

  // 불변 데이터
  // 상태 스냅샷처럼 작동
  const [message, setMessage] = useState('hello');

  // 이벤트
  const handleUpdateMessage = () => {
    // setMessage((message) => message + '😃');
    // const nextMessage = message + '😃';
    // setMessage(nextMessage);
    // setMessage(message + '😃'); // 리액트 다음번 상태를 이렇게 바꿔줘 요청(트리거)

    setMessage((prevMessage) => prevMessage + '😃');
    console.log('event message:', message); // 'hello 😃' ❌ | 'hello' ✅
  };

  // 이펙트
  // 상태 변경 감지해 무언가 처리
  useEffect(() => {
    console.log('effect message:', message); // 'hello 😃'
  }, [message]);

  // FINISH : 관심사 [메시지] ---------------------------

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <UsersPage data={users} />
          <button type="button" onClick={handleUpdateMessage}>
            {message}
          </button>
          <output
            style={{
              position: 'fixed',
              top: 490,
              left: '50%',
              translate: '-50% 0',
              fontSize: 60,
            }}
          >
            {countDown}
          </output>
        </>
      )}
    </div>
  );
}

export default App;
