import { useState } from 'react';

import { JokesList } from '../components';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { useFetch } from '../hooks';
import headerImage from '../images/background.jpg';
import { DropDownLayout, JokesListLayout } from '../styles';

export function Home() {
  const [numberOfJokes, setNumberOfJokes] = useState(10);
  const fetchedJokes = useFetch('random', numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  return (
    <JokesListLayout>
      <JokesList
        fetchedJokes={fetchedJokes}
        listOfJokes={filteredJokes}
        numberOfJokes={numberOfJokes}
      />
      <DropDownLayout img={headerImage}>
        <Dropdown number={numberOfJokes} setNumber={setNumberOfJokes} />
      </DropDownLayout>
    </JokesListLayout>
  );
}
