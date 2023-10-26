import React from 'react';
import Button from '../components/common/Button/Button';
import styled from 'styled-components';
import { ROUTES_PATH } from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import MemberProfile from '../components/landing/MemberProfile/MemberProfile';
import Header from '../components/common/Header/Header';

const Landing = () => {
  const navigate = useNavigate();

  const handleClickStartButton = () => {
    navigate(`${ROUTES_PATH.create}`);
  };

  return (
    <>
      <LandingHeader>
        <Header />
        <MemberProfile />
      </LandingHeader>
      <ButtonContainer>
        <Button variant="primary" onClick={handleClickStartButton} $block={false} size="small">
          행동 만들기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Landing;

const LandingHeader = styled.div`
  display: flex;
  align-items: center;

  padding-right: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
