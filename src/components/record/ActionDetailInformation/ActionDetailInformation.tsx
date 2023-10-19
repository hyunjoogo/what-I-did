import Accordion from '../../common/Accordion/Accordion';
import Typography from '../../common/Typography/Typography';
import RecordItem from '../RecordItem/RecordItem';

const ActionDetailInformation = () => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <Typography variant="h5">OOO의 기록</Typography>
        </Accordion.Header>
        <Accordion.Panel>
          <RecordItem />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ActionDetailInformation;
