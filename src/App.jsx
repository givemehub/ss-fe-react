import { UsersPage } from '@/pages/users';
import { useState } from 'react';

function App() {
  const [data] = useState([
    {
      id: 1,
      name: '야무',
    },
    {
      id: 2,
      name: '라임',
    },
  ]);

  return (
    <main className="app" data-testid="app">
      <UsersPage data={data} />
    </main>
  );
}

export default App;
