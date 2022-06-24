import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import SpecialMenu from './components/Menu/SpecialMenu';
import Chef from './components/Chef/Chef';
import Intro from './components/Intro/Intro';
import Laurels from './components/Laurels/Laurels';
import Gallery from './components/Gallery/Gallery';
import FindUs from './components/Findus/FindUs';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
  </div>
);

export default App;
