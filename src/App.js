import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import {theme} from './styles/theme';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes/>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
