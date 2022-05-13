import './App.css';
import {Header} from './components/Header';
import {JokesList} from './components/JokesList'
import {Menu} from "./components/Menu"

function App() {
  return (
    <div>
    <Header />
    <Menu />
    <JokesList />
    </div>
  );
}

export default App;
