import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function StorePage() {
  const { state, dispatch } = useContext(AppContext);
  let navigate = useNavigate();

  const loggedIn = state.isLoggedIn || false;

  console.log(loggedIn);

  useEffect(() => {
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn]);

  return (
    <>
      {loggedIn ? (
        <StorePageWrapper>
          <h1>STORE</h1>
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
