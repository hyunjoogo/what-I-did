import React from 'react';
import styled from 'styled-components';

const ActionForm = () => {
  return (
    <Layout>
      <QuestionLayout>
        {/* 행동 시간  */}
        {/*  행동 예정 */}
      </QuestionLayout>
    </Layout>
  );
};

export default ActionForm;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const QuestionLayout = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow-y: auto;

  h5 {
    font-size: 2rem;
  }
`;
