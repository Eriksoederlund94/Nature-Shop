import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import AddToCartBtn from '../AddToCartBtn';

const mockSetToogle = jest.fn();

const MockAddToCartBtn = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AddToCartBtn id={'1'} inStock={4} setToogle={mockSetToogle} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('AddToCartBtn', () => {
  it('Renders without crashing', () => {
    render(<MockAddToCartBtn />);
  });

  it('Renders a button', () => {
    render(<MockAddToCartBtn />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('Renders a button with the text (Add to Cart)', () => {
    render(<MockAddToCartBtn />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Add to Cart');
  });

  it('Event should fire on user click', () => {
    render(<MockAddToCartBtn />);

    const buttonElement = screen.getByRole('button', { name: 'Add to Cart' });

    userEvent.click(buttonElement);

    expect(mockSetToogle).toBeCalledTimes(1);
  });
});
