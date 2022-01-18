import React from 'react';
import styled from 'styled-components';
function ProgressBar({ title, progress, width }) {
  return (
    <ProgressStyled>
      <h6>{title}</h6>
      <div className='container'>
        <p>{progress}</p>
        <div className='line-bg'>
          <span className='line-primary' style={{ width: width }}></span>
        </div>
      </div>
    </ProgressStyled>
  );
}

const ProgressStyled = styled.div`
  .container {
    display: flex;
    align-items: center;
    p {
      color: var(--font-light-color);
      font-size: 1.15rem;
      padding-right: 1rem;
    }
    .line-bg {
      width: 100%;
      background-color: var(--border-color);
      height: 0.4rem;
      border-radius: 5px;
      position: relative;
      .line-primary {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0.4rem;
        border-radius: 5px;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default ProgressBar;
