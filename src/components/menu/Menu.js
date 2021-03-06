import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useFetch } from '../../hooks';
import { MenuButton, MenuLayout, ResponsiveMenu } from '../../styles';

import { ActiveCategory } from './ActiveCategory';
import { SearchBar } from './SearchBar';

export function Menu({ onChoose }) {
  const categories = useFetch('categories', 1);
  const [isExpanded, setIsExpanded] = useState(false);

  if (categories.loading) {
    return (
      <div>
        <li> a moment please..</li>
      </div>
    );
  }
  if (categories.error) {
    return (
      <div>
        <li> There is a problem fetching data ${categories.error}</li>
      </div>
    );
  }

  return (
    <MenuLayout>
      <MenuButton onClick={() => setIsExpanded(!isExpanded)}>
        <GiHamburgerMenu />
      </MenuButton>

      <SearchBar />
      <ResponsiveMenu isShown={isExpanded ? 'flex' : 'none'}>
        <ActiveCategory category={'home'} />
        {categories.data[0].map((category, i) => (
          <ActiveCategory category={category} key={i} />
        ))}
      </ResponsiveMenu>
    </MenuLayout>
  );
}
