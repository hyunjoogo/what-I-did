import { ACTION_TIME_OPTIONS } from '../constants/action';

export type ActionTimeOptions = (typeof ACTION_TIME_OPTIONS)[number];

export type Step = 'inAction' | 'retrospect';

export type CurrentActionInfo = {
  startTimestamp: number;
  duringTime: number;
  endTimestamp: number;
  whatIWill: string;
};

export type EssentialCurrentAction = {
  duringTime: number;
  whatIWill: string;
};
