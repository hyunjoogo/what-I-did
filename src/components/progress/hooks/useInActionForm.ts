import { useCurrentActionInfo } from '../../../Contexts/ActionProgressProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const UseInActionForm = () => {
  const { setActionPlans } = useLocalStorage();
  const { whatIWill } = useCurrentActionInfo();

  const questionTextareaProps = {
    memo: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: false,
    }),
  } as const;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() =>
    setActionPlans(questionTextareaProps.memo.value),
  );

  return { whatIWill, questionTextareaProps, submitForm, isSubmitLoading };
};

export default UseInActionForm;
