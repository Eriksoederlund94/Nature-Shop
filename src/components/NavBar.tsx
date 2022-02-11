import styled from 'styled-components';
import logo from '../images/planet-earth-logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FiShoppingCart } from 'react-icons/fi';
import { BiStore } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';

function NavBar() {
  const { state, dispatch } = useContext(AppContext);
  const test = state.cart;
  const { pathname } = useLocation();
  let navigate = useNavigate();
  const isLoggedIn = state.isLoggedIn;

  const totalAmount = test.reduce((total: number, item: any) => {
    return total + item.amount;
  }, 0);

  const logoutHandler = () => {
    dispatch({ type: 'SET_LOGGED_IN' });
    navigate('/');
  };

  return (
    <NavBarWrapper pathname={pathname}>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
        <h1>The Nature Shop</h1>
      </div>
      {isLoggedIn ? (
        <div className='button-container'>
          {pathname === '/store' ? (
            <button className='cart-btn' onClick={() => navigate('/cart')}>
              <FiShoppingCart /> <p>{totalAmount >= 1 ? totalAmount : null}</p>
            </button>
          ) : null}
          {pathname === '/cart' ? (
            <button className='store-btn' onClick={() => navigate('/store')}>
              <BiStore />
            </button>
          ) : null}
          <div className='user-container'>
            <h1>
              <FiUser />
            </h1>
            <h6>:{state.currentUser}</h6>
          </div>
          <button className='logout' onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : null}
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav<{ pathname: string }>`
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

    @media screen and (max-width: 440px) {
      h1 {
        font-size: 1rem;
      }
    }
    .logo {
      padding-right: 1rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-right: 2rem;
    width: 300px;

    .cart-btn,
    .store-btn {
      all: unset;
      color: #000;
      margin-right: 10px;
      display: flex;
      cursor: pointer;

      p {
        font-size: 1rem;
      }

      &:hover {
        color: #9bcd6a;
      }
    }

    .user-container {
      display: flex;
      justify-content: flex-end;
      color: #000;

      h6 {
        margin-top: 0.5rem;
        text-align: center;
      }
    }

    .logout {
      background-color: #9bcd6a;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;
      color: #eee;
      font-size: 18px;
      height: 50px;
      text-align: center;
      width: 6rem;
      cursor: pointer;

      &:hover {
        background-color: #85b654;
      }
    }
  }

  background: #fff;
  ${(props) => {
    if (props.pathname === '/')
      return `
            background-color: #093545;
            justify-content: center;
        `;
  }}
`;

export default NavBar;
