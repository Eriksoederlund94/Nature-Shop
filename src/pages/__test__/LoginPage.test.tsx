import { render } from '@testing-library/react';
import LoginPage from '../LoginPage';

describe('LoginPage', () => {
  it('Renders without crashing', () => {
    render(<LoginPage />);
  });
});
