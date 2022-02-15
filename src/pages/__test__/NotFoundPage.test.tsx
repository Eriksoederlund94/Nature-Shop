import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../context/AppContext';
import NotFoundPage from '../NotFoundPage';

const MockNotFoundPage = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('NotFoundPage', () => {
  it('Renders without crashing', () => {
    render(<MockNotFoundPage />);
  });

  it('Renders a heading with the text (Page not found 404!)', () => {
    render(<MockNotFoundPage />);

    const headingElement = screen.getByRole('heading');

    expect(headingElement).toHaveTextContent('Page not found 404!');
  });
});
