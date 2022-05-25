import { Container } from 'reactstrap';

import { JokesList } from '../components';
import { useFetch } from '../hooks';

export function Home() {
  const numberOfJokes = 10;
  const fetchedJokes = useFetch('random', numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  return (
    <Container>
      <JokesList fetchedJokes={fetchedJokes} listOfJokes={filteredJokes} />
    </Container>
  );
}
