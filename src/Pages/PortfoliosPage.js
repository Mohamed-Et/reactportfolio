import React from 'react';
import { MainLayout, InnerLayout } from '../Styles/Layouts';
import Title from '../Components/Title';
import styled from 'styled-components';
import Portfolio from '../Components/Portfolio';
import bootstrap from '../img/portfolio/1.PNG';
import react from '../img/portfolio/2.PNG';
import illustration1 from '../img/portfolio/3.png';
import illustration2 from '../img/portfolio/4.png';
import illustration3 from '../img/portfolio/5.png';
import illustration4 from '../img/portfolio/6.png';
function PortfoliosPage() {
  return (
    <MainLayout>
      <PortfolioStyled>
        <Title title='Portfolios' subtitle='Portfolios' />
        <InnerLayout>
          <h4 className='desc-text'>
            Here are my lastest works covering{' '}
            <span>frontend backend & DevOps</span>. You can consult my code on{' '}
            <span>GitHub</span> via the link and share with me your feedback !
          </h4>
          <div className='grid-container'>
            <Portfolio
              title={'Bootstrap project'}
              img={bootstrap}
              desc={
                'Portfolio template which I developed to practice Bootstrap5 and SASS'
              }
            />
            <Portfolio
              title={'React Landing page'}
              img={react}
              desc={
                'Portfolio template designed in Figma and developed by React, SASS & Bootstrap'
              }
            />
            <Portfolio
              title={'E-commerce website'}
              img={illustration1}
              desc={
                'Full functionality of E-commerce website built with React Node & Firebase'
              }
            />
            <Portfolio
              title={'Linkedin Clone'}
              img={illustration2}
              desc={'As it name entails, I cloned Linkedin using MERN STACK'}
            />
            <Portfolio
              title={'Netflix Clone'}
              img={illustration3}
              desc={'Netflix clone using MERN'}
            />
            <Portfolio
              title={'RH-helper'}
              img={illustration4}
              desc={
                'Website dedicated to HR companies to manage its ressources'
              }
            />
          </div>
        </InnerLayout>
      </PortfolioStyled>
    </MainLayout>
  );
}

const PortfolioStyled = styled.section`
  position: relative;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export default PortfoliosPage;
