import React from 'react';
import FooterCard from '../components/FooterCard';
import QrCode from '../assets/qr.png';
import logoPin from '../assets/location_icon.png';
import logoPhone from '../assets/contact_icon.png';
import logoMail from '../assets/mail_icon.png';
import logoInstagram from '../assets/instagram_icon.png';
import logoLinkedin from '../assets/linkedin_icon.png';
import logoTwitter from '../assets/twitter_icon.png';

const Footer = () => (
  <div id="footer" className="bg-[#242424] w-full flex flex-col items-center">
    <div className="w-3/5 py-12 text-white">
      <div className="flex items-center w-full justify-between border-b-4 pb-8 mb-8 border-[#777777]">
        <FooterCard title="FIND US" icon={logoPin} text="Dean Office, USICT, GGSIPU Sector 16C, Dwarka, Delhi" />
        <FooterCard title="CALL US" icon={logoPhone} text="011-25302843" />
        <FooterCard title="MAIL US" icon={logoMail} text="info@tnp.ac.in" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col space-y-4">
          <h1 className="uppercase text-2xl">Quick Links</h1>
          <span>&gt; Procedure</span>
          <span>&gt; Recruiters</span>
          <span>&gt; Statistics</span>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="uppercase text-2xl">Social Links</h1>
          <span className="flex">
            <img src={logoInstagram} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Instagram
          </span>
          <span className="flex">
            <img src={logoLinkedin} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Linkedin
          </span>
          <span className="flex">
            <img src={logoTwitter} alt="social logo" className="w-6 h-6 object-contain mr-4" />
            Twitter
          </span>
        </div>
        <img src={QrCode} alt="qr code" className="w-48 h-48 object-contain object-right" />
      </div>
    </div>
    <div className="bg-[#2D2D2D] w-full flex items-center justify-center text-white p-4 py-8">
      © Conceptualized, designed and developed by office bearers of Training and Placement Cell
    </div>
  </div>
);

export default Footer;
