import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ActionPlan } from '../types/action';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';

const RetrospectInfoContext = createContext<ActionPlan | null>(null);

const RetrospectProvider = ({ children }: PropsWithChildren) => {
  const { getActionPlan } = useLocalStorage();
  const { result: actionPlan } = useFetch(() => getActionPlan(1697272756137));

  if (!actionPlan) return null;

  return <RetrospectInfoContext.Provider value={actionPlan}>{children}</RetrospectInfoContext.Provider>;
};

export default RetrospectProvider;

export const useActionPlanInfo = () => {
  const actionPlanInfo = useContext(RetrospectInfoContext);

  if (actionPlanInfo === null) {
    throw new Error('행동 정보를 불러오는 중 문제가 발생했습니다.');
  }

  return actionPlanInfo;
};
