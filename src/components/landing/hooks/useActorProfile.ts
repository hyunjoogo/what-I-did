import { useMemberInfo, useMemberInfoAction } from '../../../contexts/MemberInfoProvider';
import transActorName from '../../../utils/transActorName';

const useActorProfile = () => {
  const memberInfo = useMemberInfo();
  const actorName = transActorName(memberInfo?.actorName);
  const { refetchMemberInfo: fetchMemberInfo } = useMemberInfoAction();

  const handleNamChange = () => {
    fetchMemberInfo();
  };

  return { memberInfo, actorName, handleNamChange };
};

export default useActorProfile;
