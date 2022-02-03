import { render } from '@testing-library/react';
import StorePage from '../StorePage';

describe('StorePage', () => {
  it('Renders without crashing', () => {
    render(<StorePage />);
  });
});
