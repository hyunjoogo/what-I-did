import useSelect from '../../../hooks/common/useSelect';
import { ActionTimeOptions } from '../../../types/action';
import useQuestionTextarea from '../../../hooks/common/useQuestionTextarea';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import useMutation from '../../../hooks/useMutation';

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

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() =>
    setCurrentAction({
      // dateset에서 빼오는 거라서 string으로 넘어오기 때문에 숫자로 형변환시켜야함
      duringTime: Number(actionDuringTimeSelect.state!),
      whatIWill: questionTextareaProps.whatIWill.value,
    }),
  );

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
    isSubmitLoading,
    isDisabled,
  };
};

export default useCreateActionForm;
