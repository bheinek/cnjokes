import './Menu.css';

export function MenuLayout({ children }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox-toggle" />
        <label htmlFor="checkbox-toggle" className="hamburger">
          &#9776; CATEGORIES
        </label>
        <div className="menu">{children}</div>
      </ul>
    </nav>
  );
}
