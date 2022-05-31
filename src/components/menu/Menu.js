import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useFetch } from '../../hooks';
import { MenuButton, MenuLayout, OnShowMenu } from '../../styles';

import { ActiveCategory } from './ActiveCategory';
import { SearchBar } from './SearchBar';

export function Menu({ onChoose }) {
  const categories = useFetch('categories', 1);
  const [isExpended, setIsExpended] = useState(false);
  console.log(isExpended);

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
      <MenuButton onClick={() => setIsExpended(!isExpended)}>
        <GiHamburgerMenu />
      </MenuButton>

      <SearchBar />
      <OnShowMenu isShown={isExpended ? 'flex' : 'none'}>
        <ActiveCategory category={'home'} />
        {categories.data[0].map((category, i) => (
          <ActiveCategory category={category} key={i} />
        ))}
      </OnShowMenu>
    </MenuLayout>
  );
}
