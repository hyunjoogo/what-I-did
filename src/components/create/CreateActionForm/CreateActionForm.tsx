import React from 'react';
import styled, { css } from 'styled-components';
import Select from '../../common/Select/Select';
import { ACTION_TIME_OPTIONS } from '../../../constants/action';
import QuestionTextarea from '../../common/QuestionTextarea/QuestionTextarea';
import Button from '../../common/Button/Button';
import useSelect from '../../../hooks/common/useSelect';
import { ActionTimeOptions } from '../../../types/action';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';

const CreateActionForm = () => {
  const { state: duringTime, onChangeSelectItem: setDuringTime } = useSelect<ActionTimeOptions>();
  const { errorMessage, value, ...etc } = useQuestionTextarea({
    minLength: 5,
    maxLength: 30,
    required: true,
  });

  const createAction = () => {
    console.log(duringTime, value);
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
            onChange={setDuringTime}
          >
            {ACTION_TIME_OPTIONS.map((el, idx) => (
              <Select.Item key={idx + el} value={el} suffix="분" />
            ))}
          </Select.List>
        </Select>
        <QuestionTextarea question="무엇을 할 예정인가요?" errorMessage={errorMessage} value={value} {...etc} />
      </Container>
      <Button variant="primary" onClick={(e) => createAction()}>
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
