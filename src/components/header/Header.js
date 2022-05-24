import { NavLink } from 'react-router-dom';

import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>
        <NavLink className="title" to="/">
          CN Jokes
        </NavLink>
      </h1>
      <p className="description">
        Website dedicated to facts about the greatest person in human history -
        Mr. Chuck Norris{' '}
      </p>
    </header>
  );
}
