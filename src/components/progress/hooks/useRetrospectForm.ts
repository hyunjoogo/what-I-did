import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import useInput from '../../../hooks/common/useInput';
import { ROUTES_PATH } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { useActionPlanInfo } from '../../../contexts/ActionPlanProvider';
import { useNotification } from '../../../contexts/NotificationProvider';
import { useEffect } from 'react';

const useRetrospectForm = () => {
  const navigate = useNavigate();
  const { send } = useNotification();
  const { updateActionPlan } = useLocalStorage();
  const { id: actionId, whatIWill, memo, isDone } = useActionPlanInfo();

  useEffect(() => {
    if (isDone) {
      send({ message: '이미 종료된 행동입니다. \n행동 만들기 페이지로 이동합니다.' });
      navigate(`${ROUTES_PATH.record}/${actionId}`);
    }
  }, []);

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
      updateActionPlan(actionId, {
        name: nameInput.state,
        whatIDid: questionTextareaProps.whatIDid.value,
        whatILearned: questionTextareaProps.whatILearned.value,
        summary: questionTextareaProps.summary.value,
        isDone: true,
      }),
    {
      onSuccess: () => navigate(`${ROUTES_PATH.record}/${actionId}`),
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
