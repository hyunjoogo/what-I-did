import React from 'react';
import styled from 'styled-components';
import MemberProfile from '../components/landing/MemberProfile/MemberProfile';
import Header from '../components/common/Header/Header';
import LandingMainSection from '../components/landing/LandingMainSection/LandingMainSection';

const Landing = () => {
  return (
    <>
      <LandingHeader>
        <Header />
        <MemberProfile />
      </LandingHeader>
      <LandingContents>
        <LandingMainSection />
      </LandingContents>
    </>
  );
};

export default Landing;

const LandingHeader = styled.div`
  display: flex;
  align-items: center;

  padding-right: 40px;
`;

const LandingContents = styled.div`
  width: 90%;
  margin: 0 auto;
`;
