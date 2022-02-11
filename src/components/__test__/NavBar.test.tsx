import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const renderRoute = (ui: React.ReactNode) => {
  window.history.pushState({}, '', '/store');
  return render(
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/store' />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
};

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
