import React, { Suspense } from 'react';
import styled from 'styled-components';
import InActionBoard from '../components/progress/InActionBoard/InActionBoard';
import ActionProgressProvider from '../contexts/ActionProgressProvider';
import LoadingFallback from '../components/common/LoadingFallback/LoadingFallback';
import NotificationBoundary from '../components/common/NotificationBoundary/NotificationBoundary';

const ActionProgress = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback height="100vh" />}>
        <ActionProgressProvider>
          <NotificationBoundary>
            <InActionBoard />
          </NotificationBoundary>
        </ActionProgressProvider>
      </Suspense>
    </Layout>
  );
};

export default ActionProgress;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
