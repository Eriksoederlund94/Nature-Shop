import { render } from '@testing-library/react';
import Footer from '../Footer';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const MockFooter = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Footer', () => {
  it('Renders without crashing', () => {
    render(<MockFooter />);
  });
});
