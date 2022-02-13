import { render, screen } from '@testing-library/react';
import CheckoutPage from '../CheckoutPage';
import StorePage from '../StorePage';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../context/AppContext';
import userEvent from '@testing-library/user-event';

const MockStorePage = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <StorePage />
      </AppContextProvider>
    </BrowserRouter>
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

describe('StorePage', () => {
  it('Renders without crashing', () => {
    render(<MockCheckoutPage />);
  });

  it('Renders a heading with the text your (Your cart is currently empty.) if the cart is empty', () => {
    render(<MockCheckoutPage />);

    const headingElement = screen.getByRole('heading', { name: 'Your cart is currently empty.' });

    expect(headingElement).toBeInTheDocument();
  });

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
