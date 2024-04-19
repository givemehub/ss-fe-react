import { useState } from 'react';
import { UsersPage } from '@/pages/users/users';
import { HomePage } from '@/pages/home';
import './app.css';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  // JavaScript (ES5, 2009)
  // const handleNavigation = function (path) {
  //   return function () {
  //     setCurrentPage(path);
  //   };
  // };

  // ECMAScript 2015 (ES6) +
  const handleNavigation = (path) => () => setCurrentPage(path);

  // const handleNavigation = (path) => {
  //   console.log(path);
  //   setCurrentPage(path);
  // };

  const activeStyles = {
    fontWeight: 900,
    textDecoration: 'underline',
  };

  return (
    <div className="App">
      <h2>홈</h2>
      <nav>
        <button
          type="button"
          style={currentPage === '/' ? activeStyles : null}
          // onClick={() => handleNavigation('/')}
          onClick={handleNavigation('/')}
        >
          home
        </button>
        <button
          type="button"
          style={currentPage !== '/' ? activeStyles : null}
          // onClick={() => handleNavigation('/users')}
          onClick={handleNavigation('/users')}
        >
          users
        </button>
      </nav>

      <hr />

      {currentPage === '/' ? <HomePage /> : <UsersPage />}
    </div>
  );
}

export default App;
