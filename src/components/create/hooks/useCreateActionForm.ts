import useSelect from '../../../hooks/common/useSelect';
import { ActionTimeOptions } from '../../../types/action';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const useCreateActionForm = () => {
  const { setCurrentAction } = useLocalStorage();
  const actionDuringTimeSelect = useSelect<ActionTimeOptions>();

  const questionTextareaProps = {
    whatIWill: useQuestionTextarea({
      minLength: 5,
      maxLength: 30,
      required: true,
    }),
  } as const;

  const submitForm = async () => {
    // dateset에서 빼오는 거라서 string으로 넘어오기 때문에 숫자로 형변환시켜야함
    setCurrentAction(Number(actionDuringTimeSelect.state!), questionTextareaProps.whatIWill.value);
  };

  const isDisabled = () => {
    if (actionDuringTimeSelect.state === null) return true;
    if (questionTextareaProps.whatIWill.errorMessage !== '') return true;
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
