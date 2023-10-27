import styled from 'styled-components';
import Button from '../../common/Button/Button';
import { useModal } from '../../../contexts/ModalProvider';
import Input from '../../common/Input/Input';
import useActorNameForm from '../hooks/useActorNameForm';

type Props = {
  actorName: string | null;
  setName: (arg: string) => void;
};
const ActorNameModal = ({ actorName, setName }: Props) => {
  const { closeModal } = useModal();
  const { actorNameInput, submitForm } = useActorNameForm(setName);

  return (
    <Layout>
      <Input label="사용자 이름" errorMessage="10자 이하로 적어주세요.">
        <Input.TextField
          defaultValue={actorName ?? ''}
          maxLength={10}
          error={actorNameInput.isInputError}
          onChange={actorNameInput.onChangeInput}
        />
      </Input>
      <ButtonWrapper>
        <Button variant="secondary" size="x-small" $block={false} onClick={closeModal}>
          닫기
        </Button>
        <Button variant="primary" size="x-small" $block={false} onClick={submitForm}>
          저장
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default ActorNameModal;

const Layout = styled.div`
  padding: 5px 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
  gap: 10px;
  display: flex;
  justify-content: end;
`;
