import { ActionPlans, CurrentActionInfo, EssentialCurrentAction, ActionPlan } from '../types/action';
import { RequestActionPlans, ResponseActionPlans } from '../types/storage';
import { MemberInfo } from '../types/member';

const localStorageManager = {
  CURRENT_ACTION: 'currentAction',
  ACTION_PLANS: 'actionPlans',
  get currentAction(): CurrentActionInfo | null {
    const currentActionStr = localStorage.getItem(this.CURRENT_ACTION);
    return currentActionStr === null ? null : JSON.parse(currentActionStr);
  },

  get actionPlans(): ActionPlans | null {
    const actionPlansStr = localStorage.getItem(this.ACTION_PLANS);
    return actionPlansStr === null ? null : JSON.parse(actionPlansStr);
  },

  get actorInfo(): MemberInfo {
    const actionPlans = localStorage.getItem(this.ACTION_PLANS);
    return { actorName: actionPlans === null ? null : JSON.parse(actionPlans).actorName };
  },

  getActionPlan(id: number): ActionPlan | null {
    const actionPlans = this.actionPlans;
    if (actionPlans === null) {
      return null;
    }
    const actionPlan = actionPlans.plans.filter((plan) => plan.id === id);
    return actionPlan[0];
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
    return { actionId: startTimestamp };
  },

  updateEndTimestampOfCurrentAction(leftSeconds: number) {
    const prev = this.currentAction!;
    const newEndTimestamp = Date.now() + leftSeconds * 1000;
    const newCurrentAction = {
      ...prev,
      endTimestamp: newEndTimestamp,
    };
    this.setCurrentAction(newCurrentAction);
  },

  createNewActionPlans(memo: RequestActionPlans, { whatIWill, ...planInfo }: CurrentActionInfo) {
    const actionPlans: ActionPlans = {
      actorName: '이름',
      plans: [
        {
          id: planInfo.startTimestamp,
          whatIWill: whatIWill,
          memo: memo,
          name: '',
          whatIDid: '',
          whatILearned: '',
          summary: '',
          isDone: false,
          info: planInfo,
        },
      ],
    };
    localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlans));
  },

  setActionPlan(memo: RequestActionPlans, endTime: number) {
    const endTimestamp = endTime;
    const localActionPlans = localStorage.getItem(this.ACTION_PLANS);
    const { whatIWill, startTimestamp, duringTime } = this.currentAction!;
    if (localActionPlans === null) {
      return this.createNewActionPlans(memo, { whatIWill, endTimestamp, startTimestamp, duringTime });
    }
    const actionPlans: ResponseActionPlans = JSON.parse(localActionPlans);
    actionPlans.plans.push({
      id: startTimestamp,
      whatIWill: whatIWill,
      memo: memo,
      name: '',
      whatIDid: '',
      whatILearned: '',
      summary: '',
      isDone: false,
      info: {
        startTimestamp,
        endTimestamp,
        duringTime,
      },
    });
    localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlans));
  },

  deleteCurrentAction() {
    localStorage.removeItem(this.CURRENT_ACTION);
    console.log(localStorage.getItem(this.CURRENT_ACTION));
  },

  updateActionPlan(
    id: number,
    content: {
      name: string;
      whatIDid: string;
      whatILearned: string;
      summary: string;
      isDone: boolean;
    },
  ) {
    // 전체를 가지고 와
    const actionPlans = this.actionPlans!;
    const targetIndex = actionPlans.plans.findIndex((value) => value.id === id);
    actionPlans.plans[targetIndex] = { ...actionPlans.plans[targetIndex], ...content };
    localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlans));
  },
};

export default localStorageManager;
