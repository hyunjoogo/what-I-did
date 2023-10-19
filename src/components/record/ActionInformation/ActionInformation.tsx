import React from 'react';
import styled, { css } from 'styled-components';
import color from '../../../styles/color';
import Typography from '../../common/Typography/Typography';
import CalenderIcon from '../../../assets/icons/CalenderIcon';
import TimeLineIcon from '../../../assets/icons/TimeLineIcon';
import { useActionPlanInfo } from '../../../contexts/ActionPlanProvider';
import Button from '../../common/Button/Button';

const ActionInformation = () => {
  const {
    name,
    info: { startTimestamp, duringTime },
  } = useActionPlanInfo();

  return (
    <StudyInformationLayout>
      <TitleWrapper>
        <Title>
          <Typography
            variant="h2"
            $style={css`
              font-weight: 700;
              margin-bottom: 0;
            `}
          >
            {name}
          </Typography>
        </Title>
        <Button variant="secondary" size="x-small" $block={false} onClick={() => alert('create 페이지로 이동')}>
          새로 만들기
        </Button>
      </TitleWrapper>
      <StudyInfoContainer>
        <Typography variant="p2">
          <CalenderIcon color={color.neutral[700]} />
          진행 날짜
        </Typography>
        <Typography variant="p2">{startTimestamp}</Typography>
      </StudyInfoContainer>
      <StudyInfoContainer>
        <Typography variant="p2">
          <TimeLineIcon color={color.neutral[700]} />
          행동 시간
        </Typography>
        <Typography variant="p2">{duringTime}분</Typography>
      </StudyInfoContainer>
    </StudyInformationLayout>
  );
};

export default ActionInformation;

const StudyInformationLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-bottom: 0;
    }
  }
`;

const StudyInfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
  }

  :nth-child(3) {
    text-align: end;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    color: ${color.neutral[700]};
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    :nth-child(3) {
      text-align: start;
      justify-content: space-between;
    }
  }
`;
const Title = styled.span`
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
