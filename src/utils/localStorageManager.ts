import {ActionPlans, CurrentActionInfo, EssentialCurrentAction, ActionPlan} from '../types/action';
import {RequestActionPlans, ResponseActionPlans} from '../types/storage';
import {MemberInfo} from '../types/member';

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
        const actionPlansStr = localStorage.getItem(this.ACTION_PLANS);
        const actorName = actionPlansStr === null ? null : JSON.parse(actionPlansStr).actorName
        return {actorName}
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
        return {actionId: startTimestamp};
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

    createNewActionPlans(memo: RequestActionPlans, {whatIWill, ...planInfo}: CurrentActionInfo) {
        const actionPlansTemplate: ActionPlans = {
            actorName: null,
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
        localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlansTemplate));
    },

    setActionPlan(memo: RequestActionPlans, endTime: number) {
        const endTimestamp = endTime;
        const actionPlans = this.actionPlans
        const {whatIWill, startTimestamp, duringTime} = this.currentAction!;
        // 로컬스토리지에 plan 데이터가 없으면 기본값을 생성해준다.
        if (actionPlans === null) {
            return this.createNewActionPlans(memo, {whatIWill, endTimestamp, startTimestamp, duringTime});
        }
        const data = {
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
        }
        if (actionPlans.plans) {
            actionPlans.plans.push(data);
        } else {
            actionPlans.plans = [data]
        }
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
        actionPlans.plans[targetIndex] = {...actionPlans.plans[targetIndex], ...content};
        localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlans));
    },

    updateActorName(name: string) {
        const actionPlans = this.actionPlans;
        if (actionPlans === null) {
            localStorage.setItem(this.ACTION_PLANS, JSON.stringify({actorName: name}));
        }
        actionPlans!.actorName = name
        localStorage.setItem(this.ACTION_PLANS, JSON.stringify(actionPlans));
    }
};

export default localStorageManager;
