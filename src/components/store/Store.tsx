import { useContext, useEffect } from 'react';
import StoreCard from './StoreCard';
import { AppContext } from '../../context/AppContext';
import styled from 'styled-components';

function Store() {
  const { state, dispatch } = useContext(AppContext);
  const productState = state.initialProducts && state?.initialProducts;

  /*   const getTotalItems = () => {
    productState.reduce((ack, items) => ack + items.price, 0);
  }; */

  return (
    <StoreWrapper>
      {productState.map((products: any) => (
        <StoreCard key={products.id} {...products} />
      ))}
    </StoreWrapper>
  );
}

const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export default Store;
