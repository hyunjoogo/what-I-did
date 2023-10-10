import React from 'react';
import styled, { css } from 'styled-components';
import Select from '../../common/Select/Select';
import { ACTION_TIME_OPTIONS } from '../../../constants/action';
import QuestionTextarea from '../../common/QuestionTextarea/QuestionTextarea';
import Button from '../../common/Button/Button';
import useCreateActionForm from '../hooks/useCreateActionForm';

const CreateActionForm = () => {
  const { changeDuringTime, questionTextareaProps, submitForm, isSubmitLoading, isDisabled } = useCreateActionForm();
  const handleClickCreateActionButton = () => {
    submitForm();
  };

  return (
    <Layout>
      <Container>
        <Select
          label="행동 시간을 선택해주세요"
          $style={css`
            position: relative;
          `}
        >
          <Select.Trigger triggerText="시간을 선택해주세요" testId="timepercycle" />
          <Select.List
            $style={css`
              position: absolute;
              left: 0;
              right: 0;
              z-index: 10;
            `}
            onChange={changeDuringTime}
          >
            {ACTION_TIME_OPTIONS.map((el, idx) => (
              <Select.Item key={idx + el} value={el} suffix="분" />
            ))}
          </Select.List>
        </Select>
        <QuestionTextarea question="무엇을 할 예정인가요?" {...questionTextareaProps.whatIWill} />
      </Container>
      <Button variant="primary" onClick={handleClickCreateActionButton} disabled={isDisabled()}>
        실행 시작하기
      </Button>
    </Layout>
  );
};

export default CreateActionForm;

const Layout = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
