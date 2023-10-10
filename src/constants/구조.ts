export const 구조 = {
  actionPlans: {
    actorName: '이름',
    plans: {
      id: {
        id: 'startTimeStamp',
        whatIWill: '무엇을 할 예정',
        memo: '플랜중간에 적는 내용',
        name: '플랜이름',
        whatIDid: '내가 무엇을 했는지?',
        whatILearned: '어떤 지식을 알게 되었나요?',
        summary: '요약하기',
        isDone: '사용자가 끝났는지', // 시간이 지나서 끝난건 아님. 행동종료버튼을 눌러야지 됨
        info: {
          startTimeStamp: '시작시간', // 타임스탬프
          duringTime: '행동시간',
          endTimeStamp: '종료시간',
        },
      },
    },
  },
};
