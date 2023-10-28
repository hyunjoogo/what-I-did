import React from 'react';
import styled from 'styled-components';
import Typography from '../../common/Typography/Typography';
import color from '../../../styles/color';
import LandingButton from '../LandingButton/LandingButton';
import heroImagePng from '../../../assets/landing_img/whatidid_intro.png';
import heroImageWebp from '../../../assets/landing_img/whatidid_intro.webp';
import Image from '../../common/Image/Image';

const LandingMainSection = () => {
  return (
    <main>
      <LandingHeader>
        <LandingContents>
          <Typography variant="h2">
            <Emphasis>하루</Emphasis>스터디만의
            <br />
            학습 사이클을 통해
            <br />
            효율적으로 학습해보세요.
          </Typography>
          <LandingButton />
        </LandingContents>
        <HeroImage>
          <Image originUrl={heroImagePng} webpUrl={heroImageWebp} alt="행동, 요약" />
        </HeroImage>
      </LandingHeader>
    </main>
  );
};

export default LandingMainSection;

const LandingHeader = styled.div`
  height: calc(100vh - 240px);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LandingContents = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: center;

  h2 {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    justify-self: center;
    text-align: center;

    h2 {
      font-size: 28px;
    }
  }
`;

const HeroImage = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    display: none;
    width: 0;
  }
`;

const Emphasis = styled.span`
  color: ${color.blue[500]};
`;
