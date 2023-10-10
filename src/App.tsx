import React from 'react';
import CreateAction from './pages/CreateAction';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <CreateAction />
    </ThemeProvider>
  );
}

export default App;
