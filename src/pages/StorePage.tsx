import styled from 'styled-components';

// Component
import Store from '../components/store/Store';

function StorePage() {
  return (
    <>
      <StorePageWrapper>
        <Store />
      </StorePageWrapper>
    </>
  );
}

const StorePageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export default StorePage;
