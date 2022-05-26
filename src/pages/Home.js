import { useState } from 'react';
import { Container, Form } from 'reactstrap';

import { JokesList } from '../components';
import { Dropdown } from '../components/Dropdown';
import { useFetch } from '../hooks';

export function Home() {
  const [numberOfJokes, setNumberOfJokes] = useState(10);
  const fetchedJokes = useFetch('random', numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  return (
    <Container>
      <JokesList
        fetchedJokes={fetchedJokes}
        listOfJokes={filteredJokes}
        numberOfJokes={numberOfJokes}
      />
      <Form>
        <div className="form-control">
          <Dropdown number={numberOfJokes} setNumber={setNumberOfJokes} />
        </div>
      </Form>
    </Container>
  );
}
