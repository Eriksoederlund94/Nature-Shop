import styled from 'styled-components';

function LoginPage() {
  return (
    <LoginPageWrapper>
      <div className='login-container'>
        <h1>Sign in</h1>
        <p>Sign in and start shopping!</p>
        <form action='submit' title='login-form'>
          <input type='text' name='login' placeholder='Login' className='login' required />
          <input type='password' name='password' placeholder='Password' className='password' required />
          <button type='submit'>Login</button>
        </form>
      </div>
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div`
  min-height: 100vh;
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
`;

export default LoginPage;
