import useInput from '../../../hooks/common/useInput';
import useMutation from '../../../hooks/useMutation';
import useLocalStorage from '../../../hooks/localStorage/useLocalStorage';
import {useModal} from "../../../contexts/ModalProvider";
import {useMemberInfo} from "../../../contexts/MemberInfoProvider";
import useActorName from "../../../hooks/common/useActorName";

const useActorNameForm = () => {
    const actorNameInput = useInput(true);
    const {setActorName} = useLocalStorage();
    const {closeModal} = useModal();
    const memberInfo = useMemberInfo();



    const {mutate: submitForm, isLoading: isSubmitLoading} = useMutation(() => setActorName(actorNameInput.state!), {
        onSuccess: () => {
            console.log(memberInfo)
            memberInfo?.updateActorName(actorNameInput.state!)
            console.log('heelo')
            closeModal()
        }
    });

    const isDisabled = () => {
        return actorNameInput.state === '';
    };
    return {actorNameInput, submitForm, isSubmitLoading, isDisabled};
};

export default useActorNameForm;
