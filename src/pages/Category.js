import { useParams } from 'react-router-dom';

import { JokesList } from '../components';

export function Category() {
  const { slug } = useParams();
  const numberOfJokes = 10;

  return (
    <JokesList slug={'random?category=' + slug} numberOfJokes={numberOfJokes} />
  );
}
