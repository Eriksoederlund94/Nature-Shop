import React from 'react';
import styled from 'styled-components';
import logo from '../images/planet-earth-logo.png';

function NavBar() {
  return (
    <NavBarWrapper>
      <img className='logo' src={logo} alt='logo' />
      <h1>The Nature Shop</h1>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav`
  min-height: 10vh;
  padding-top: 2rem;
  color: #9bcd6a;
  font-size: 2rem;
  background-color: #093545;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    padding-right: 1rem;
  }
`;

export default NavBar;
