import { createContext, PropsWithChildren, useContext } from 'react';
import { MemberInfo } from '../types/member';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';

const MemberInfoContext = createContext<MemberInfo | null>(null);

const MemberInfoProvider = ({ children }: PropsWithChildren) => {
  const { getActorInfo } = useLocalStorage();
  const { result, isLoading } = useFetch(() => getActorInfo());

  // if (isLoading) return null;
  console.log('MemberInfo', result);

  return <MemberInfoContext.Provider value={result}>{children}</MemberInfoContext.Provider>;
};

export default MemberInfoProvider;

export const useMemberInfo = () => useContext(MemberInfoContext);
