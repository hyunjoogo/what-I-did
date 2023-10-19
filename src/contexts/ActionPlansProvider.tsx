import { createContext, PropsWithChildren, useContext } from 'react';
import { ActionPlans } from '../types/action';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';

const ActionPlansContext = createContext<ActionPlans | null>(null);

const ActionPlansProvider = ({ children }: PropsWithChildren) => {
  const { getActionPlans } = useLocalStorage();
  const { result, isLoading } = useFetch(() => getActionPlans());

  if (isLoading && !result) return null;

  return <ActionPlansContext.Provider value={result}>{children}</ActionPlansContext.Provider>;
};

export default ActionPlansProvider;

export const useActionPlansInfo = () => {
  const actionPlans = useContext(ActionPlansContext);

  if (actionPlans === null) {
    throw new Error('행동 정보를 불러오는 중 문제가 발생했습니다.');
  }

  return actionPlans;
};
