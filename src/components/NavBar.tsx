import styled from 'styled-components';
import logo from '../images/planet-earth-logo.png';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import useWindowSize from '../hooks/useWindowSize';

function NavBar() {
  const { pathname } = useLocation();
  const windowSize = useWindowSize();

  return (
    <NavBarWrapper windowSize={windowSize.width} pathname={pathname}>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='header-text'>The Nature Shop</h1>
      </div>
      <Menu />
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav<{ pathname: string; windowSize: number }>`
  min-height: 10vh;
  color: #9bcd6a;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Aldrich', sans-serif;

  .logo-container {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      padding-right: 1rem;
    }

    @media screen and (max-width: 650px) {
      .header-text {
        margin-top: 1rem;
        font-size: 1.6rem;
      }
      img {
        width: 55px;
      }
    }
  }

  ${(props) => {
    if (props.windowSize <= 1000) return ` flex-direction: column;`;
  }}

  background: whitesmoke;
  ${(props) => {
    if (props.pathname === '/')
      return `
            background-color: #093545;
            justify-content: center;
        `;
  }}
`;

export default NavBar;
