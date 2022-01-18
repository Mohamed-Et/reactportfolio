import React from 'react';
import styled from 'styled-components';
import { RiContactsBookLine } from 'react-icons/ri';
const ButtonStyled = styled.a`
  position: relative;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.65rem 1.35rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  transition: all 1s ease;
  display: flex;
  align-items: center;
  width: max-content;
  &:hover {
    color: var(--gold-light);
    letter-spacing: 2px;
    padding-left: 3rem;
    border: 2px solid var(--gold-dark);
    span {
      display: block;
      transform: translateX(1rem);
    }
  }
  span {
    height: 1.25rem;
    display: none;
    position: absolute;
    left: 0.25rem;
    transition: all 0.35s ease;
  }
`;

function ButtonPrimary({ text }) {
  return (
    <ButtonStyled>
      <span>
        <RiContactsBookLine />
      </span>{' '}
      {text}
    </ButtonStyled>
  );
}

export default ButtonPrimary;
