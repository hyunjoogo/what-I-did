import { createContext, PropsWithChildren, useContext } from 'react';
import { CurrentActionInfo } from '../types/action';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';
import useFetch from '../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES_PATH } from '../constants/routes';
import { useNotification } from './NotificationProvider';

const CurrentActionInfoContext = createContext<CurrentActionInfo | null>(null);

const ActionProgressProvider = ({ children }: PropsWithChildren) => {
  const { actionId } = useParams();
  const navigate = useNavigate();
  const { send } = useNotification();

  if (!actionId) throw new Error('정상적인 경로로 접근해주세요.');

  const { getCurrentAction } = useLocalStorage();
  const { result: currentActionInfo } = useFetch(() => getCurrentAction());

  if (!currentActionInfo) return null;
  if (Number(actionId) !== currentActionInfo.startTimestamp) {
    send({ message: '이미 끝난 행동입니다. \n행동 만들기 페이지로 이동합니다.' });
    navigate(`${ROUTES_PATH.create}`);
    return null;
  }
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
