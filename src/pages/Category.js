import { useParams } from 'react-router-dom';

import { JokesList } from '../components';
import { useFetch } from '../hooks';

export function Category() {
  const numberOfJokes = 20;
  const { slug } = useParams();
  const fetchedJokes = useFetch('random?category=' + slug, numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  return <JokesList fetchedJokes={fetchedJokes} listOfJokes={filteredJokes} />;
}
