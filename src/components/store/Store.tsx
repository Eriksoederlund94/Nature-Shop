import { useContext, useState } from 'react';
import StoreCard from './StoreCard';
import { AppContext } from '../../context/AppContext';
import styled from 'styled-components';

function Store() {
  const [query, setQuery] = useState('');
  const { state } = useContext(AppContext);
  const productState = state.initialProducts && state?.initialProducts;

  const inputHandler = (query: string, items: any) => {
    if (!query) {
      return productState;
    }

    return items.filter((item: any) => item.produceName.includes(query.toLowerCase()));
  };

  const filteredProducts = inputHandler(query, productState);

  return (
    <>
      <input className='input' onChange={(e) => setQuery(e.target.value)} type='text' placeholder='Search produce' />
      {filteredProducts.length === 0 ? <h1>Sorry, no produce match your search.</h1> : null}
      <StoreWrapper>
        {filteredProducts.map((products: any) => (
          <StoreCard key={products.id} {...products} />
        ))}
      </StoreWrapper>
    </>
  );
}

const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Store;
