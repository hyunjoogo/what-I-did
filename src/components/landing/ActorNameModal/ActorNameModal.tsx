import styled from 'styled-components';
import Button from '../../common/Button/Button';
import { useModal } from '../../../contexts/ModalProvider';
import color from '../../../styles/color';
import Input from '../../common/Input/Input';
import useActorNameForm from '../hooks/useActorNameForm';

type Props = {
  actorName: string | null;
};
const ActorNameModal = ({ actorName }: Props) => {
  const { openConfirm, closeModal } = useModal();
  const { actorNameInput } = useActorNameForm();

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
      {/* TODO 저장 and 닫기 버튼 만들어야 함 */}
      {/* 저장 후 모달 닫는 함수 호출 */}
      <CloseButton variant="secondary" size="x-small" $block={false} onClick={closeModal}>
        닫기
      </CloseButton>
    </Layout>
  );
};

export default ActorNameModal;

const Layout = styled.div`
  padding: 5px 10px;
`;

const CloseButton = styled(Button)`
  width: fit-content;
  font-weight: 500;

  float: right;
  margin-top: 18px;
`;

const ParticipantSkeleton = styled.div`
  width: 60px;
  height: 30px;

  background-color: ${color.neutral[300]};
  border-radius: 10px;
`;
