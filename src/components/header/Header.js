import { Link } from 'react-router-dom';

import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>
        <Link className="title" to="/">
          CN Jokes
        </Link>
      </h1>
      <p className="description">
        Website dedicated to facts about the greatest person in human history -
        Mr. Chuck Norris{' '}
      </p>
    </header>
  );
}
