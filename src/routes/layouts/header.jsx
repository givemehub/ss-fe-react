import { getPublic } from '@/utils';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white p-5 flex gap-16 items-center">
      <NavLink to="/" className="bg-transparent hover:rounded-full">
        <h1>
          <img src={getPublic('react.svg')} alt="홈" className="h-5" />
        </h1>
      </NavLink>
      <nav>
        <h2 className="sr-only">글로벌 내비게이션</h2>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/users">users</NavLink>
          </li>
          <li>
            <NavLink to="/notes">notes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ children, className = '', ...restProps }) {
  return (
    <ReactRouterNavLink
      className={({ isActive }) => {
        const activeClass = isActive ? 'bg-sky-300/20 rounded-sm' : '';
        return `p-2 ${activeClass} ${className}`;
      }}
      {...restProps}
    >
      {children}
    </ReactRouterNavLink>
  );
}
