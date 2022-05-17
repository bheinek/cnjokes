import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>
        <a className="title" href=".">
          CN Jokes
        </a>
      </h1>
      <p className="description">
        Website dedicated to facts about the greatest person in human history -
        Mr. Chuck Norris{' '}
      </p>
    </header>
  );
}
