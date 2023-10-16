import React from 'react';
import Button from '../../common/Button/Button';
import styled from 'styled-components';
import QuestionTextarea from '../../common/QuestionTextarea/QuestionTextarea';
import useInActionForm from '../hooks/useInActionForm';
import QuestionAnswer from '../../common/QuestionAnswer/QuestionAnswer';
import color from '../../../styles/color';

const InActionForm = () => {
  const { whatIWill, questionTextareaProps, submitForm, isSubmitLoading } = useInActionForm();

  if (whatIWill === null) return null;

  return (
    <Layout>
      <PlanResultList>
        <QuestionList>
          <QuestionAnswer question="어떤 행동을 할 예정입니까?" answer={whatIWill} iconColor={color.green[600]} />
        </QuestionList>
        <QuestionTextarea question="행동 메모" {...questionTextareaProps.memo} />
      </PlanResultList>
      <Button variant="success" onClick={submitForm} $isLoading={isSubmitLoading}>
        행동 마치기
      </Button>
    </Layout>
  );
};

export default InActionForm;

const Layout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PlanResultList = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 60px;

  padding: 50px;
  background-color: #f5f5f5;
  border-radius: 14px;

  overflow-y: auto;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;

    gap: 40px;

    h5 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

const QuestionList = styled.div`
  background-color: #fff;
  padding: 16px 30px 10px 30px;
  border: 1px solid #fff;
  border-radius: 14px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
