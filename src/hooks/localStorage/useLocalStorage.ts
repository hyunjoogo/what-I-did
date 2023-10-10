import localStorageManager from '../../utils/localStorageManager';
import { EssentialCurrentAction } from '../../types/action';

const useLocalStorage = () => {
  const getCurrentAction = () => {
    return localStorageManager.currentAction;
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
