import { useState } from 'react';

import { Header, JokesList, Menu } from './components';

function App() {
  const [category, setCategory] = useState();
  const numberOfJokes = 10;

  return (
    <div>
      <Header />

      <Menu onChoose={setCategory} />
      <JokesList slug={category} numberOfJokes={numberOfJokes} />
    </div>
  );
}

export default App;
