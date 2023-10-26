const useActorName = (actorName: string | null | undefined) => {
  if (typeof actorName !== 'string') {
    return '알 수 없음';
  }
  return actorName;
};

export default useActorName;
