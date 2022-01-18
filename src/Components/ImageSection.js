import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from '../Components/ButtonPrimary';
import profile from '../img/profile2-2.jpg';
import { InnerLayout } from '../Styles/Layouts';
function ImageSection() {
  return (
    <InnerLayout>
      <ImageSectionStyled>
        <div className='img-container'>
          <img src={profile} alt='' />
        </div>
        <div className='text-container'>
          <h2 className='heading'>
            Get to <span>know me</span>
          </h2>
          <p className='subheading'>
            I am a <span>passionate</span>, <span>creative</span> and{' '}
            <span>hard working</span> individual with high hopes and dreams. If
            working with you happen to match my path, I will not stop until both
            parties are <span>satisfied !</span>
          </p>
          <div className='info-container'>
            <div className='field'>
              <p className='info-title'>
                Full Name <span>:</span>
              </p>

              <p className='info-value'>El Ouazani Tuhami Mohamed</p>
            </div>
            <div className='field'>
              <p className='info-title'>
                Age <span>:</span>
              </p>
              <p className='info-value'>23</p>
            </div>
            <div className='field'>
              <p className='info-title'>
                Nationality <span>:</span>
              </p>
              <p className='info-value'>Moroccan</p>
            </div>
            <div className='field'>
              <p className='info-title'>
                Location <span>:</span>
              </p>
              <p className='info-value'>Tétouan, Morocco</p>
            </div>
            <div className='field'>
              <p className='info-title'>
                Availavility <span>:</span>
              </p>
              <p className='info-value'>Immediate</p>
            </div>
            <div className='field'>
              <p className='info-title'>
                Mobility <span>:</span>
              </p>
              <p className='info-value'>International </p>
            </div>
          </div>
          <div className='btn-container'>
            <ButtonPrimary text={'Contact'} />
          </div>
        </div>
      </ImageSectionStyled>
    </InnerLayout>
  );
}

const ImageSectionStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* Animation */
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(176, 140, 40, 0.2);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(176, 140, 40, 0.1);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(176, 140, 40, 0.2);
      transform: translatey(0px);
    }
  }
  .img-container {
    height: 20rem;
    width: 100%;
    position: relative;
    display: inline-block;
    transform: translatey(0px);
    animation: float 4s ease-in-out infinite;
    border-radius: 50%;
    overflow: hidden;
    &::after {
      content: '';
      background: rgb(255, 255, 255);
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0) 0%,
        rgba(38, 38, 38, 0.45) 100%
      );

      position: absolute;
      display: block;
      width: 100%;
      top: 0;
      bottom: 0;
    }
    img {
      top: 0;
      left: 0;
      height: 100%;
      width: auto;
    }
  }
  .text-container {
    margin-left: 3rem;
    .heading {
      color: var(--white-color);
      font-weight: 300;
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
      span {
        color: var(--primary-color);
        font-size: 2.5rem;
        /* font-family: 'Lobster Two', cursive; */
      }
    }
    .subheading {
      color: var(--font-light-color);
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.9rem;
      span {
        font-family: 'Lobster Two', cursive;
      }
    }
    .info-container {
      .field {
        .info-title {
          width: 10rem;
          color: var(--font-light-color);
          display: inline-block;
          font-size: 1.15rem;
          font-weight: 200;
          span {
            margin-left: 2px;
          }
        }
        .info-value {
          font-size: 1.15rem;
          font-weight: 200;
          color: var(--font-light-color);
          display: inline-block;
        }
      }
    }
    .btn-container {
      margin-top: 2.5rem;
    }
  }
`;

export default ImageSection;
