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

export const useActionPlansInfo = () => useContext(ActionPlansContext);
