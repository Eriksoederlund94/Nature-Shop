import { render, screen } from '@testing-library/react';
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

const MockNavBar = () => {
  return <MockNavBar />;
};

describe('StorePage', () => {
  it('Renders without crashing', () => {
    render(<MockStorePage />);
  });

  it('Renders a img on the card', () => {
    render(<MockStorePage />);

    const imageElements = screen.getAllByRole('img');

    const firstImgElement = imageElements[0];

    expect(firstImgElement).toBeInTheDocument();
  });

  it('Renders a heading with a productname', () => {
    render(<MockStorePage />);

    const headerElement = screen.getAllByRole('heading');

    const firstHeaderElement = headerElement[0];

    expect(firstHeaderElement).toBeInTheDocument();
  });

  it('Renders a paragrah with weight text', () => {
    render(<MockStorePage />);

    const paragrahElement = screen.getByText('10kg in stock');

    expect(paragrahElement).toBeInTheDocument();
  });

  it('Renders a heading with  price text', () => {
    render(<MockStorePage />);

    const headingElement = screen.getByText('$12.02/kg');

    expect(headingElement).toBeInTheDocument();
  });

  it('Renders a add to cart btn crashing', () => {
    render(<MockStorePage />);

    const buttonElements = screen.getAllByRole('button', { name: 'Add to Cart' });

    const firstButtonElement = buttonElements[0];

    expect(firstButtonElement).toBeInTheDocument();
  });

  it('On click the text value of add to cart btn should be In Cart', () => {
    render(<MockStorePage />);

    const buttonElements = screen.getAllByRole('button', { name: 'Add to Cart' });

    const firstButtonElement = buttonElements[0];

    userEvent.click(firstButtonElement);

    expect(firstButtonElement).toHaveTextContent('In Cart');
  });

  it('On click the text value of add to cart btn should not be In Carts', () => {
    render(<MockStorePage />);

    const buttonElements = screen.getAllByRole('button', { name: 'Add to Cart' });

    const firstButtonElement = buttonElements[0];

    userEvent.click(firstButtonElement);

    expect(firstButtonElement).not.toHaveTextContent('In Carts');
  });

  it('On click the text value of add to cart btn should not be In Carts', () => {
    render(<MockStorePage />);

    const buttonElements = screen.getAllByRole('button', { name: 'Add to Cart' });

    const firstButtonElement = buttonElements[0];

    userEvent.click(firstButtonElement);

    expect(firstButtonElement).not.toHaveTextContent('In Carts');
  });

  it('Item in stock should change when the add to cart button is clicked', () => {
    render(<MockStorePage />);

    const paragrahElement = screen.getByText('18kg in stock');
    const buttonElements = screen.getAllByRole('button');
    const secondButtonElement = buttonElements[1];

    userEvent.click(secondButtonElement);

    expect(paragrahElement).toHaveTextContent('17kg in stock');
  });

  it('Should render a productcard for all of the products in the store', () => {
    render(<MockStorePage />);

    const productCardElement = screen.getAllByTestId('product-card');

    expect(productCardElement.length).toBe(9);
  });

  it('Should render an inputfield', () => {
    render(<MockStorePage />);

    const inputSearchElement = screen.getByPlaceholderText('Search produce');

    expect(inputSearchElement).toBeInTheDocument();
  });

  it('The inputfields value should match the user input', () => {
    render(<MockStorePage />);

    const inputSearchElement = screen.getByPlaceholderText('Search produce');

    userEvent.type(inputSearchElement, 'Apple');

    expect(inputSearchElement).toHaveValue('Apple');
  });

  it('The render store products that match the userinput', () => {
    render(<MockStorePage />);

    const inputSearchElement = screen.getByPlaceholderText('Search produce');

    userEvent.type(inputSearchElement, 'a');

    const productCardElement = screen.getAllByTestId('product-card');

    expect(productCardElement.length).toBe(3);
  });
});
