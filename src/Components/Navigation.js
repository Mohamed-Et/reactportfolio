import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../img/PP2.jpg';

const NavigationStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-right: 1px solid var(--border-color);
  overflow: hidden;
  .img-position {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 55%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  ul {
    width: 100%;
    text-align: center;
    /* NOT WORKING */
    .active {
      background-color: var(--primary-color);
      font-weight: 700;
      color: var(--gold-light);
    }
    li {
      width: 100%;
      display: block;
      a {
        color: var(--font-light-color);
        width: 100%;
        display: block;
        position: relative;
        margin: 0.5rem 0;
        padding: 0.3rem 0;
        transition: transform 0.2s ease-in;
        z-index: 10;
        &::before {
          content: '';
          width: 0;
          height: 100%;
          background-color: var(--primary-color);
          opacity: 0.5;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: all 0.3s cubic-bezier(0, 0.51, 0.92, 1.06);
          z-index: -1;
        }
        &:hover::before {
          width: 100%;
          height: 100%;
        }
        &:hover {
          cursor: pointer;
          color: #d9b44e;
          transform: scale(1.1);
        }
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    text-align: center;
    p {
      color: var(--font-light-color);
      font-size: 1.1rem;
      padding: 0.5rem 0;
      font-family: 'Lobster Two', cursive;
      letter-spacing: 0.1rem;
      color: #8c6d16;
    }
  }
`;

function Navigation() {
  return (
    <NavigationStyled>
      <div className='img-position'>
        <img src={pic} alt='profile' />
      </div>
      <ul>
        <li>
          <NavLink to='/' activeClassName='active' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='about' activeClassName='active' exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/resume' activeClassName='active' exact>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolios' activeClassName='active' exact>
            Portfolios
          </NavLink>
        </li>
        <li>
          <NavLink to='/blogs' activeClassName='active' exact>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeClassName='active' exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer>
        <p>Mohamed El Ouazani Tuhami</p>
      </footer>
    </NavigationStyled>
  );
}

export default Navigation;
