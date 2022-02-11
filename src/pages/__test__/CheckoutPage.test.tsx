import { render, screen } from '@testing-library/react';
import CheckoutPage from '../CheckoutPage';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../context/AppContext';

const MockCheckoutPage = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('StorePage', () => {
  it('Renders without crashing', () => {
    render(<MockCheckoutPage />);
  });

  it('Renders a heading with the text your (Your Cart is empty") if the cart is empty', () => {
    render(<MockCheckoutPage />);

    const headingElement = screen.getByRole('heading', { name: 'Your Cart is empty' });

    expect(headingElement).toBeInTheDocument();
  });
});
