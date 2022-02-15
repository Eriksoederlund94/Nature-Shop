import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React router dom
import { BrowserRouter } from 'react-router-dom';

// ContextProvider
import AppContextProvider from './context/AppContext';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyles />
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
