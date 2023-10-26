import { DisplayPlanList } from '../types/action';

export const ACTION_TIME_OPTIONS = [20, 25, 30, 35, 40, 45, 50, 55, 60] as const;

export const RETROSPECT_MIN = 5;

export const PLAN_KEYWORDS: DisplayPlanList = {
  whatIWill: '어떤 행동을 할 예정입니까?',
  memo: '행동 중 메모',
  whatIDid: '무엇을 하였나요?',
  whatILearned: '무엇을 배웠나요?',
  summary: '행동 요약하기',
};
