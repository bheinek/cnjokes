import { MenuLayout, useFetch } from '../';

import './Menu.css';

export function Menu() {
  const categories = useFetch('categories');
  if (categories.loading)
    return <MenuLayout func={<li> a moment please..</li>} />;
  else if (categories.error)
    return (
      <MenuLayout
        func={<li> There is a problem fetching data ${categories.error}</li>}
      />
    );
  else {
    return (
      <MenuLayout
        func={categories.data.map((category, i) => (
          <li key={i}>
            <a href=".">{category.toUpperCase()}</a>
          </li>
        ))}
      />
    );
  }
}
