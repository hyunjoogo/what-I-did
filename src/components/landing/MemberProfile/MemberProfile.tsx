import styled from 'styled-components';
import Typography from '../../common/Typography/Typography';
import TimeLineIcon from '../../../assets/icons/TimeLineIcon';
import color from '../../../styles/color';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../../constants/routes';
import { useModal } from '../../../contexts/ModalProvider';
import ActorNameModal from '../ActorNameModal/ActorNameModal';
import useActorProfile from '../hooks/useActorProfile';

const MemberProfile = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { memberInfo, actorName, handleNameChange } = useActorProfile();

  if (memberInfo === null) {
    return null;
  }

  const handleClickHistoryIcon = () => {
    navigate(`${ROUTES_PATH.member}`);
  };

  const handleClickMemberName = () => {
    openModal(<ActorNameModal actorName={actorName} handleNameChange={handleNameChange} />);
  };

  return (
    <Layout>
      <MemberNameWrapper onClick={handleClickMemberName}>
        <Typography variant="p3">{actorName}</Typography>
      </MemberNameWrapper>
      <HistoryWrapper onClick={handleClickHistoryIcon}>
        <TimeLineIcon color={color.neutral[800]} />
      </HistoryWrapper>
    </Layout>
  );
};

export default MemberProfile;

const Layout = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 10px;

  align-items: center;
  margin: 0 0 0 auto;

  p {
    font-size: 2rem;
    font-weight: 500;
  }

  svg {
    width: 34px;
    height: 34px;
  }
`;

const HistoryWrapper = styled.div`
  cursor: pointer;
`;

const MemberNameWrapper = styled.div`
  cursor: pointer;
`;
