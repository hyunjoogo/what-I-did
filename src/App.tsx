import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyle';
import { Outlet } from 'react-router-dom';
import NotificationProvider from './contexts/NotificationProvider';
import MemberInfoProvider from './contexts/MemberInfoProvider';
import ModalProvider from './contexts/ModalProvider';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Suspense>
        <NotificationProvider>
          <ModalProvider>
            <MemberInfoProvider>
              <Outlet />
            </MemberInfoProvider>
          </ModalProvider>
        </NotificationProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
