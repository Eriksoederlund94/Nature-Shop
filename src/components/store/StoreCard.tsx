import { useContext } from 'react';
import styled from 'styled-components';
import { ProductItems } from '../../interfaces/productsData.interface';
import { AppContext } from '../../context/AppContext';

function StoreCard({ id, imageUrl, produceName, weight, price, inStock }: ProductItems) {
  const { state, dispatch } = useContext(AppContext);

  const addToCartHandler = () => {
    let productId = id;
    let productArray = state.initialProducts;

    const addProduct = productArray.find((item) => item.id === productId);

    dispatch({
      type: 'SET_CART',
      payload: addProduct,
    });
  };

  return (
    <StoreCardWrapper>
      <img src={imageUrl} alt='' />
      <h2>{produceName.toUpperCase()}</h2>
      <p>{price}kr</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </StoreCardWrapper>
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
  }
`;

export default StoreCard;
