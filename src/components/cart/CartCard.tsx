import { useContext } from 'react';
import { CartItem } from '../../interfaces/cartData.interface';
import { ProductItem } from '../../interfaces/productsData.interface';

import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { getLocalCart } from '../../utils/helpers';

function CartCard({ id, imageUrl, produceName, weight, price, inStock, amount }: CartItem) {
  const { state, dispatch } = useContext(AppContext);

  let productState = state && state.initialProducts;

  let cartlocalState = getLocalCart();

  const incrementBtnHandler = () => {
    if (inStock === 0) {
      return;
    }

    cartlocalState.map((item: CartItem) => {
      if (item.id == id) {
        return {
          ...item,
          amount: item.amount++,
          inStock: item.inStock--,
        };
      }
      return item;
    });

    productState.map((item: ProductItem) => {
      if (item.id == id) {
        return {
          ...item,
          inStock: item.inStock--,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cartlocalState));

    dispatch({
      type: 'SET_CART_AMOUNT',
      payload: cartlocalState,
    });

    dispatch({
      type: 'SET_INITIAL_PRODUCTS',
      payload: productState,
    });
  };

  const decrementBtnHandler = () => {
    if (amount === 1) {
      const newCart = cartlocalState.filter((item: any) => item.id !== id);

      localStorage.setItem('cart', JSON.stringify(newCart));

      dispatch({
        type: 'SET_CART_AMOUNT',
        payload: newCart,
      });

      return;
    }

    cartlocalState.map((item: CartItem) => {
      if (item.id == id) {
        return {
          ...item,
          amount: item.amount--,
          inStock: item.inStock++,
        };
      }
      return item;
    });

    productState.map((item: ProductItem) => {
      if (item.id == id) {
        return {
          ...item,
          inStock: item.inStock++,
        };
      }
      return item;
    });

    dispatch({
      type: 'SET_CART_AMOUNT',
      payload: cartlocalState,
    });
    localStorage.setItem('cart', JSON.stringify(cartlocalState));

    dispatch({
      type: 'SET_INITIAL_PRODUCTS',
      payload: productState,
    });
  };

  return (
    <CartItemWrapper>
      <div className='img-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='name-container'>
        <h1>{produceName}</h1>
        <p>{weight}</p>
        <div className='counter-container'>
          <button onClick={decrementBtnHandler}>-</button>
          <p>{amount}</p>
          <button onClick={incrementBtnHandler}>+</button>
        </div>
        <p>{price}</p>
        <p>{inStock}</p>
      </div>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .counter-container {
    display: flex;
  }

  img {
    width: 100px;
  }
`;

export default CartCard;
