import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { Header, Menu } from './components';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
