import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';

describe('LoginPage', () => {
  it('Renders without crashing', () => {
    render(<LoginPage />);
  });

  it('Renders a heading with the text Sign in', () => {
    render(<LoginPage />);

    const headingElement = screen.getByRole('heading');

    expect(headingElement).toHaveTextContent('Sign in');
  });

  it('Renders a paragraf with the text Sign in and start shopping!', () => {
    render(<LoginPage />);

    const paragrafElement = screen.getByText('Sign in and start shopping!');

    expect(paragrafElement).toBeInTheDocument();
  });

  it('Renders a form', () => {
    render(<LoginPage />);

    const formElement = screen.getByTitle('login-form');

    expect(formElement).toBeInTheDocument();
  });

  it('Renders an inpufield with the placeholder text (Login)', () => {
    render(<LoginPage />);

    const inputElement = screen.getByPlaceholderText('Login');

    expect(inputElement).toBeInTheDocument();
  });

  it('Renders an inpufield with the placeholder text (Password)', () => {
    render(<LoginPage />);

    const inputElement = screen.getByPlaceholderText('Password');

    expect(inputElement).toBeInTheDocument();
  });

  it('Renders a button with the text (Login)', () => {
    render(<LoginPage />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });
});
