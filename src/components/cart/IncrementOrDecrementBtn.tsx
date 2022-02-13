import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { getLocalCart } from '../../utils/helpers';
import { CartItem } from '../../interfaces/cartData.interface';
import { ProductItem } from '../../interfaces/productsData.interface';
import styled from 'styled-components';

interface Props {
  id: string;
  amount: number;
  inStock: number;
  option: string;
}

function IncrementOrDecrementBtn({ id, amount, inStock, option }: Props) {
  const { dispatch } = useContext(AppContext);

  let cartlocalState = getLocalCart();
  let productLocalState = JSON.parse(localStorage.getItem('products')!);

  const buttonHandler = () => {
    if (option === 'increase' && inStock === 0) {
      return;
    }

    if (option === 'decrease' && amount <= 1) {
      const newCart = cartlocalState.filter((item: CartItem) => item.id !== id);

      localStorage.setItem('cart', JSON.stringify(newCart));

      dispatch({
        type: 'SET_CART_AMOUNT',
        payload: newCart,
      });

      productLocalState.map((item: ProductItem) => {
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
      if (item.id === id) {
        if (option === 'increase') {
          return {
            ...item,
            amount: item.amount++,
            inStock: item.inStock--,
          };
        }
        if (option === 'decrease') {
          console.log(option);

          return {
            ...item,
            amount: item.amount--,
            inStock: item.inStock++,
          };
        }
      }
      return item;
    });

    productLocalState.map((item: ProductItem) => {
      if (item.id === id) {
        if (option === 'increase') {
          return {
            ...item,
            inStock: item.inStock--,
          };
        }
        if (option === 'decrease') {
          return {
            ...item,
            inStock: item.inStock++,
          };
        }
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

  return (
    <IncrementOrDecrementBtnWrapper onClick={buttonHandler}>
      {option === 'increase' ? '+' : '-'}
    </IncrementOrDecrementBtnWrapper>
  );
}

const IncrementOrDecrementBtnWrapper = styled.button``;

export default IncrementOrDecrementBtn;
