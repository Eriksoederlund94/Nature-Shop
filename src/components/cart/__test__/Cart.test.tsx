import { render, screen } from '@testing-library/react';
import CartCard from '../CartCard';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';

const mockCart: any = {
  id: '1',
  imageUrl: 'apples',
  produceName: 'apples',
  weight: '1kg',
  price: 200,
  inStock: 10,
};

const MockCartComponent = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CartCard {...mockCart} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Cart', () => {
  it('Renders product', () => {
    render(<MockCartComponent />);

    const headingElement = screen.getByRole('heading', { name: 'apples' });

    expect(headingElement).toBeInTheDocument();
  });

  it('Should show the total sum of the purchase', () => {
    render(<MockCartComponent />);

    const headingElement = screen.getByRole('heading', { name: 'apples' });

    expect(headingElement).toBeInTheDocument();
  });
});
