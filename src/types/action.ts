import { ACTION_TIME_OPTIONS } from '../constants/action';

export type ActionTimeOptions = (typeof ACTION_TIME_OPTIONS)[number];

export type Step = 'inAction' | 'retrospect';

export type CurrentActionInfo = PlanInfo & {
  whatIWill: string;
};

export type EssentialCurrentAction = {
  duringTime: number;
  whatIWill: string;
};

export type ActionPlans = {
  actorName: string;
  plans: Plan[];
};

export type Plan = {
  id: number; // 생성날짜
  whatIWill: string;
  memo: string | null;
  name: string;
  whatIDid: string;
  whatILearned: string;
  summary: string;
  isDone: boolean;
  info: PlanInfo;
};

export type PlanInfo = {
  startTimestamp: number;
  duringTime: number;
  endTimestamp: number;
};
