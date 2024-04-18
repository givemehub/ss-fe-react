import './app.css';
import usersData from '@/data/users.json';
import { UsersPage } from '@/pages/users/users';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('hello');
  const [users, setUsers] = useState([]);

  // 리액트 렌더링과 관련된 처리만 가능 (순수: Purity)

  // 이펙트(Effects: 부수 효과)
  // useEffect(setup, dependencies?)
  useEffect(() => {
    // 종속성 배열이 설정되지 않은 경우: 초기 렌더링, 리-렌더링 모든 과정에서 반복 실행
    // [class] componentDidMount
    // [class] componentDidUpdate
    console.log('종속성 배열이 설정되지 않은 경우');
  });

  useEffect(() => {
    // 종속성 배열이 빈 상태인 경우: 초기 렌더링 과정에서 1회만 실행
    // [class] componentDidMount
    console.log('종속성 배열이 빈 상태인 경우');
  }, []);

  //
  // 훅 함수 규칙
  // 1. 함수 컴포넌트 안에서만 사용 가능
  // 2. 조건, 반복 문 안에서는 사용할 수 없음

  // ❌ 아래 처럼 사용하면 안됨!!!
  // ESLint 플러그인 eslint-plugin-react-hooks 설치 & 규칙 확장(검사)
  // if (text === 'hello') {
  //   useEffect(() => {
  //     // 종속성 배열이 빈 상태인 경우: 초기 렌더링 과정에서 1회만 실행
  //     console.log('종속성 배열이 빈 상태인 경우');
  //   });
  // }

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
