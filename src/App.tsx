import React from 'react';
import CreateAction from './pages/CreateAction';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';
import ActionProgress from './pages/ActionProgress';
import Retrospect from './pages/Retrospect';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      {/*<CreateAction />*/}
      {/*<ActionProgress />*/}
      <Retrospect />
    </ThemeProvider>
  );
}

export default App;
