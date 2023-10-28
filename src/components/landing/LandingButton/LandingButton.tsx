import Button from '../../common/Button/Button';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../../constants/routes';

const LandingButton = () => {
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate(`${ROUTES_PATH.create}`);
  };

  return (
    <ButtonContainer>
      <Button variant="primary" onClick={handleClickStartButton} $block={false} size="small">
        행동 만들기
      </Button>
    </ButtonContainer>
  );
};

export default LandingButton;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
