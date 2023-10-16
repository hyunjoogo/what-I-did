import { useCallback, useEffect, useRef, useState } from 'react';
import useLocalStorage from '../localStorage/useLocalStorage';
import useMutation from '../useMutation';

type Options = {
  onStart?: () => void;
  onStop?: () => void;
  onComplete?: () => void;
};

const UseTimer = (endTimestamp: number, { onStart, onStop, onComplete }: Options = {}) => {
  const { getCurrentAction, updateEndTimestamp } = useLocalStorage();
  const current = Math.floor((endTimestamp - Date.now()) / 1000);
  const timeId = useRef<NodeJS.Timer | null>(null);
  const seconds = useRef(current < 1 ? 0 : current);
  const endTime = useRef(endTimestamp);

  const [leftSeconds, setLeftSeconds] = useState(seconds.current);
  const [isTicking, setIsTicking] = useState(true);

  const clear = () => {
    if (timeId.current === null) return;

    clearInterval(timeId.current);
    timeId.current = null;
  };

  const tick = useCallback(() => {
    if (seconds.current > 0) {
      const leftSeconds = Math.floor((endTime.current - Date.now()) / 1000);

      setLeftSeconds(leftSeconds > 0 ? leftSeconds : 0);
    }

    if (leftSeconds <= 1) {
      setIsTicking(false);
      clear();
      onComplete?.();
    }
  }, [leftSeconds, endTimestamp]);

  useEffect(() => {
    if (isTicking) {
      timeId.current = setInterval(tick, 1000);
    }

    return clear;
  }, [tick, isTicking]);

  const start = useCallback(() => {
    setIsTicking(true);
    onStart?.();
  }, []);

  const stop = useCallback(() => {
    seconds.current = leftSeconds;
    setIsTicking(false);
    onStop?.();
  }, [leftSeconds]);

  // const reset = useCallback((newSeconds?: number) => {
  //   if (newSeconds) {
  //     seconds.current = newSeconds;
  //   }
  //
  //   setIsTicking(false);
  //   setLeftSeconds(seconds.current);
  // }, []);

  const { mutate: submitNewEndTimestamp, isLoading } = useMutation(() => {
    return updateEndTimestamp(seconds.current).then(() => getCurrentAction());
  });

  const restart = useCallback(async () => {
    if (!isTicking) {
      const result = await submitNewEndTimestamp();
      endTime.current = result!.endTimestamp;
      setIsTicking(true);

      // TEST를 위한 코드
      console.log(`종료 예상 시간 : ${new Date(Date.now() + leftSeconds * 1000).toLocaleString()}`);
      console.log(`종료 시간 : ${new Date(endTime.current).toLocaleString()}`);
    }
  }, [isTicking, leftSeconds]);

  return {
    start,
    stop,
    restart,
    leftSeconds,
    isTicking,
  };
};

export default UseTimer;
