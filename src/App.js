import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import SpecialMenu from './components/Menu/SpecialMenu';
import Chef from './components/Chef/Chef';
import Intro from './components/Intro/Intro';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
  </div>
);

export default App;
