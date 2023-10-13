import localStorageManager from '../../utils/localStorageManager';
import { EssentialCurrentAction } from '../../types/action';
import { RequestActionPlans, ResponseActionPlans, ResponseCurrentActionInfo } from '../../types/storage';

const useLocalStorage = () => {
  const getCurrentAction = () => {
    return new Promise<ResponseCurrentActionInfo>((resolve, reject) => {
      try {
        const data: ResponseCurrentActionInfo = localStorageManager.currentAction;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const setCurrentAction = (essentialCurrentAction: EssentialCurrentAction) => {
    return new Promise((resolve, reject) => {
      try {
        localStorageManager.setCurrentAction(essentialCurrentAction);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const setActionPlans = (memo: RequestActionPlans) => {
    return new Promise((resolve, reject) => {
      try {
        localStorageManager.setActionPlans(memo);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getActionPlans = () => {
    return new Promise<ResponseActionPlans>((resolve, reject) => {
      try {
        const data: ResponseActionPlans = localStorageManager.actionPlans;
        console.log(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return { getCurrentAction, setCurrentAction, setActionPlans, getActionPlans };
};

export default useLocalStorage;
