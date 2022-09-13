import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Individual from './component/Individual';
import Teams from './component/Teams';
import Home from './component/Home';
import Navbars from './component/Navbars';
import Enterprise from './component/Enterprise';
import Errorpage from './component/Errorpage';
function Routing() {
  return (
    <BrowserRouter>
        <Navbars/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individual" element={<Individual/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
