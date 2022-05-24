import { JokesList } from '../components';

export function Home() {
  const numberOfJokes = 10;

  return <JokesList slug={''} numberOfJokes={numberOfJokes} />;
}
