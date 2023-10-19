import React from 'react';
import styled from 'styled-components';
import ActionInformation from '../ActionInformation/ActionInformation';
import ActionDetailInformation from '../ActionDetailInformation/ActionDetailInformation';

const ActionRecordContents = () => {
  return (
    <Layout>
      <ActionInformation />
      <ActionDetailInformation />
    </Layout>
  );
};

export default ActionRecordContents;

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
