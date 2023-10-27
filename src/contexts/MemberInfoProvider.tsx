import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { MemberInfo } from '../types/member';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';

type Actions = {
  refetchMemberInfo: () => void;
};

const MemberInfoContext = createContext<MemberInfo | null>(null);
const MemberInfoActionContext = createContext<Actions | null>(null);

const MemberInfoProvider = ({ children }: PropsWithChildren) => {
  const { getActorInfo } = useLocalStorage();
  const { result, refetch } = useFetch<MemberInfo>(() => getActorInfo(), {});

  const memberInfo = result || null;

  const actions = useMemo(() => ({ refetchMemberInfo: refetch }), [refetch]);

  return (
    <MemberInfoContext.Provider value={memberInfo}>
      <MemberInfoActionContext.Provider value={actions}>{children}</MemberInfoActionContext.Provider>
    </MemberInfoContext.Provider>
  );
};

export default MemberInfoProvider;

export const useMemberInfo = () => useContext(MemberInfoContext);

export const useMemberInfoAction = () => {
  const value = useContext(MemberInfoActionContext);

  if (value === null) {
    throw new Error('MemberInfoAction 에러');
  }

  return value;
};
