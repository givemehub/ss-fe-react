import { UsersPage } from '@/pages/users/users';
import './app.css';

function App() {
  const users = [
    {
      id: 1,
      name: '야무',
    },
    {
      id: 2,
      name: '레베카',
    },
    {
      id: 3,
      name: '레이첼',
    },
  ];

  return (
    <div className="App">
      <UsersPage data={users} />
    </div>
  );
}

export default App;
