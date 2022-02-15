import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
  const { dispatch } = useContext(AppContext);
  let navigate = useNavigate();

  const logoutHandler = () => {
    dispatch({ type: 'SET_LOGGED_IN' });
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    navigate('/');
  };

  return <LogoutBtnWrapper onClick={logoutHandler}>Logout</LogoutBtnWrapper>;
}

const LogoutBtnWrapper = styled.button`
  background-color: #9bcd6a;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  padding: 0.5rem;
  text-align: center;
  width: 6rem;
  cursor: pointer;

  &:hover {
    background-color: #85b654;
  }
`;

export default LogoutBtn;
