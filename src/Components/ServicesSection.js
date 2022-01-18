import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { InnerLayout } from '../Styles/Layouts';
import devops from '../img/services/devops.png';
import prg from '../img/services/programming.png';
import ui from '../img/services/ui.png';

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesStyled>
        <Card
          title={'Front-End'}
          text={
            'I develope Modern scalable maintainable front-end applications with the latest trends'
          }
          icon={ui}
        />
        <Card
          title={'Back-End'}
          text={
            'With 10+ mastry of back-end technologies, I assure you if you could describe it then i could bring it to life optimized'
          }
          icon={prg}
          className='middle'
        />
        <Card
          title={'DevOps'}
          text={
            'DevOps is no different, your applications will be running smoothly on the web with minimum down time'
          }
          icon={devops}
        />
      </ServicesStyled>
    </InnerLayout>
  );
}

const ServicesStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;

export default ServicesSection;
