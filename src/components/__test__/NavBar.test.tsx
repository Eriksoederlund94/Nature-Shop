import { render, screen } from '@testing-library/react';
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

  it('Renders a logo img', () => {
    render(<MockNavBar />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
  });

  it('Renders a heading tag with the text (The Nature Shop)', () => {
    render(<MockNavBar />);

    const headingElement = screen.getByRole('heading');

    expect(headingElement).toHaveTextContent('The Nature Shop');
  });
});
