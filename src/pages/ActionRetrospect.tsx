import React, { Suspense } from 'react';
import styled from 'styled-components';
import RetrospectBoard from '../components/progress/RetrospectBoard/RetrospectBoard';
import LoadingFallback from '../components/common/LoadingFallback/LoadingFallback';
import color from '../styles/color';
import ActionPlanProvider from '../contexts/ActionPlanProvider';

const ActionRetrospect = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback circleColor={color.red[500]} />}>
        <ActionPlanProvider>
          <RetrospectBoard />
        </ActionPlanProvider>
      </Suspense>
    </Layout>
  );
};

export default ActionRetrospect;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
