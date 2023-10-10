import { CurrentAction, EssentialCurrentAction } from '../types/action';

const localStorageManager = {
  CURRENT_ACTION: 'currentAction',
  ACTION_PLANS: 'actionPlans',
  get currentAction(): CurrentAction {
    return JSON.parse(localStorage.getItem(this.CURRENT_ACTION)!);
  },

  setCurrentAction(essentialCurrentAction: EssentialCurrentAction) {
    const startTimestamp = Date.now();
    const endTimeStamp = startTimestamp + essentialCurrentAction.duringTime * 60 * 10000;
    const currentAction = {
      startTimestamp: startTimestamp,
      endTimestamp: endTimeStamp,
      ...essentialCurrentAction,
    };
    localStorage.setItem(this.CURRENT_ACTION, JSON.stringify(currentAction));
  },
};

export default localStorageManager;
