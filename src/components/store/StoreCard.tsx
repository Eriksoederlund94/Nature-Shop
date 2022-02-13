import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductItem } from '../../interfaces/productsData.interface';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../../interfaces/cartData.interface';
import AddToCartBtn from './AddToCartBtn';

function StoreCard({ id, imageUrl, produceName, weight, price, inStock }: ProductItem) {
  const { state, dispatch } = useContext(AppContext);
  const [toogle, setToogle] = useState(true);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <StoreCardWrapper data-testid='product-card'>
        <div className='img-container'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='info-container'>
          <h2>{produceName.toUpperCase()}</h2>
          <p>{inStock}kg in stock</p>
        </div>
        <div className='add-to-cart-container'>
          <h3>${price}/kg</h3>
          <AddToCartBtn id={id} inStock={inStock} setToogle={setToogle} />
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
`;

export default StoreCard;
