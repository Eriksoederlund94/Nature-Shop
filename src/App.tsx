import { useContext } from 'react';
import { AppContext } from './context/AppContext';

//React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom';

// Component
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages import
import LoginPage from './pages/LoginPage';
import StorePage from './pages/StorePage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className='App'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={state.isLoggedIn ? <Navigate to='store' replace /> : <LoginPage />} />
          <Route path='/store' element={!state.isLoggedIn ? <Navigate to='/' replace /> : <StorePage />} />
          <Route path='/cart' element={!state.isLoggedIn ? <Navigate to='/' replace /> : <CheckoutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
