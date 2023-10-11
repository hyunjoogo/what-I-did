import localStorageManager from '../../utils/localStorageManager';
import { EssentialCurrentAction } from '../../types/action';
import { ResponseCurrentActionInfo } from '../../types/storage';

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

  return { getCurrentAction, setCurrentAction };
};

export default useLocalStorage;
