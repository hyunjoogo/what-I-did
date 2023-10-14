import { useCurrentActionInfo } from '../../../Contexts/ActionProgressProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const UseInActionForm = () => {
  const { setActionPlans, deleteCurrentAction } = useLocalStorage();
  const { endTimestamp } = useCurrentActionInfo();

  const { whatIWill } = useCurrentActionInfo();

  const questionTextareaProps = {
    memo: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: false,
    }),
  } as const;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() => {
    const endTime = endTimestamp >= Date.now() ? Date.now() : endTimestamp;
    return setActionPlans(questionTextareaProps.memo.value, endTime).then(() => deleteCurrentAction());
  });

  return { whatIWill, questionTextareaProps, submitForm, isSubmitLoading };
};

export default UseInActionForm;
