import { MenuBar } from '../../styles';

export function ActiveCategory({ category }) {
  return (
    <MenuBar to={category === 'home' ? '' : `/category/${category}`}>
      {category.toUpperCase()}
    </MenuBar>
  );
}
