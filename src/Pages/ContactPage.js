import React from 'react';
import { InnerLayout, MainLayout } from '../Styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ButtonPrimary from '../Components/ButtonPrimary';
import ContactItem from '../Components/ContactItem';
import ButtonPrimarySolid from '../Components/ButtonPrimarySolid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';
function ContactPage() {
  return (
    <MainLayout>
      <Title title={'Contact'} subtitle={'Contact'} />
      <InnerLayout>
        <ContactStyled>
          <div className='left-content'>
            <form action='' className='form'>
              <div className='container'>
                <label htmlFor='' className='label'>
                  Name :
                </label>
                <input type='text' className='input' />
              </div>
              <div className='container'>
                <label htmlFor='' className='label'>
                  Email Address :
                </label>
                <input type='text' className='input' />
              </div>
              <div className='container'>
                <label htmlFor='' className='label'>
                  Company :
                </label>
                <input type='text' className='input' />
              </div>
              <div className='container'>
                <label htmlFor='' className='label'>
                  Subject :
                </label>
                <input type='text' className='input' />
              </div>
              <div className='container'>
                <label htmlFor='' className='label'>
                  Type your message :
                </label>
                <textarea className='input textarea'></textarea>
              </div>
              <div className='btn-container'>
                {/* CHANGE THIS TO SOLID BUTTON */}
                <ButtonPrimarySolid text={'Contact'} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem
              Icon={PhoneIcon}
              title={'Phone'}
              text1={'+212 6 62 75 33 95'}
              text2={'+212 6 61 65 85 23'}
            />
            <ContactItem
              Icon={EmailIcon}
              title={'Email'}
              text1={'Tuuhami@gmail.com'}
              text2={'mohamed.elouazanituhami@gmail.com'}
            />
            <ContactItem
              Icon={PushPinIcon}
              title={'Address'}
              text1={'Mohamed Daoued rue Khadrae'}
              text2={'Tetouan, Morocco'}
            />
          </div>
        </ContactStyled>
      </InnerLayout>
    </MainLayout>
  );
}

const ContactStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .left-content {
    .form {
      .container {
        padding: 0.5rem 0;
        .label {
          padding-bottom: 0.25rem;
          color: var(--white-color);
          display: inline-block;
          width: 100%;
        }
        .input {
          border: 2px solid var(--border-color);
          color: black;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 5px;
          padding: 0.5rem 0.25rem;
          font-size: 1rem;
          border-left: 5px solid var(--primary-color);
          width: 80%;
        }
        .textarea {
          resize: none;
          height: 6rem;
        }
      }
      .btn-container {
        padding-top: 1.5rem;
        a {
          font-size: 1.5rem;
        }
      }
    }
  }
  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export default ContactPage;
