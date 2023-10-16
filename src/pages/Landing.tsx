import React from 'react';
import Button from '../components/common/Button/Button';
import styled from 'styled-components';
import { ROUTES_PATH } from '../constants/routes';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  // TODO ActionPlans의 name이 null이면 모달을 띄어서 이름을 물어볼 수 있도록 한다.
  const isLogin = true;
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    if (isLogin) return navigate(`${ROUTES_PATH.create}`);

    // return openModal(<LoginModalContents />);
  };

  return (
    <ButtonContainer>
      <Button variant="primary" onClick={handleClickStartButton} $block={false} size="small">
        행동 만들기
      </Button>
    </ButtonContainer>
  );
};

export default Landing;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
