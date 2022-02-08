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
  margin: 0;
  padding: 0;
  background-color: #093545;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CheckoutPage;
