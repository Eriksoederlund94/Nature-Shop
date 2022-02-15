import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../../context/AppContext';
import Store from '../Store';

const MockStore = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Store />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Store', () => {
  it('Renders without crashing', () => {
    render(<MockStore />);
  });

  it('Renders a inputfield with the placeholder text (Search produce)', () => {
    render(<MockStore />);

    const inputElement = screen.getByPlaceholderText('Search produce');

    expect(inputElement).toBeInTheDocument();
  });

  it('Rendes a heading with the text (Sorry, no produce match your search.) if the users search does not match a produce in store.', () => {
    render(<MockStore />);

    const inputElement = screen.getByPlaceholderText('Search produce');

    userEvent.type(inputElement, 'AAAAAAAAAA');

    const headingElement = screen.getByRole('heading');

    expect(headingElement).toHaveTextContent('Sorry, no produce match your search.');
  });
});
