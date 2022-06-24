import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import SpecialMenu from './components/Menu/SpecialMenu';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
  </div>
);

export default App;
