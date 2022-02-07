import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

// Component
import Store from '../components/store/Store';

function StorePage() {
  const { state } = useContext(AppContext);
  let navigate = useNavigate();

  const loggedIn = state.isLoggedIn || false;

  useEffect(() => {
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn]);

  return (
    <>
      {loggedIn ? (
        <StorePageWrapper>
          <Store />
        </StorePageWrapper>
      ) : null}
    </>
  );
}

const StorePageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: #093545;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export default StorePage;
