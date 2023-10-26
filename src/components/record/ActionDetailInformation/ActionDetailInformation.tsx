import Accordion from '../../common/Accordion/Accordion';
import Typography from '../../common/Typography/Typography';
import RecordItem from '../RecordItem/RecordItem';
import useActorName from '../../../hooks/common/useActorName';
import { useMemberInfo } from '../../../contexts/MemberInfoProvider';

const ActionDetailInformation = () => {
  const memberInfo = useMemberInfo();
  const actorName = useActorName(memberInfo?.actorName);

  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <Typography variant="h5">{actorName}님의 기록</Typography>
        </Accordion.Header>
        <Accordion.Panel>
          <RecordItem />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ActionDetailInformation;
