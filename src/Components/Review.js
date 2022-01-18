import React from 'react';
import styled from 'styled-components';
import { IoStar, IoStarHalf } from 'react-icons/io5';
function Review({ text, name }) {
  return (
    <ReviewStyled>
      <p>{text}</p>
      <div className='container'>
        <p>- {name}</p>
        <div className='star-container'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
      </div>
    </ReviewStyled>
  );
}
const ReviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-dark-grey);
  margin: 1rem;
  padding: 2.25rem 1rem 1rem 1rem;
  border-left: 5px solid var(--border-color);
  transition: all 1s ease;
  width: 45%;
  &:hover {
    transform: scale(1.05);
    border-left: 5px solid var(--gold-light);
  }
  p {
    color: var(--font-light-color);
    font-size: 1rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    p {
      color: var(--font-light-color);
      font-size: 0.75rem;
    }
    .star-container {
      text-align: end;
      svg {
        color: var(--gold-dark);
        padding: 0 3px;
      }
    }
  }
`;
export default Review;
