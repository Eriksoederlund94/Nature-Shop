import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductItem } from '../../interfaces/productsData.interface';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../../interfaces/cartData.interface';

function StoreCard({ id, imageUrl, produceName, weight, price, inStock }: ProductItem) {
  const { state, dispatch } = useContext(AppContext);
  const [toogle, setToogle] = useState(true);

  const isInCart = () => {
    if (state && state.cart.find((item: CartItem) => item.id === id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCartHandler = () => {
    let productId = id;
    let productArray = state.initialProducts;
    let cartArry = state.cart;
    const addProduct = productArray.find((item) => item.id === productId)!;

    const cartItem: CartItem = { ...addProduct, amount: 1 };

    localStorage.setItem('cart', JSON.stringify(cartArry));

    dispatch({
      type: 'SET_CART',
      payload: cartItem,
    });

    setToogle(false);
  };

  return (
    <>
      <StoreCardWrapper>
        <img src={imageUrl} alt='product' />
        <h2>{produceName.toUpperCase()}</h2>
        <p>{price}kr</p>
        <p>{inStock}</p>
        <button onClick={addToCartHandler} disabled={isInCart()}>
          {isInCart() ? 'In Cart' : 'Add to Cart'}
        </button>
      </StoreCardWrapper>
    </>
  );
}

const StoreCardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  margin: auto;
  text-align: center;
  font-family: arial;
  border: solid 2px #000;
  border-radius: 8px;

  img {
    width: 100%;
    height: 250px;
  }

  p {
    color: grey;
    font-size: 22px;
  }

  button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default StoreCard;
