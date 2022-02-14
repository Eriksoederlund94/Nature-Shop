import { render } from '@testing-library/react';
import NavBar from '../NavBar';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const MockNavBar = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Navbar', () => {
  it('Renders without crashing', () => {
    render(<MockNavBar />);
  });
});
