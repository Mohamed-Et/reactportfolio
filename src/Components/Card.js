import React from 'react';
import styled from 'styled-components';
function Card({ title, text, icon }) {
  return (
    <CardStyled>
      <div className='container'>
        <div className='img-container'>
          <img src={icon} alt='' />
        </div>
        <div className='text-container'>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: var(--background-dark-grey);
  padding: 1rem;
  margin: 0 1rem;
  border-top: 5px solid var(--border-color);
  transition: all 1s ease;
  width: 33.33%;
  &:hover {
    transform: scale(1.05);
    border-top: 5px solid var(--gold-light);
    h4 {
      background: rgb(217, 180, 78);
      background: linear-gradient(
        260deg,
        rgba(217, 180, 78, 0.9) 0%,
        rgba(94, 186, 235, 0.9) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .container {
    .img-container {
      height: 4rem;
      transition: all 1s ease;
      img {
        height: 100%;
        width: auto;
      }
    }
    .text-container {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.75rem;
      }
      p {
        font-size: 1rem;
        color: var(--font-light-color);
      }
    }
  }
`;

export default Card;
