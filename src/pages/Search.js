import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

import { JokesList } from '../components';
import { useFetch } from '../hooks';

export function Search() {
  const { slug } = useParams();
  const fetchedJokes = useFetch('search?query=' + slug, 1);
  const jokes = fetchedJokes.data[0]?.result.map((joke) => joke.value);

  return (
    <Container>
      <JokesList fetchedJokes={fetchedJokes} listOfJokes={jokes} />
    </Container>
  );
}
