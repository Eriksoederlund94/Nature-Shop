import Cart from '../components/cart/Cart';
import styled from 'styled-components';

function CheckoutPage() {
  return (
    <CheckoutPageWrapper>
      <Cart />
    </CheckoutPageWrapper>
  );
}

const CheckoutPageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: #093545;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CheckoutPage;
