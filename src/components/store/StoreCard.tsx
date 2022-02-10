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
    const addProduct = productArray.find((item: any) => item.id === productId)!;

    const cartItem: CartItem = { ...addProduct, amount: 1, inStock: inStock - 1 };

    localStorage.setItem('cart', JSON.stringify(cartArry));

    productArray.map((item: ProductItem) => {
      if (item.id == id) {
        return {
          ...item,
          inStock: item.inStock--,
        };
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(productArray));

    dispatch({
      type: 'SET_CART',
      payload: cartItem,
    });

    dispatch({
      type: 'SET_INITIAL_PRODUCTS',
      payload: productArray,
    });

    setToogle(false);
  };

  return (
    <>
      <StoreCardWrapper>
        <div className='img-container'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='info-container'>
          <h2>{produceName.toUpperCase()}</h2>
          <p>{inStock}kg in stock</p>
        </div>
        <div className='add-to-cart-container'>
          <h2>${price}</h2>
          <button onClick={addToCartHandler} disabled={isInCart()}>
            {isInCart() ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </StoreCardWrapper>
    </>
  );
}

const StoreCardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
  border: solid 2px #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .info-container {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .add-to-cart-container {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: grey;
    font-size: 18px;
  }

  button {
    border: none;
    outline: 0;
    padding: 10px;
    color: white;
    background-color: #9bcd6a;
    text-align: center;
    cursor: pointer;
    width: 50%;
    font-size: 14px;
    border-radius: 10px;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default StoreCard;
