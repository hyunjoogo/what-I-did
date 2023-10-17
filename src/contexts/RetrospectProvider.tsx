import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ActionPlan } from '../types/action';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES_PATH } from '../constants/routes';
import { useNotification } from './NotificationProvider';

const RetrospectInfoContext = createContext<ActionPlan | null>(null);

const RetrospectProvider = ({ children }: PropsWithChildren) => {
  const { actionId } = useParams();
  const navigate = useNavigate();
  const { send } = useNotification();
  const { getActionPlan } = useLocalStorage();

  const { result, isLoading } = useFetch(() => getActionPlan(Number(actionId)));

  if (isLoading && !result) {
    return null;
  }
  if (!isLoading && !result) {
    send({ message: '존재하지 않는 행동입니다. \n행동 만들기 페이지로 이동합니다.' });
    navigate(`${ROUTES_PATH.create}`);
    return null;
  }

  if (!isLoading && result?.isDone) {
    send({ message: '이미 종료된 행동입니다. \n행동 만들기 페이지로 이동합니다.' });
    navigate(`${ROUTES_PATH.create}`);
    return null;
  }

  return <RetrospectInfoContext.Provider value={result}>{children}</RetrospectInfoContext.Provider>;
};

export default RetrospectProvider;

export const useActionPlanInfo = () => {
  const actionPlanInfo = useContext(RetrospectInfoContext);

  if (actionPlanInfo === null) {
    throw new Error('행동 정보를 불러오는 중 문제가 발생했습니다.');
  }

  return actionPlanInfo;
};

// http://localhost:3000/retrospect/1697464378132
