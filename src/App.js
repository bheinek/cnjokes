
import './App.css';
import { FetchData } from './components/FetchData';
import { FetchRandomJoke } from './components/FetchRandomJoke';

function App() {

  return(
<div>
  <FetchData />
  <FetchRandomJoke category="" />
  <FetchRandomJoke category="animal" />

</div>
)
}

export default App;
