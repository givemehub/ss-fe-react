import './app.css';
import usersData from '@/data/users.json';
import { UsersPage } from '@/pages/users/users';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // 리액트 렌더링과 관련된 처리만 가능 (순수: Purity)

  // 이벤트는 언제 실행되는가?
  // DOM 월드에서 사용자에 의해 실행된다.
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

  console.log({ users });

  return (
    <div className="App">
      <button type="button" className="button" onClick={handleEvent}>
        사용자 정보 채우기
      </button>

      <UsersPage data={users} />
    </div>
  );
}

export default App;
