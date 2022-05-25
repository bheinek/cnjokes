import { useParams } from 'react-router-dom';

import { useFetch } from '../hooks';

export function Search() {
  const { slug } = useParams();
  const fetchedJokes = useFetch('search?query=' + slug, 1);
  if (fetchedJokes.loading) {
    return <li> a moment please..</li>;
  }
  if (fetchedJokes.error) {
    return <li> There is a problem fetching data ${fetchedJokes.error}</li>;
  }

  return (
    <div>
      {fetchedJokes?.data[0].result.map((joke, i) => (
        <p key={i}>{joke.value}</p>
      ))}
    </div>
  );
}
