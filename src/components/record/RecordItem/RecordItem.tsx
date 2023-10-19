import React from 'react';
import styled from 'styled-components';
import QuestionAnswer from '../../common/QuestionAnswer/QuestionAnswer';
import color from '../../../styles/color';
import { useActionPlanInfo } from '../../../contexts/ActionPlanProvider';
import { getKeys } from '../../../utils/getKeys';
import { PLAN_KEYWORDS } from '../../../constants/action';
import { DisplayPlan } from '../../../types/action';

const RecordItem = () => {
  const actionPlanInfo = useActionPlanInfo();
  return (
    <ParticipantRecordLayout>
      {getKeys<DisplayPlan>(PLAN_KEYWORDS).map((key, index) => (
        <TabItemSection key={index}>
          <QuestionAnswer question={PLAN_KEYWORDS[key]} answer={actionPlanInfo[key]!} iconColor={color.blue[500]} />
        </TabItemSection>
      ))}
    </ParticipantRecordLayout>
  );
};

export default RecordItem;

const ParticipantRecordLayout = styled.div`
  min-height: 308px;
  padding: 40px 30px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;

  h5 {
    display: flex;
    align-items: center;
  }

  p {
    word-break: break-all;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    row-gap: 15px;
  }
`;

const TabItemSection = styled.div`
  width: 50%;

  svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 20px;

    svg {
      width: 15px;
      height: 15px;
    }

    h5 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
