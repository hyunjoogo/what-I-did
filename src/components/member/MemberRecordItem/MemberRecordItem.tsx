import color from '../../../styles/color';
import styled from 'styled-components';
import { ActionPlan } from '../../../types/action';
import Typography from '../../common/Typography/Typography';
import format from '../../../utils/format';
import TimeLineIcon from '../../../assets/icons/TimeLineIcon';

type Props = {
  action: ActionPlan;
  handleClickItem: (actionId: number) => void;
};

const MemberRecordItem = ({ action, handleClickItem }: Props) => {
  return (
    <StudyItem onClick={() => handleClickItem(action.id)}>
      <StudyNameDateContainer>
        <Typography variant="h6">{action.name}</Typography>
        <StudyDate>{format.date(new Date(action.info.startTimestamp))}</StudyDate>
      </StudyNameDateContainer>
      <StudyCycleInfoLayout>
        <StudyCycleInfoContainer>
          <TimeLineIcon color={color.neutral[500]} />
          <span>사이클 당 학습 시간</span>
          <span>{action.info.duringTime}분</span>
        </StudyCycleInfoContainer>
      </StudyCycleInfoLayout>
    </StudyItem>
  );
};

export default MemberRecordItem;

const StudyItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: ${color.white};
  border: 1px solid ${color.neutral[200]};
  border-radius: 7px;

  padding: 20px;

  cursor: pointer;

  transition: border 0.2s ease;

  &:hover {
    border: 1px solid ${color.blue[400]};
  }
`;

const StudyNameDateContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;

  h6 {
    max-width: 100%;
    word-break: break-all;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StudyDate = styled.span`
  color: ${color.neutral[700]};
`;

const StudyCycleInfoLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 25px;
`;

const StudyCycleInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px 10px;
  border-radius: 7px;

  background-color: ${color.neutral[100]};
  color: ${color.neutral[700]};

  :last-child {
    margin-left: 10px;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
