type LocalActionPlans = {
  actorName: string;
  plans: Plan[];
};

type Plan = {
  id: number;
  whatIWill: string;
  memo: string;
  name: string;
  whatIDid: string;
  whatILearned: string;
  summary: string;
  isDone: string;
  info: PlanInfo;
};

type PlanInfo = {
  startTimeStamp: number;
  duringTime: number;
  endTimeStamp: number;
};

export const actionPlans: LocalActionPlans = {
  actorName: '이름',
  plans: [
    {
      id: 129467,
      whatIWill: '무엇을 할 예정',
      memo: '플랜중간에 적는 내용',
      name: '플랜이름',
      whatIDid: '내가 무엇을 했는지?',
      whatILearned: '어떤 지식을 알게 되었나요?',
      summary: '요약하기',
      isDone: '사용자가 끝났는지', // 시간이 지나서 끝난건 아님. 행동종료버튼을 눌러야지 됨
      info: {
        startTimeStamp: 1, // 타임스탬프
        duringTime: 3,
        endTimeStamp: 5,
      },
    },
  ],
};
