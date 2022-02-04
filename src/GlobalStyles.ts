import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: string;
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
}

`;

export default GlobalStyle;
