import React from 'react';
import UseTimer from '../../../hooks/common/useTimer';
import styled, { css } from 'styled-components';
import color from '../../../styles/color';
import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import { useCurrentActionInfo } from '../../../Contexts/ActionProgressProvider';
import format from '../../../utils/format';

const Timer = () => {
  const { startTimestamp, endTimestamp } = useCurrentActionInfo();
  const { start, stop, leftSeconds, isTicking, restart } = UseTimer(startTimestamp, endTimestamp);

  const formattedTime = format.time(leftSeconds);

  const buttonColor = color.red[600];
  const buttonText = isTicking ? '정지' : '시작';
  const buttonAction = isTicking ? stop : start;

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

      <Button variant="outlined" size="small" onClick={restart}>
        다시 시작
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={buttonAction}
        aria-label="타이머 시작 및 일시정지 버튼"
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
          aria-label={`타이머 ${isTicking ? '시작' : '정지'}`}
          aria-live="assertive"
        >
          {buttonText}
        </Typography>
      </Button>
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
