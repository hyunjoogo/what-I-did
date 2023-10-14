import React from 'react';
import styled, { css } from 'styled-components';
import color from '../../../styles/color';
import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import format from '../../../utils/format';
import { Step } from '../../../types/action';
import UseStepTimer from '../hooks/useStepTimer';

type Props = {
  step: Step;
};

const Timer = ({ step }: Props) => {
  const { leftSeconds, isTicking, stop, restart } = UseStepTimer({
    step,
    onComplete: () => {
      console.log('음악 재생');
    },
  });
  const formattedTime = format.time(leftSeconds);

  const buttonColor = color.green[600];
  const buttonText = isTicking ? '정지' : '다시 시작';
  const buttonAction = isTicking ? stop : restart;

  return (
    <Layout>
      <Typography variant="p1" fontSize="3.6rem" color={color.white}>
        남은 시간
      </Typography>
      <Typography
        variant="h1"
        fontSize="15rem"
        color={color.white}
        tabIndex={0}
        role="timer"
        aria-label={`남은 시간 ${leftSeconds}`}
      >
        {`${formattedTime}`}
      </Typography>

      {step === 'inAction' && leftSeconds > 1 && (
        <Button
          variant="outlined"
          size="small"
          onClick={buttonAction}
          aria-label="타이머 다시 시작 및 일시정지 버튼"
          $style={css`
            border: none;
            border-radius: 14px;

            &:hover {
              &:enabled {
                background-color: ${color.white};
              }
            }
          `}
        >
          <Typography
            variant="h5"
            color={buttonColor}
            aria-label={`타이머 ${isTicking ? '정지' : '다시 시작'}`}
            aria-live="assertive"
          >
            {buttonText}
          </Typography>
        </Button>
      )}
    </Layout>
  );
};

export default Timer;

const Layout = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    line-height: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    flex-direction: row;
    justify-content: space-between;

    p {
      display: none;
    }

    h1 {
      font-size: 5.2rem;
      margin-bottom: 0;
    }

    button {
      width: 120px;
      padding: 10px 24px;
    }
  }
`;
