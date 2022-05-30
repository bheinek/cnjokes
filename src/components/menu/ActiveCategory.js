import { MenuBar } from '../../styles';

export function ActiveCategory({ category }) {
  return (
    <MenuBar
      to={category === 'home' ? '' : `/category/${category}`}
      className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
    >
      {category.toUpperCase()}
    </MenuBar>
  );
}
