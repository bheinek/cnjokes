import { useFetch } from '../../hooks';

export function JokesListLayout({ children }) {
  const fetchedJoke = useFetch(children);

  if (fetchedJoke.loading) {
    return 'a moment please..';
  }
  if (fetchedJoke.error) {
    return 'There is a problem fetching data ' + fetchedJoke.error;
  }
  return fetchedJoke.data.value;
}
