import React, { createContext, PropsWithChildren, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotification } from './NotificationProvider';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';
import { ROUTES_PATH } from '../constants/routes';
import { ActionPlan } from '../types/action';

const ActionPlanContext = createContext<ActionPlan | null>(null);

const ActionPlanProvider = ({ children }: PropsWithChildren) => {
  const { actionId } = useParams();
  if (!actionId) throw new Error('정상적인 경로로 접근해주세요.');

  const navigate = useNavigate();
  const { send } = useNotification();
  const { getActionPlan } = useLocalStorage();

  const { result, isLoading } = useFetch(() => getActionPlan(Number(actionId)));

  if (isLoading && !result) return null;

  if (!isLoading && !result) {
    send({ message: '존재하지 않는 행동입니다. \n행동 만들기 페이지로 이동합니다.' });
    navigate(`${ROUTES_PATH.create}`);
    return null;
  }

  return <ActionPlanContext.Provider value={result}>{children}</ActionPlanContext.Provider>;
};

export default ActionPlanProvider;

export const useActionPlanInfo = () => {
  const actionPlan = useContext(ActionPlanContext);

  if (actionPlan === null) {
    throw new Error('행동 정보를 불러오는 중 문제가 발생했습니다.');
  }

  return actionPlan;
};
