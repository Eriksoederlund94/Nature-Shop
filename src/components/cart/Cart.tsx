import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import CartCard from './CartCard';
import { getLocalCart } from '../../utils/helpers';

function Cart() {
  const { state } = useContext(AppContext);
  const cartState = state.cart && state?.cart;
  let cartlocalState = getLocalCart();

  const totalPrice = cartlocalState.reduce((total: number, item: any) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <CartWrapper>
      <h1>My Cart</h1>
      {cartState.map((item: any) => (
        <CartCard key={item.id} {...item} />
      ))}
      <h1>Total: {totalPrice}kr</h1>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  max-height: 90%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #1687d933;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 1rem;
`;

export default Cart;
