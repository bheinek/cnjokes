
import './App.css';
import { useFetch } from './hooks/useFetch';
import { Fetch } from './components/Fetch';

function App() {
  const categories = useFetch("random")
console.log(categories)
  return(
<div>



  


</div>
)
}

export default App;
