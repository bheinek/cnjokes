import { useParams } from 'react-router-dom';

import { JokesList } from '../components';

export function Category() {
  const { slug } = useParams();
  const numberOfJokes = 10;
  console.log(slug);

  return <JokesList slug={slug} numberOfJokes={numberOfJokes} />;
}
