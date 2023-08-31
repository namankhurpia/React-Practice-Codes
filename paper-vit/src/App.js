import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Cattwo from './pages/cattwo/Cattwo';
import Fat from './pages/fat/Fat';
import Home from './pages/home/Home';
import Catone from './pages/catone/Catone';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catone" element={<Catone />} />
        <Route path="/cattwo" element={<Cattwo />} />
        <Route path="/fat" element={<Fat />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;