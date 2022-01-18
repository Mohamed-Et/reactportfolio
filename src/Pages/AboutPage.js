import React from 'react';
import { MainLayout } from '../Styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
const AboutStyled = styled.div``;

function AboutPagejs() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About'} subtitle={'About'} />
        <ImageSection />
        <Title title={'Services'} subtitle={'Services'} />
        <ServicesSection />
        <Title title={'Reviews'} subtitle={'Reviews'} />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

export default AboutPagejs;
