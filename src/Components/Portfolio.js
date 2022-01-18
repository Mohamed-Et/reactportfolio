import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
function Portfolio({ title, img, desc }) {
  return (
    <PortfolioStyled>
      <div className='img-container'>
        <img src={img} alt='' />
        <div className='icon-container'>
          <GitHubIcon />
        </div>
      </div>
      <div className='text-container'>
        <h3>{title}</h3>
        <p className='desc'>{desc}</p>
      </div>
    </PortfolioStyled>
  );
}

const PortfolioStyled = styled.div`
  border: 2px solid var(--border-color);
  border-radius: 5px;
  overflow: hidden;
  .img-container {
    height: 12rem;
    width: 100%;
    position: relative;
    border-bottom: 5px solid var(--gold-light);
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: #2e344e;
      transition: 0.25s all ease;
      opacity: 0.85;
    }
    &:hover::after {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .icon-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.25s all ease;
      z-index: 100;
      &:hover {
        opacity: 1;
        cursor: pointer;
        svg {
          transform: scale(1);
        }
      }
      svg {
        color: var(--gold-light);
        font-size: 3.5rem;
        transform: scale(0);
        transition: 0.25s all ease;
      }
    }
  }
  .text-container {
    padding: 1rem;
    background-color: var(--background-dark-grey);
    height: 100%;
    h3 {
      color: var(--white-color);
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 2.25rem;
      padding-bottom: 1rem;
    }
    .desc {
      color: var(--font-light-color);
      font-size: 1rem;
    }
  }
`;

export default Portfolio;
