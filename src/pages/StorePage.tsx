import styled from 'styled-components';

// Component
import Store from '../components/store/Store';

function StorePage() {
  return (
    <StorePageWrapper>
      <Store />
    </StorePageWrapper>
  );
}

const StorePageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin-bottom: 2rem;

  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export default StorePage;
