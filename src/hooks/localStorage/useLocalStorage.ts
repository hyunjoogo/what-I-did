import localStorageManager from '../../utils/localStorageManager';
import { EssentialCurrentAction, ActionPlan } from '../../types/action';
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

  const updateEndTimestamp = (endTimestamp: number) => {
    return new Promise<boolean>((resolve, reject) => {
      try {
        localStorageManager.updateEndTimestampOfCurrentAction(endTimestamp);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const setActionPlans = (memo: RequestActionPlans, endTime: number) => {
    return new Promise((resolve, reject) => {
      try {
        localStorageManager.setActionPlan(memo, endTime);
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
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getActionPlan = (id: number) => {
    return new Promise<ActionPlan | null>((resolve, reject) => {
      try {
        const data: ActionPlan | null = localStorageManager.getActionPlan(id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const deleteCurrentAction = () => {
    return new Promise((resolve, reject) => {
      try {
        localStorageManager.deleteCurrentAction();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getCurrentAction,
    setCurrentAction,
    setActionPlans,
    getActionPlans,
    updateEndTimestamp,
    deleteCurrentAction,
    getActionPlan,
  };
};

export default useLocalStorage;
