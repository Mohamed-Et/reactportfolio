import React from 'react';
import styled from 'styled-components';

function Blog({ img, text, date }) {
  return (
    <BlogStyled>
      <div className='img-container'>
        <div className='overlay'></div>
        <img src={img} alt='' />
      </div>
      <div className='text-container'>
        <a href='#'>{text}</a>
        <p>- {date}</p>
      </div>
    </BlogStyled>
  );
}
const BlogStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-radius: 15px;
  overflow: hidden;
  .img-container {
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 1.5s ease;
      &:hover {
        transform: scale(1.3) rotate(15deg);
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #10121a;
      opacity: 0.35;
      transition: 1s all ease;
      &:hover {
        + img {
          transform: scale(1.1) rotate(15deg);
        }
      }
    }
  }
  .text-container {
    padding: 1rem 0.85rem;
    border-top: 5px solid var(--gold-light);
    a {
      text-decoration: none;
      color: var(--white-color);
      &:hover {
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
    p {
      text-align: end;
      color: var(--font-light-color);
      font-size: 0.8rem;
      padding-top: 0.95rem;
    }
  }
`;
export default Blog;
