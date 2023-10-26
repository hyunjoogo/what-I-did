import React from 'react';
import styled, { css } from 'styled-components';
import color from '../../../styles/color';
import { Step } from '../../../types/action';
import Typography from '../../common/Typography/Typography';
import Timer from '../Timer/Timer';

const SIDEBAR_INFO: Record<Step, { theme: string; stepKeyword: string; paragraph: string }> = {
  inAction: {
    theme: color.green[600],
    stepKeyword: '행동 실행하기',
    paragraph: '행동을 시작해봅시다.\n나의 행동을 메모하면 좋습니다.',
  },
  retrospect: {
    theme: color.red[400],
    stepKeyword: '행동 요약하기',
    paragraph: '나의 행동을 요약해봅시다.\n중간 메모를 활용하여 의미있는 지식을 생각해보세요',
  },
};

type Props = {
  step: Step;
};

const Sidebar = ({ step }: Props) => {
  const paragraph = SIDEBAR_INFO[step].paragraph;
  const stepKeyword = SIDEBAR_INFO[step].stepKeyword;

  return (
    <Layout background={SIDEBAR_INFO[step].theme}>
      <Typography
        variant="h4"
        color={color.white}
        $style={css`
          margin-right: auto;
          white-space: pre-line;
        `}
        tabIndex={0}
        aria-label={paragraph}
        aria-live="assertive"
      >
        {paragraph}
      </Typography>
      <Timer step={step} />
      <Typography variant="p1" color={color.white}>
        {stepKeyword}
      </Typography>
    </Layout>
  );
};

export default Sidebar;

const Layout = styled.div<{ background: string }>`
  width: 590px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 80px 90px;

  background-color: ${({ background }) => background};

  transition: background-color 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 130px;

    align-items: flex-start;

    padding: 30px 20px 20px 20px;

    h4 {
      display: none;
    }

    p {
      font-size: 2rem;
    }
  }
`;
