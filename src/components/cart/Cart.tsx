import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import CartCard from './CartCard';

function Cart() {
  const { state } = useContext(AppContext);
  const cartState = state.cart && state?.cart;

  return (
    <CartWrapper>
      {cartState.map((item: any) => (
        <CartCard key={item.id} {...item} />
      ))}
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  min-width: 70%;
  max-height: 85%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #1687d933;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export default Cart;
