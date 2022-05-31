import { useState } from 'react';
import { Container } from 'reactstrap';

import { JokesList } from '../components';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { useFetch } from '../hooks';
import headerImage from '../images/background.jpg';
import { DropDownLayout } from '../styles';

export function Home() {
  const [numberOfJokes, setNumberOfJokes] = useState(10);
  const fetchedJokes = useFetch('random', numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  return (
    <JokesList
      fetchedJokes={fetchedJokes}
      listOfJokes={filteredJokes}
      numberOfJokes={numberOfJokes}
    />
    //   {/* <DropDownLayout img={headerImage}>
    //     <Dropdown number={numberOfJokes} setNumber={setNumberOfJokes} />
    //   </DropDownLayout>
    // </Container> */}
  );
}
