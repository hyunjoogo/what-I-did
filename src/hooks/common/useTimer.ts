import { useCallback, useEffect, useRef, useState } from 'react';
import localStorageManager from '../../utils/localStorageManager';

type Options = {
  onStart?: () => void;
  onStop?: () => void;
  onComplete?: () => void;
};

const UseTimer = (startTimestamp: number, endTimestamp: number, { onStart, onStop, onComplete }: Options = {}) => {
  // STEP에 따라서 시간을 계산하는 방법을 다르게 해야할듯
  // 행동중에는 end-start인데 (중지-다시시작 기능때문에)
  // 요약중에는 Date.now() - startTime.current 으로 해야함 (중지 기능이 없음)

  const timeId = useRef<NodeJS.Timer | null>(null);
  const startTime = useRef(Date.now());
  const seconds = useRef(10);
  const endTime = useRef(endTimestamp);

  const [leftSeconds, setLeftSeconds] = useState(seconds.current);

  const [isTicking, setIsTicking] = useState(false);

  const [timeStrings, setTimeStrings] = useState({
    end: new Date(endTimestamp).toLocaleString(),
    start: new Date(startTimestamp).toLocaleString(),
  });

  const clear = () => {
    if (timeId.current === null) return;

    clearInterval(timeId.current);
    timeId.current = null;
  };

  const tick = useCallback(() => {
    if (seconds.current > 0) {
      // const timeDifference = Math.floor((Date.now() - startTime.current) / 1000);
      // const leftSeconds = seconds.current - timeDifference;

      const td = Math.floor((endTime.current - Date.now()) / 1000);
      const leftSeconds = td;

      setLeftSeconds(leftSeconds > 0 ? leftSeconds : 0);
      setTimeStrings({
        end: new Date(endTime.current).toLocaleString(),
        start: new Date(startTimestamp).toLocaleString(),
      });
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
    // startTime.current = Date.now();
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

  const restart = useCallback(() => {
    if (!isTicking) {
      localStorageManager.setNewEndTimestampOfCurrentAction(seconds.current);
      const { endTimestamp } = localStorageManager.currentAction;
      endTime.current = endTimestamp;
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
