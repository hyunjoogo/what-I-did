import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/color';
import Sidebar from '../Sidebar/Sidebar';
import RetrospectForm from '../RetrospectForm/RetrospectForm';

const RetrospectBoard = () => {
  return (
    <Container>
      <Sidebar step="retrospect" />
      <Contents>
        <RetrospectForm />
      </Contents>
    </Container>
  );
};

export default RetrospectBoard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contents = styled.section`
  width: calc(100% - 590px);
  height: 100vh;

  background-color: ${color.neutral[100]};

  padding: 40px 85px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 130px);

    padding: 30px 20px;
  }
`;
