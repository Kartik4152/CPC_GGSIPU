import React from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import Landing from './sections/Landing';
// import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

const App = () => (
  <>
    <Navbar />
    <Landing />
    <AboutUs />
    {/* <Footer /> */}
  </>
);

export default App;
