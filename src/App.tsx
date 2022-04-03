import React from 'react';
import './App.css';
// import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import Landing from './sections/Landing';
// import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

const App = () => (
  <>
    <Navbar />
    <Landing />
    {/* <AboutUs /> */}
    <FAQ />
    {/* <Footer /> */}
  </>
);

export default App;
