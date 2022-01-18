import styled from 'styled-components';
import React from 'react';
import Navigation from './Navigation';

const SideBarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  /* means the element is positioned always in the same spot in the viewport */
  position: fixed;
`;

function SideBar() {
  return (
    <SideBarStyled>
      <Navigation />
    </SideBarStyled>
  );
}

export default SideBar;
