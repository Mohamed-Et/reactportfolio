import React from 'react';
import styled from 'styled-components';
function SubTitle({ text, Icon }) {
  return (
    <SubStyled>
      <span>
        <Icon />
      </span>
      <p>{text} :</p>
    </SubStyled>
  );
}

const SubStyled = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2.5rem;
  span {
    svg {
      color: var(--gold-light);
      font-size: 2.5rem;
    }
  }
  p {
    color: var(--white-color);
    font-size: 2.25rem;
    text-transform: capitalize;
    padding-left: 1rem;
  }
`;

export default SubTitle;
