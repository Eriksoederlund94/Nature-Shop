import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

function LoginPage() {
  const { state, dispatch } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('');

  let navigate = useNavigate();

  const userData = state.initialUser;
  const loggedIn = state.isLoggedIn || false;

  const loginHandler = (event: any) => {
    event.preventDefault();
    const userNameInput = event.target.login.value;
    const passwordNameInput = event.target.password.value;

    const userNameCheck = userData.some((user) => user.userName === userNameInput);
    const passwordCheck = userData.some((user) => user.password === passwordNameInput);

    if (userNameCheck) {
      if (passwordCheck) {
        navigate('/store');
        dispatch({ type: 'SET_LOGGED_IN' });
        dispatch({
          type: 'SET_CURRENT_USER',
          payload: userNameInput,
        });
      }
    }
    setErrorMessage('Wrong username or password!');
  };

  return (
    <LoginPageWrapper>
      {loggedIn ? (
        <div className='loggedIn'>
          <h1>You are logged in!</h1>{' '}
          <button className='backToStore-btn' onClick={() => navigate('store')}>
            Back to store
          </button>
        </div>
      ) : (
        <div className='login-container'>
          <h1>Sign in</h1>
          <p>Sign in and start shopping!</p>
          <form action='submit' title='login-form' onSubmit={loginHandler}>
            <input type='text' name='login' placeholder='Login' className='login' required />
            <input type='password' name='password' placeholder='Password' className='password' required />
            <button type='submit'>Login</button>
            <p className='error'>{errorMessage}</p>
          </form>
        </div>
      )}
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: #093545;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    background-color: #07212a;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;

    .error {
      animation: blinker 1s linear infinite;
    }

    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }

    h1 {
      color: #eee;
      font-size: 36px;
      font-weight: 600;
      margin-top: 30px;
      text-align: center;
    }

    p {
      color: #eee;
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      text-align: center;
    }

    form {
      height: 50px;
      position: relative;
      width: 100%;
    }

    input {
      background-color: #363955;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;
      color: #eee;
      font-size: 18px;
      height: 100%;
      outline: 0;
      padding: 4px 20px 0;
      width: 100%;
    }

    .login {
      margin-top: 40px;
    }

    .password {
      margin-top: 30px;
    }

    button {
      background-color: #9bcd6a;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;
      color: #eee;
      font-size: 18px;
      height: 50px;
      margin-top: 38px;
      text-align: center;
      width: 100%;
      cursor: pointer;

      &:hover {
        background-color: #85b654;
      }
    }
  }

  .loggedIn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;

    .backToStore-btn {
      all: unset;
      cursor: pointer;
      padding: 1rem 1.5rem;
      margin: 1rem;
      border-radius: 0.3rem;
      background-color: #9bcd6a;

      &:hover {
        background-color: #85b654;
      }
    }
  }
`;

export default LoginPage;
