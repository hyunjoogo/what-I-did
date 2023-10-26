import useInput from '../../../hooks/common/useInput';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';

const useActorNameForm = () => {
  const actorNameInput = useInput(true);
  const { updateEndTimestamp } = useLocalStorage();

  // TODO 인풋내용 받아서 로컬에 저장하는 함수 생성 + 연결
  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() => updateEndTimestamp(123));

  const isDisabled = () => {
    return actorNameInput.state === '';
  };
  return { actorNameInput, submitForm, isSubmitLoading, isDisabled };
};

export default useActorNameForm;
