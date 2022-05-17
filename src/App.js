
import './App.css';
import { FetchRandomJoke } from './components/FetchRandomJoke';

function App() {
const category = ["animal", "dev"]

  return(
<div>
  <FetchRandomJoke slug="categories" />
  <FetchRandomJoke slug="random" />
  <FetchRandomJoke slug={`random?category=${category[1]}`}/>
  


</div>
)
}

export default App;
