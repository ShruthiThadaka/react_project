import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cryptoLogo from './assets/crypto.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Pages/Login';
import HomePage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import CryptoContext from './CryptoContext';

function App() {

  return (
    <CryptoContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Homepage/*' element={<HomePage />} />
          {/* <Route path="/coins/:id" element={<CoinPage />} />  */}

        </Routes>
      </BrowserRouter>
    </CryptoContext>
  )
}

export default App;