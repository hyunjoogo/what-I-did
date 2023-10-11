import React from 'react';
import styled from 'styled-components';
import ActionBoard from '../components/progress/ActionBoard/ActionBoard';
import ActionProgressProvider from '../Contexts/ActionProgressProvider';

const ActionProgress = () => {
  return (
    <Layout>
      <ActionProgressProvider>
        <ActionBoard></ActionBoard>
      </ActionProgressProvider>
    </Layout>
  );
};

export default ActionProgress;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
