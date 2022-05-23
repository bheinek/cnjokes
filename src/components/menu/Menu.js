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
      <li
        className="home"
        key={'home'}
        onClick={() => {
          onChoose(null);
        }}
      >
        HOME
      </li>
      {categories.data[0].map((category, i) => (
        <li
          key={i}
          onClick={() => {
            onChoose(category);
          }}
        >
          {category.toUpperCase()}
        </li>
      ))}
    </MenuLayout>
  );
}
