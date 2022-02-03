import { render } from '@testing-library/react';
import CheckoutPage from '../CheckoutPage';

describe('StorePage', () => {
  it('Renders without crashing', () => {
    render(<CheckoutPage />);
  });
});
