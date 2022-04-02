import React from 'react';
import logoIPU from '../assets/GGSIPU-logo.png';

const Navbar = () => (
  <div className="flex justify-between items-center px-4 py-2 bg-slate-50 shadow-lg fixed top-0 left-0 w-full z-50">
    <div className="flex items-center">
      <img src={logoIPU} alt="IPU Logo" className="w-16 h-16 object-contain mr-4" />
      <div className="flex flex-col">
        <span className="leading-4 mb-1">Training and Placement Cell</span>
        <span className="border-t-[1px] border-black border-opacity-50 leading-4">Guru Gobind Singh Indraprastha University</span>
      </div>
    </div>
    <div className="flex space-x-4 items-center">
      <span>Home</span>
      <span>Procedure</span>
      <span>Recruiters</span>
      <span>Statistics</span>
      <div className="bg-[#003865] px-4 py-2 rounded-sm text-white">Login/Sign Up</div>
    </div>
  </div>
);

export default Navbar;
