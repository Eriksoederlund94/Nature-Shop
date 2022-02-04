//React Router Dom
import { Routes, Route } from 'react-router-dom';

// Component
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages import
import LoginPage from './pages/LoginPage';
import StorePage from './pages/StorePage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/store' element={<StorePage />}></Route>
          <Route path='/cart' element={<CheckoutPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
