import React from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import Landing from './sections/Landing';
import Footer from './sections/Footer';
import MessageFaculty from './sections/MessageFaculty';
import Navbar from './sections/Navbar';
import Notices from './sections/Notices';
import Recruiters from './sections/Recruiters';
import AlumniCommunique from './sections/AlumniCommunique';
import Rankings from './sections/Rankings';

const App = () => (
  <>
    <Notices />
    <Navbar />
    <Landing />
    <Recruiters />
    <AboutUs />
    <MessageFaculty />
    <Rankings />
    <AlumniCommunique />
    <FAQ />
    <Footer />
  </>
);

export default App;
