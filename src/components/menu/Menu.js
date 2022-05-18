import { useFetch } from '../hooks/useFetch';

import './Menu.css';

export function Menu() {
  const categories = useFetch('categories');
  if (categories.loading) return <div>A moment please...</div>;
  else if (categories.error)
    return (
      <div>There is a problem fetching the post data - ${categories.error}</div>
    );
  else {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <input type="checkbox" id="checkbox-toggle" />
          <label htmlFor="checkbox-toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            {categories.data.map((category, i) => (
              <li key={i}>{category.toUpperCase()}</li>
            ))}
          </div>
        </ul>
      </nav>
    );
  }
}
