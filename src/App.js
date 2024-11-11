import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Analysis from './Pages/Analysis';
import LoginSignup from './Pages/LoginSignup';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/style-your-outfit' element={<Analysis category="style-your-outfit" />} />
        <Route path='/login-signup' element={<LoginSignup />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
