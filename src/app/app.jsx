import './app.css';
import usersData from '@/data/users.json';
import { UsersPage } from '@/pages/users/users';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const handleEvent = () => {
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
