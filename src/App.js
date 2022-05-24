import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Routes } from './Routes';

function App() {
  //const [category, setCategory] = useState();

  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
