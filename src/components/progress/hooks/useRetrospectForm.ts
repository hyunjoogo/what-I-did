import { useActionPlanInfo } from '../../../Contexts/RetrospectProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const useRetrospectForm = () => {
  const { updateActionPlan } = useLocalStorage();
  const { id, whatIWill, memo } = useActionPlanInfo();

  const questionTextareaProps = {
    name: useQuestionTextarea({
      minLength: 2,
      maxLength: 20,
      required: true,
    }),
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
      name: questionTextareaProps.name.value,
      whatIDid: questionTextareaProps.whatIDid.value,
      whatILearned: questionTextareaProps.whatILearned.value,
      summary: questionTextareaProps.summary.value,
    }),
  );

  return {
    whatIWill,
    memo: memo ? memo : '기록한 메모가 없습니다.',
    questionTextareaProps,
    submitForm,
    isSubmitLoading,
  };
};

export default useRetrospectForm;
