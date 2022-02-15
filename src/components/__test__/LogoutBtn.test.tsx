import { render, screen } from '@testing-library/react';
import LogoutBtn from '../LogoutBtn';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const MockLogoutBtn = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <LogoutBtn />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('LogoutBtn', () => {
  it('Renders without crashing', () => {
    render(<MockLogoutBtn />);
  });

  it('Should render a btn with the text logout', () => {
    render(<MockLogoutBtn />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Logout');
  });
});
