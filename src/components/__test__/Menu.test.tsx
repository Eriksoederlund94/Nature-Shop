import { render } from '@testing-library/react';
import Menu from '../Menu';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const MockMenu = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Menu', () => {
  it('Renders without crashing', () => {
    render(<MockMenu />);
  });
});
