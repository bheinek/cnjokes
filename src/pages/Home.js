import { Container } from 'reactstrap';

import { JokesList, SearchBar } from '../components';

export function Home() {
  const numberOfJokes = 10;

  return (
    <Container>
      <SearchBar />
      <JokesList slug={'random'} numberOfJokes={numberOfJokes} />
    </Container>
  );
}
