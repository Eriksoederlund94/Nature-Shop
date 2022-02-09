import { useContext } from 'react';
import { CartItem } from '../../interfaces/cartData.interface';
import { ProductItem } from '../../interfaces/productsData.interface';

import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { getLocalCart } from '../../utils/helpers';

function CartCard({ id, imageUrl, produceName, weight, price, inStock, amount }: CartItem) {
  const { dispatch } = useContext(AppContext);

  let cartlocalState = getLocalCart();
  let productLocalState = JSON.parse(localStorage.getItem('products')!);

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

    productLocalState.map((item: ProductItem) => {
      if (item.id == id) {
        return {
          ...item,
          inStock: item.inStock--,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cartlocalState));
    localStorage.setItem('products', JSON.stringify(productLocalState));

    dispatch({
      type: 'SET_CART_AMOUNT',
      payload: cartlocalState,
    });

    dispatch({
      type: 'SET_INITIAL_PRODUCTS',
      payload: productLocalState,
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

      productLocalState.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            inStock: item.inStock++,
          };
        }
        return item;
      });

      localStorage.setItem('products', JSON.stringify(productLocalState));

      dispatch({
        type: 'SET_INITIAL_PRODUCTS',
        payload: productLocalState,
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

    productLocalState.map((item: ProductItem) => {
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
    localStorage.setItem('products', JSON.stringify(productLocalState));

    dispatch({
      type: 'SET_INITIAL_PRODUCTS',
      payload: productLocalState,
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
        <p>{inStock} in stock</p>
        <div className='counter-container'>
          <button className='decrement' onClick={decrementBtnHandler}>
            -
          </button>
          <p>{amount}</p>
          <button className='increment' onClick={incrementBtnHandler}>
            +
          </button>
        </div>
      </div>
      <div className='price-container'>
        <p>{price}kr</p>
      </div>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  padding: 2rem;

  .counter-container {
    display: flex;
  }

  .name-container {
    width: 180px;
  }

  .counter-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      all: unset;
      border: solid 2px #ccc;
      padding: 0.5rem 0.8rem;
      border-radius: 10px;
      cursor: pointer;
    }

    .decrement:hover {
      color: red;
    }

    .increment:hover {
      color: green;
    }
  }

  img {
    width: 100px;
  }
`;

export default CartCard;
