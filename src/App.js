import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Routes } from './Routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
