import React from 'react';
import styled from 'styled-components';
import { useActionPlansInfo } from '../../../contexts/ActionPlansProvider';
import MemberRecordItem from '../MemberRecordItem/MemberRecordItem';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../../constants/routes';

const MemberRecordList = () => {
  const actionPlansInfo = useActionPlansInfo();
  const navigate = useNavigate();
  const handleClickItem = (actionId: number) => {
    navigate(`${ROUTES_PATH.record}/${actionId}`);
  };

  return (
    <Layout>
      {actionPlansInfo?.plans
        ?.reverse()
        .map((action, index) => <MemberRecordItem key={index} action={action} handleClickItem={handleClickItem} />)}
    </Layout>
  );
};

export default MemberRecordList;

const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
