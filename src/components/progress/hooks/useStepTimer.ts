import { Step } from '../../../types/action';
import { useCurrentActionInfo } from '../../../Contexts/ActionProgressProvider';
import UseTimer from '../../../hooks/common/useTimer';
import { RETROSPECT_MIN } from '../../../constants/action';

type Params = {
  step: Step;
  onStart?: () => void;
  onStop?: () => void;
  onComplete?: () => void;
  onRestart?: () => void;
};

const UseStepTimer = ({ step, onStop, onStart, onComplete }: Params) => {
  const endTimestamp = check(step);
  const { stop, leftSeconds, isTicking, restart } = UseTimer(endTimestamp, { onStart, onStop, onComplete });

  function check(step: Step) {
    if (step === 'inAction') {
      const { endTimestamp } = useCurrentActionInfo();
      return endTimestamp;
    } else {
      return Date.now() + RETROSPECT_MIN * 60 * 1000;
    }
  }

  return {
    endTimestamp,
    stop,
    leftSeconds,
    isTicking,
    restart,
  };
};

export default UseStepTimer;
