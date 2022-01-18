import React from 'react';
import Particle from '../Components/Particle';
import styled from 'styled-components';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { SiCodingame, SiGithub, SiLinkedin } from 'react-icons/si';
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    .heading {
      color: var(--white-color);
      letter-spacing: 2px;
      span {
        color: var(--primary-color);
      }
    }
    .text {
      color: var(--white-color);
      text-align: center;
      font-size: 1rem;
      font-weight: 200;
      span {
        font-weight: 300;
      }
    }
    .icons-container {
      margin-top: 1rem;
      display: flex;
      a {
        color: var(--white-color);
        opacity: 0.7;
        padding: 0.5rem;
        border: 2px solid var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        /* &:not(:last-child) {
          margin-right: 0.5rem;
        } */
        transition: all 0.2s ease-in;
        margin: 0 0.45rem;
        &:hover {
          color: var(--gold-light);
          border: 2px solid var(--gold-light);
          opacity: 0.9;
          transform: scale(1.1);
        }
      }
    }
  }
`;

function HomePage() {
  return (
    <HomePageStyled>
      {/* <Particle /> */}
      <div className='text-container'>
        <h1 className='heading'>
          Hello! I'm a <span>FullStack Developer</span>
        </h1>
        <p className='text'>
          Welcome to my portfolio. Here you I will showcase my{' '}
          <span>education</span> , <span>experience</span> ,{' '}
          <span>personal projects</span> and MORE.
        </p>

        <div className='icons-container'>
          <a
            href='https://www.linkedin.com/in/mohamed-el-ouazani-tuhami/'
            target='_blank'
            rel='noreferrer'
          >
            <SiLinkedin />
          </a>
          <a
            href='https://github.com/Mohamed-Et'
            target='_blank'
            rel='noreferrer'
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
