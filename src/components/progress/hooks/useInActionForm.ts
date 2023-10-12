import { useCurrentActionInfo } from '../../../Contexts/ActionProgressProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const UseInActionForm = () => {
  const { setCurrentAction } = useLocalStorage();
  const { whatIWill } = useCurrentActionInfo();

  const questionTextareaProps = {
    memo: useQuestionTextarea({
      minLength: 2,
      maxLength: 30,
      required: false,
    }),
  } as const;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() =>
    // TODO 다시 만들어야 함
    setCurrentAction({
      duringTime: 1234,
      whatIWill: questionTextareaProps.memo.value,
    }),
  );

  return { whatIWill, questionTextareaProps, submitForm, isSubmitLoading };
};

export default UseInActionForm;
