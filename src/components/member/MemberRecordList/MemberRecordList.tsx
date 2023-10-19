import React from 'react';
import styled from 'styled-components';
import { useActionPlansInfo } from '../../../contexts/ActionPlansProvider';
import MemberRecordItem from '../MemberRecordItem/MemberRecordItem';

const MemberRecordList = () => {
  const { plans } = useActionPlansInfo();

  const handleClickItem = (actionId: number) => {
    console.log(actionId);
  };

  return (
    <Layout>
      {plans.map((action, index) => (
        <MemberRecordItem key={index} action={action} handleClickItem={handleClickItem} />
      ))}
    </Layout>
  );
};

export default MemberRecordList;

const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
