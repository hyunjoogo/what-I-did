import { useActionPlanInfo } from '../../../contexts/RetrospectProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import useInput from '../../../hooks/common/useInput';

const useRetrospectForm = () => {
  const { updateActionPlan } = useLocalStorage();
  const { id, whatIWill, memo } = useActionPlanInfo();
  const nameInput = useInput(true);
  const questionTextareaProps = {
    whatIDid: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: true,
    }),
    whatILearned: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: true,
    }),
    summary: useQuestionTextarea({
      minLength: 2,
      maxLength: 50,
      required: true,
    }),
  } as const;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() =>
    updateActionPlan(id, {
      name: nameInput.state,
      whatIDid: questionTextareaProps.whatIDid.value,
      whatILearned: questionTextareaProps.whatILearned.value,
      summary: questionTextareaProps.summary.value,
    }),
  );

  return {
    whatIWill,
    memo: memo ? memo : '기록한 메모가 없습니다.',
    nameInput,
    questionTextareaProps,
    submitForm,
    isSubmitLoading,
  };
};

export default useRetrospectForm;
