import React from 'react';
import styled from 'styled-components';
import RetrospectProvider from '../contexts/RetrospectProvider';
import RetrospectBoard from '../components/progress/RetrospectBoard/RetrospectBoard';

const Retrospect = () => {
  return (
    <Layout>
      <RetrospectProvider>
        <RetrospectBoard />
      </RetrospectProvider>
    </Layout>
  );
};

export default Retrospect;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
