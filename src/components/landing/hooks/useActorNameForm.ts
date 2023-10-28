import useInput from '../../../hooks/common/useInput';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import { useModal } from '../../../contexts/ModalProvider';

const useActorNameForm = (handleNameChange: () => void) => {
  const actorNameInput = useInput(true);
  const { setActorName } = useLocalStorage();
  const { closeModal } = useModal();

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(() => setActorName(actorNameInput.state!), {
    onSuccess: () => {
      handleNameChange();
      closeModal();
    },
  });

  const isDisabled = () => {
    return actorNameInput.state === '';
  };
  return { actorNameInput, submitForm, isSubmitLoading, isDisabled };
};

export default useActorNameForm;
