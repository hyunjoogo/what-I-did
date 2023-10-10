import useSelect from '../../../hooks/common/useSelect';
import { ActionTimeOptions } from '../../../types/action';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';

const useCreateActionForm = () => {
  const actionDuringTimeSelect = useSelect<ActionTimeOptions>();

  const questionTextareaProps = {
    actionPlan: useQuestionTextarea({
      minLength: 5,
      maxLength: 30,
      required: true,
    }),
  } as const;

  const submitForm = async () => {
    console.log({
      duringTime: actionDuringTimeSelect.state,
      actionPlan: questionTextareaProps.actionPlan.value,
    });
  };

  const isDisabled = () => {
    if (actionDuringTimeSelect.state === null) return true;
    if (questionTextareaProps.actionPlan.errorMessage !== '') return true;
    return false;
  };

  return {
    duringTime: actionDuringTimeSelect.state,
    changeDuringTime: actionDuringTimeSelect.onChangeSelectItem,
    questionTextareaProps,
    submitForm,
    isDisabled,
  };
};

export default useCreateActionForm;
