import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../../context/AppContext';
import { userInfo } from 'os';
import userEvent from '@testing-library/user-event';

const MockLoginPage = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('LoginPage', () => {
  it('Renders without crashing', () => {
    render(<MockLoginPage />);
  });

  it('Renders a heading with the text Sign in', () => {
    render(<MockLoginPage />);

    const headingElement = screen.getByRole('heading');

    expect(headingElement).toHaveTextContent('Sign in');
  });

  it('Renders a paragraf with the text Sign in and start shopping!', () => {
    render(<MockLoginPage />);

    const paragrafElement = screen.getByText('Sign in and start shopping!');

    expect(paragrafElement).toBeInTheDocument();
  });

  it('Renders a form', () => {
    render(<MockLoginPage />);

    const formElement = screen.getByTitle('login-form');

    expect(formElement).toBeInTheDocument();
  });

  it('Renders an inpufield with the placeholder text (Username)', () => {
    render(<MockLoginPage />);

    const inputElement = screen.getByPlaceholderText('Username');

    expect(inputElement).toBeInTheDocument();
  });

  it('Renders an inpufield with the placeholder text (Password)', () => {
    render(<MockLoginPage />);

    const inputElement = screen.getByPlaceholderText('Password');

    expect(inputElement).toBeInTheDocument();
  });

  it('Renders a button with the text (Login)', () => {
    render(<MockLoginPage />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('The input value equal the users typed input', () => {
    render(<MockLoginPage />);

    const inputUserElement = screen.getByPlaceholderText('Username');

    userEvent.type(inputUserElement, 'User123');

    expect(inputUserElement).toHaveValue('User123');
  });
});
