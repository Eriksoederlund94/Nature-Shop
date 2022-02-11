import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import CartCard from './CartCard';
import { getLocalCart } from '../../utils/helpers';

function Cart() {
  const { state } = useContext(AppContext);
  const cartState = state.cart && state?.cart;
  let cartlocalState = getLocalCart();
  const user = state.currentUser;

  const totalPrice = cartlocalState.reduce((total: number, item: any) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <CartWrapper>
      {cartlocalState.length > 0 ? <h1>{user}s Cart</h1> : <h1>Your Cart is empty</h1>}
      {cartState.map((item: any) => (
        <CartCard key={item.id} {...item} />
      ))}
      {cartlocalState.length > 0 ? <h1>Total: ${totalPrice.toFixed(2)}</h1> : null}
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
  overflow-y: hidden;
  margin-top: 1rem;
`;

export default Cart;
