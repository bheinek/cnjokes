import { NavLink } from 'react-router-dom';

import { useFetch } from '../../hooks';
import { MenuLayout } from '../';

import './Menu.css';

export function Menu({ onChoose }) {
  const categories = useFetch('categories', 1);

  if (categories.loading) {
    return (
      <MenuLayout>
        <li> a moment please..</li>
      </MenuLayout>
    );
  }
  if (categories.error) {
    return (
      <MenuLayout>
        <li> There is a problem fetching data ${categories.error}</li>
      </MenuLayout>
    );
  }

  return (
    <MenuLayout>
      <NavLink
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
        to="/"
      >
        HOME
      </NavLink>
      {categories.data[0].map((category, i) => (
        <li key={i}>
          <NavLink
            to={`/category/${category}`}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' activated' : '')
            }
          >
            {category.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </MenuLayout>
  );
}
