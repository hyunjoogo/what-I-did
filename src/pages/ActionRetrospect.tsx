import React, { Suspense } from 'react';
import styled from 'styled-components';
import RetrospectProvider from '../contexts/RetrospectProvider';
import RetrospectBoard from '../components/progress/RetrospectBoard/RetrospectBoard';
import LoadingFallback from '../components/common/LoadingFallback/LoadingFallback';
import color from '../styles/color';

const ActionRetrospect = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback circleColor={color.red[500]} />}>
        <RetrospectProvider>
          <RetrospectBoard />
        </RetrospectProvider>
      </Suspense>
    </Layout>
  );
};

export default ActionRetrospect;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
