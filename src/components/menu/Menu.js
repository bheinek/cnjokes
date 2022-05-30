import { useFetch } from '../../hooks';
import { MenuLayout } from '../../styles';
import { ActiveCategory } from '../';

import { SearchBar } from './SearchBar';

export function Menu({ onChoose }) {
  const categories = useFetch('categories', 1);

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
      <ActiveCategory category={'home'} />
      {categories.data[0].map((category, i) => (
        <ActiveCategory category={category} key={i} />
      ))}
      <SearchBar />
    </MenuLayout>
  );
}
