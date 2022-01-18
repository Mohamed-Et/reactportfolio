import React from 'react';
import styled from 'styled-components';
import { RiContactsBookLine } from 'react-icons/ri';
function ButtonPrimarySolid({ text }) {
  return (
    <ButtonSolid>
      <span>
        <RiContactsBookLine />
      </span>{' '}
      {text}
    </ButtonSolid>
  );
}

const ButtonSolid = styled.a`
  position: relative;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.65rem 1.35rem;
  background-color: var(--primary-color);
  color: white;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--gold-dark);
    transition: all 0.5s ease;
  }
  &:hover::after {
    height: 100%;
  }
  &:hover {
    cursor: pointer;
    span {
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  span {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    transition: all 0.5s ease;

    svg {
      font-size: 2rem;
    }
  }
`;
export default ButtonPrimarySolid;
