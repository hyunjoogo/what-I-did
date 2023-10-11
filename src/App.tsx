import React from 'react';
import CreateAction from './pages/CreateAction';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';
import ActionProgress from './pages/ActionProgress';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      {/*<CreateAction />*/}
      <ActionProgress />
    </ThemeProvider>
  );
}

export default App;
