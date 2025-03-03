import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cryptoLogo from './assets/crypto.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Pages/Login';
import HomePage from './Pages/Homepage';
import Coin from './Pages/CoinPage';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Homepage/*' element={<HomePage/>}/>
      {/* <Route path="/coin" element={<Coin />} /> Add this */}

    </Routes>
    </BrowserRouter>
  )
}

export default App;