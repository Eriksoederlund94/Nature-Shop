import { render, screen } from '@testing-library/react';
import CartCard from '../CartCard';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import { getLocalCart } from '../../../utils/helpers';
import CheckoutPage from '../../../pages/CheckoutPage';
import StorePage from '../../../pages/StorePage';

import userEvent from '@testing-library/user-event';

let localStorageCart = getLocalCart();

const MockCartComponent = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <CartCard {...localStorageCart} />
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
  /*   it('Renders product', () => {
    render(<MockCartComponent />);

    const headingElement = screen.getByRole('heading', { name: 'APPLES' });

    expect(headingElement).toBeInTheDocument();
  }); */
  it('Should show the total sum of a purchase', () => {
    render(<MockStorePage />);

    const buttonElement = screen.getAllByRole('button');

    const firstButtonElement = buttonElement[0];
    const secondButtonElement = buttonElement[1];
    const thirdButtonElement = buttonElement[2];

    userEvent.click(firstButtonElement);
    userEvent.click(secondButtonElement);
    userEvent.click(thirdButtonElement);

    render(<MockCheckoutPage />);

    const headingElement = screen.getByRole('heading', { name: 'Total: $11.51' });

    expect(headingElement).toBeInTheDocument();
  });
});
