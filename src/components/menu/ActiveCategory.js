import { NavLink } from 'react-router-dom';

export function ActiveCategory({ category }) {
  return (
    <NavLink
      to={category === 'home' ? '' : `/category/${category}`}
      className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
    >
      {category.toUpperCase()}
    </NavLink>
  );
}
