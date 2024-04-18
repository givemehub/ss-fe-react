import './app.css';
import usersData from '@/data/users.json';
import { UsersPage } from '@/pages/users/users';
import { delay } from '@/utils';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('hello');
  const [users, setUsers] = useState([]);

  // Async function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        await delay();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleEvent = () => {
    // 리액트의 렌더링과 관련없는 처리 가능 (부수 효과: Side Effects)

    // 외부 시스템과 동기화

    // 1. 네트워크 요청
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // 2. 문서 제목 변경
    document.title = '이벤트 vs. 이펙트';

    // 리액트 상태 업데이트 트리거
    setUsers(usersData);
  };

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => setText((prevText) => prevText + '✅')}
      >
        {text}
      </button>

      <button hidden type="button" className="button" onClick={handleEvent}>
        사용자 정보 채우기
      </button>

      <UsersPage data={users} />
    </div>
  );
}

export default App;
