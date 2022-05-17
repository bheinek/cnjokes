import { Fetch } from './components/Fetch';
import { useFetch } from './hooks/useFetch';
import { Header, Menu } from './components';

import './App.css';

function App() {
  const categories = useFetch("random")
console.log(categories)

  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
