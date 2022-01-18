import React from 'react';
import styled from 'styled-components';
import { CgArrowLongRightR } from 'react-icons/cg';

const TitleStyled = styled.div`
  h1 {
    position: relative;
    font-size: 3rem;
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      left: 1%;
      bottom: 10%;
      width: 5rem;
      height: 2.5px;
      background-color: var(--primary-color);
    }

    span {
      font-size: 3.5rem;
      color: var(--secondary-color);
      opacity: 0.2;
      position: absolute;
      left: 1%;
      top: 20%;
    }
  }
`;

function Title({ title, subtitle }) {
  return (
    <TitleStyled>
      <h1>
        {title} <CgArrowLongRightR className='arrow-right' />{' '}
        <span>
          {subtitle}
          <CgArrowLongRightR className='arrow-right' />
        </span>
      </h1>
    </TitleStyled>
  );
}

export default Title;
