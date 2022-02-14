import { render, screen } from '@testing-library/react';
import CartCard from '../CartCard';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import CheckoutPage from '../../../pages/CheckoutPage';
import StorePage from '../../../pages/StorePage';

import userEvent from '@testing-library/user-event';

const mockCartItem = {
  id: '0d924ac5-8888-4917-839f-66425278bcb3',
  imageUrl: 'apple-img',
  produceName: 'apples',
  weight: '1kg',
  price: 5.46,
  inStock: 10,
  amount: 1,
};

const MockCartComponent = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CartCard {...mockCartItem} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

const MockCheckoutPage = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    </AppContextProvider>
  );
};

const MockStorePage = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <StorePage />
      </AppContextProvider>
    </BrowserRouter>
  );
};

describe('Cart', () => {
  it('Cart item buttons should render if the cart is not empty', () => {
    render(<MockStorePage />);

    const buttonElement = screen.getAllByRole('button');
    const firstButtonElement = buttonElement[0];

    userEvent.click(firstButtonElement);

    render(<MockCheckoutPage />);
    render(<MockCartComponent />);

    const cartProductElement = screen.getAllByRole('button', { name: 'X' })[0];

    expect(cartProductElement).toBeInTheDocument();
  });
});
