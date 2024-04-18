import './app.css';
import usersData from '@/data/users.json';
import { UsersPage } from '@/pages/users/users';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('hello');
  const [users, setUsers] = useState([]);

  // Promise
  useEffect(() => {
    // 이펙트의 필요성: 리액트의 외부 시스템과 동기화
    // 부수 효과 코드
    // 네트워크 요청/응답
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // 무한 요청 ()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  // Async function

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
