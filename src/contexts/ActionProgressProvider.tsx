import { createContext, PropsWithChildren, useContext } from 'react';
import { CurrentActionInfo } from '../types/action';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';

const CurrentActionInfoContext = createContext<CurrentActionInfo | null>(null);

const ActionProgressProvider = ({ children }: PropsWithChildren) => {
  const { getCurrentAction } = useLocalStorage();
  const { result: currentActionInfo } = useFetch(() => getCurrentAction());

  if (!currentActionInfo) return null;

  return <CurrentActionInfoContext.Provider value={currentActionInfo}>{children}</CurrentActionInfoContext.Provider>;
};

export default ActionProgressProvider;

export const useCurrentActionInfo = () => {
  const currentActionInfo = useContext(CurrentActionInfoContext);

  if (currentActionInfo === null) {
    throw new Error('행동 정보를 불러오는 중 문제가 발생했습니다.');
  }

  return currentActionInfo;
};
