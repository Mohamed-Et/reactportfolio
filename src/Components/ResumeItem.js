import React from 'react';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';
function ResumeItem({ year, title, subtitle, desc }) {
  return (
    <ItemStyled>
      <div className='left'>
        <span>
          <CircleIcon />
        </span>
        <p>{year}</p>
      </div>
      <div className='right'>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <p>{desc}</p>
      </div>
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  align-items: baseline;
  .left {
    width: 30%;
    p {
      color: var(--font-light-color);
      font-size: 1rem;
    }
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: -33px;
      svg {
        color: var(--white-color);
        font-size: 1.25rem;
      }
    }
  }
  .right {
    width: 70%;
    h3 {
      color: var(--primary-color);
      font-size: 2rem;
      text-transform: capitalize;
      font-weight: 500;
      padding-bottom: 0.5rem;
    }
    h5 {
      color: var(--white-color);
      padding-bottom: 0.5rem;
      font-weight: 500;
    }
    p {
      color: var(--font-light-color);
      line-height: 1.7rem;
    }
  }
`;

export default ResumeItem;
