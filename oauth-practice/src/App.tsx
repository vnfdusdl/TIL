import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import KakaoOauth from './pages/KakaoOauth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/login/kakao/oauth' element={<KakaoOauth />} />
    </Routes>
  );
}

export default App;
