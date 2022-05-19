import { useState } from 'react';

import { Header, JokesList, Menu } from './components';

function App() {
  const [category, setCategory] = useState();

  return (
    <div>
      <Header />

      <Menu onChoose={setCategory} />
      <JokesList slug={category ? 'random?category=' + category : 'random'} />
    </div>
  );
}

export default App;
