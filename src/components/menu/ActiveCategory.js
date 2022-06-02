import { useTheme } from '@emotion/react';

import { MenuBar } from '../../styles';

export function ActiveCategory({ category }) {
  const theme = useTheme();
  return (
    <MenuBar
      to={category === 'home' ? '' : `/category/${category}`}
      style={({ isActive }) =>
        isActive ? { backgroundColor: theme.colors.tertiary } : undefined
      }
    >
      {category.toUpperCase()}
    </MenuBar>
  );
}
