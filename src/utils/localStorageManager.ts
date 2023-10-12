import { CurrentActionInfo, EssentialCurrentAction } from '../types/action';

const localStorageManager = {
  CURRENT_ACTION: 'currentAction',
  ACTION_PLANS: 'actionPlans',
  get currentAction(): CurrentActionInfo {
    return JSON.parse(localStorage.getItem(this.CURRENT_ACTION)!);
  },

  setCurrentAction(essentialCurrentAction: EssentialCurrentAction) {
    const startTimestamp = Date.now();
    const endTimestamp = startTimestamp + essentialCurrentAction.duringTime * 60 * 1000;
    const currentAction = {
      startTimestamp: startTimestamp,
      endTimestamp: endTimestamp,
      ...essentialCurrentAction,
    };
    localStorage.setItem(this.CURRENT_ACTION, JSON.stringify(currentAction));
  },

  setNewEndTimestampOfCurrentAction(leftSeconds: number) {
    const prev = this.currentAction;
    const newEndTimestamp = Date.now() + leftSeconds * 1000;
    const newCurrentAction = {
      ...prev,
      endTimestamp: newEndTimestamp,
    };
    this.setCurrentAction(newCurrentAction);
  },
};

export default localStorageManager;
