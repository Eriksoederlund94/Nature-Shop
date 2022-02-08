//React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom';

// Component
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages import
import LoginPage from './pages/LoginPage';
import StorePage from './pages/StorePage';
import CheckoutPage from './pages/CheckoutPage';

import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className='App'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={state.isLoggedIn ? <Navigate to='store' replace /> : <LoginPage />} />
          <Route path='/store' element={!state.isLoggedIn ? <Navigate to='/' replace /> : <StorePage />} />
          <Route path='/cart' element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
