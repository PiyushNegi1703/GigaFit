import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
