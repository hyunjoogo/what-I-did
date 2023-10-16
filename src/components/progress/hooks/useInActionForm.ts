import { useCurrentActionInfo } from '../../../contexts/ActionProgressProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import { ROUTES_PATH } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';

const useInActionForm = () => {
  const { setActionPlans, deleteCurrentAction } = useLocalStorage();
  const { startTimestamp, endTimestamp } = useCurrentActionInfo();
  const navigate = useNavigate();

  const { whatIWill } = useCurrentActionInfo();

  const questionTextareaProps = {
    memo: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: false,
    }),
  } as const;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(
    () => {
      const endTime = endTimestamp >= Date.now() ? Date.now() : endTimestamp;
      return setActionPlans(questionTextareaProps.memo.value, endTime).then(() => deleteCurrentAction());
    },
    {
      onSuccess: () => {
        return navigate(`${ROUTES_PATH.retrospect}/${startTimestamp}`);
      },
    },
  );

  return { whatIWill, questionTextareaProps, submitForm, isSubmitLoading };
};

export default useInActionForm;
