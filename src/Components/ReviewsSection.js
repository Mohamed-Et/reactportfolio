import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layouts';
import Review from './Review';
function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Review
        text={
          'I STRONGLY recommend Mohamed to EVERYONE interested in running a successful online business!'
        }
        name={'Emmanuel R.'}
      />
      <Review
        text={
          'Mohamed saved my business. I will recommend you to my colleagues'
        }
        name={'Phillis T.'}
      />
      <Review
        text={
          "Great job, I will definitely be consulting Mohamed's services again!"
        }
        name={'Paige S.'}
      />
      <Review
        text={
          'Keep up the excellent work. I could probably invest more in your business. Mohamed is the real deal!'
        }
        name={'Nicol I.'}
      />
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-space-between;
  flex-wrap: wrap;
  padding-top: 4rem;
`;

export default ReviewsSection;
