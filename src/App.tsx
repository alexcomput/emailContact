import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ligth from './styles/themes/lights';
import dark from './styles/themes/dark';

import AppProvider from './hooks/index';

import GlobalStyled from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyled />
    </Router>
  </ThemeProvider>
);

export default App;
