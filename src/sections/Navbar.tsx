import React from 'react';
import logoIPU from '../assets/GGSIPU-logo.png';

const Navbar = () => (
  <div className="flex justify-between items-center px-4 py-2 bg-slate-50 shadow-lg fixed top-0 left-0 w-full z-20">
    <div className="flex items-center">
      <img src={logoIPU} alt="IPU Logo" className="w-16 h-16 object-contain mr-4" />
      <div className="flex flex-col">
        <span className="border-b-[1px] border-black border-opacity-50 leading-4">Centralized Career Guidance and Placement Cell</span>
        <span className="leading-4">Guru Gobind Singh Indraprastha University</span>
      </div>
    </div>
    <div className="flex space-x-4 items-center">
      <span><a href="#home">Home</a></span>
      <span><a href="#recruiters">Recruiters</a></span>
      <span><a href="#about">About Us</a></span>
      <span><a href="#faculty">Faculty</a></span>
      <span><a href="#rankings">Rankings</a></span>
      <span><a href="#alumni">Alumni</a></span>
      <span><a href="#faq">FAQ</a></span>
      <span><a href="#footer">Contact</a></span>
      {/* <div className="bg-[#003865] px-4 py-2 rounded-s
      m text-white cursor-pointer">Login/Sign Up</div> */}
    </div>
  </div>
);

export default Navbar;
