import React from 'react';
import styled from 'styled-components';
import { useActionPlanInfo } from '../../../contexts/ActionPlanProvider';

const ActionRecordContents = () => {
  const actionPlan = useActionPlanInfo();

  return <Layout></Layout>;
};

export default ActionRecordContents;

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
