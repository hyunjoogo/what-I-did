import React from "react";
import { ACTION_TIME_OPTIONS } from "../types/action";
import Select from "../components/common/Select/Select";
import { css } from "styled-components";
import QuestionTextarea from "../components/common/QuestionTextarea/QuestionTextarea";
import useQuestionTextarea from "../hooks/common/useQuestionTextarea";

const ActionProgress = () => {
  const { errorMessage, ...etc } = useQuestionTextarea({
    minLength: 5,
    maxLength: 30,
    required: true,
  });

  return (
    <section className="bg-blue-300 h-[100px]">
      <label
        htmlFor="duringTime"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        시간 설정
      </label>
      <Select
        label="라벨입니다"
        $style={css`
          position: relative;
        `}
      >
        <Select.Trigger
          triggerText="행동 시간을 선택해주세요"
          testId="timepercycle"
        />
        <Select.List
          $style={css`
            position: absolute;
            left: 0;
            right: 0;
            z-index: 10;
          `}
          onChange={(e) => console.log(e)}
        >
          {ACTION_TIME_OPTIONS.map((el, idx) => (
            <Select.Item key={idx + el} value={el} suffix="분" />
          ))}
        </Select.List>
      </Select>
      <QuestionTextarea
        question="무엇을 할 예정인가요?"
        errorMessage={errorMessage}
        {...etc}
      />
    </section>
  );
};

export default ActionProgress;
