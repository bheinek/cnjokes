import './Menu.css';

export function MenuLayout({ func }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox-toggle" />
        <label htmlFor="checkbox-toggle" className="hamburger">
          &#9776; CATEGORIES
        </label>
        <div className="menu">{func}</div>
      </ul>
    </nav>
  );
}
