import React from 'react';
import styled from 'styled-components';
import InActionBoard from '../components/progress/InActionBoard/InActionBoard';
import ActionProgressProvider from '../Contexts/ActionProgressProvider';

const ActionProgress = () => {
  return (
    <Layout>
      <ActionProgressProvider>
        <InActionBoard></InActionBoard>
      </ActionProgressProvider>
    </Layout>
  );
};

export default ActionProgress;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
