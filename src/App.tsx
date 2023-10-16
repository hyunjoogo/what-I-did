import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';
import { Outlet } from 'react-router-dom';
import NotificationProvider from './contexts/NotificationProvider';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <NotificationProvider>
        <Suspense>
          <Outlet />
        </Suspense>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
