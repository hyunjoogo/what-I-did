import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Suspense>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
