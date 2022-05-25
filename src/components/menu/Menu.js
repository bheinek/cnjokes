import { useFetch } from '../../hooks';
import { ActiveCategory, MenuLayout } from '../';

import { SearchBar } from './SearchBar';

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
      <li>
        <SearchBar />
      </li>
      <ActiveCategory category={'home'} />
      {categories.data[0].map((category, i) => (
        <li key={i}>
          <ActiveCategory category={category} />
        </li>
      ))}
    </MenuLayout>
  );
}
