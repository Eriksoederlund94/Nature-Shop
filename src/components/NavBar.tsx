import styled from 'styled-components';
import logo from '../images/planet-earth-logo.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function NavBar() {
  const { state } = useContext(AppContext);
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const isLoggedIn = state.isLoggedIn;

  return (
    <NavBarWrapper pathname={pathname}>
      <img className='logo' src={logo} alt='logo' />
      <h1>The Nature Shop</h1>
      {isLoggedIn ? (
        <>
          <button onClick={() => navigate('/cart')}>Cart</button>
          <button onClick={() => navigate('/store')}>Store</button>
          <button>Logout</button>
        </>
      ) : null}
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav<{ pathname: string }>`
  min-height: 10vh;
  padding-top: 2rem;
  color: #9bcd6a;
  font-size: 2rem;
  background-color: #093545;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Aldrich', sans-serif;

  @media screen and (max-width: 440px) {
    font-size: 1.4rem;
  }

  .logo {
    padding-right: 1rem;
  }
`;

export default NavBar;
