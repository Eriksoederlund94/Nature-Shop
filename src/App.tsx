//React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages import
import LoginPage from './pages/LoginPage';
import StorePage from './pages/StorePage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/store' element={<StorePage />}></Route>
        <Route path='/cart' element={<CheckoutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
