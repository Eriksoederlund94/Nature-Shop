import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import StoreCard from '../StoreCard';

const mockProductItem = {
  id: '0d924ac5-8888-4917-839f-66425278bcb3',
  imageUrl: 'apple-img',
  produceName: 'apples',
  weight: '1kg',
  price: 5.46,
  inStock: 10,
};

const MockStoreCard = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <StoreCard {...mockProductItem} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('StoreCard', () => {
  it('Renders without crashing', () => {
    render(<MockStoreCard />);
  });

  it('Renders a product card', () => {
    render(<MockStoreCard />);

    const productCardElement = screen.getByTestId('product-card');

    expect(productCardElement).toBeInTheDocument();
  });
});
