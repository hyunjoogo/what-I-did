import { useActionPlanInfo } from '../../../contexts/RetrospectProvider';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import useInput from '../../../hooks/common/useInput';
import { ROUTES_PATH } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';

const useRetrospectForm = () => {
  const navigate = useNavigate();
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

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(
    () =>
      updateActionPlan(id, {
        name: nameInput.state,
        whatIDid: questionTextareaProps.whatIDid.value,
        whatILearned: questionTextareaProps.whatILearned.value,
        summary: questionTextareaProps.summary.value,
      }),
    {
      onSuccess: () => navigate(`${ROUTES_PATH.record}`),
    },
  );

  const isDisabled = () => {
    return (
      nameInput.state === '' ||
      questionTextareaProps.whatIDid.value === '' ||
      questionTextareaProps.whatILearned.value === '' ||
      questionTextareaProps.summary.value === ''
    );
  };

  return {
    whatIWill,
    memo: memo ? memo : '기록한 메모가 없습니다.',
    nameInput,
    questionTextareaProps,
    submitForm,
    isSubmitLoading,
    isDisabled,
  };
};

export default useRetrospectForm;
