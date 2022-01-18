import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch as Switching } from 'react-router';
import Switch from '@mui/material/Switch';
import Particle from '../src/Components/Particle';
import SideBar from './Components/SideBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
const MainContentStyled = styled.div`
  margin-left: 16.3rem;
  min-height: 100vh;
  position: relative;
  background-color: var(--background-dark-color);

  .lines {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      height: 100%;
      width: 0.5px;
      background-color: var(--border-color);
    }
  }
`;

const ThemeStyled = styled.div`
  height: 3rem;
  background-color: var(--background-light-color-2);
  display: flex;
  align-items: center;
  position: fixed;
  right: 5px;
  top: 15%;
  z-index: 100;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  .left {
    display: flex;
    align-items: center;
    svg {
      color: var(--white-color);
    }
  }
`;

function App() {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? 'App dark-theme' : 'App light-theme'}>
      <SideBar />
      <ThemeStyled>
        <div className='left'>
          <Brightness4Icon />
        </div>
        <div className='right'>
          <Switch
            value=''
            //checked={}
            onChange={changeTheme}
            inputProps={{ 'aria-label': '' }}
            size='medium'
          />
        </div>
      </ThemeStyled>
      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        <Particle />
        <Switching>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/resume'>
            <ResumePage />
          </Route>
          <Route exact path='/portfolios'>
            <PortfoliosPage />
          </Route>
          <Route exact path='/blogs'>
            <BlogsPage />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
        </Switching>
        {/* -------------------- */}
      </MainContentStyled>
    </div>
  );
}

export default App;
