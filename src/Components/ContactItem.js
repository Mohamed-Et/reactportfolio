import React from 'react';
import styled from 'styled-components';
function ContactItem({ Icon, title, text1, text2 }) {
  return (
    <ContactItemStyled>
      <div className='icon-container'>
        <Icon />
      </div>
      <div className='text-container'>
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </ContactItemStyled>
  );
}
const ContactItemStyled = styled.div`
  background-color: var(--background-dark-grey);
  padding: 1.25rem 0.75rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  max-width: 100%;
  border-left: 5px solid var(--border-color);
  transition: 1s all ease;
  &:hover {
    transform: scale(1.1);
    border-left: 5px solid var(--gold-light);
    h3 {
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
  .icon-container {
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    border: 0.5px solid var(--white-color);
    border-radius: 5px;
    margin: 0 1rem;
    svg {
      color: var(--gold-dark);
      font-size: 2rem;
    }
  }
  .text-container {
    margin-left: 1rem;
    h3 {
      color: var(--white-color);
      font-size: 1.25rem;
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    p {
      color: var(--white-color);
      font-size: 0.85rem;
      font-weight: 300;
    }
  }
`;
export default ContactItem;
