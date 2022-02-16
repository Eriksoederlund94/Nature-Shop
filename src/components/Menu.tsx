import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FiShoppingCart } from 'react-icons/fi';
import { BiStore } from 'react-icons/bi';
import LogoutBtn from './LogoutBtn';
import { CartItem } from '../interfaces/cartData.interface';

function Menu() {
  const { state } = useContext(AppContext);
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const totalAmount = state.cart.reduce((total: number, item: CartItem) => {
    return total + item.amount;
  }, 0);

  return (
    <MenuWrapper>
      {state && state?.isLoggedIn ? (
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
          {pathname === '/store' ? <LogoutBtn /> : null}
          {pathname === '/cart' ? <LogoutBtn /> : null}
        </div>
      ) : null}
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;

    margin-right: 2rem;
    margin-left: 2rem;
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

      h1,
      h6 {
        margin-top: 0.5rem;
        text-align: center;
        font-size: 1.4rem;
      }
    }
  }
`;

export default Menu;
