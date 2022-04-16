/* eslint-disable max-len */
import React from 'react';
import vibe from '../assets/vibe.jpg';
import SiteData from '../SiteData.json';

const About = () => (
  <div className="w-full px-24 py-12 flex justify-center items-center" id="about">
    <div className="flex justify-center perspective space-x-12 items-center">
      <div className="flex flex-col space-y-10 max-w-[30rem] w-fit">
        <div className="text-4xl w-fit flex flex-col gap-4 items-center transition-all ">
          {SiteData.aboutUs.heading}
          <div className="w-full h-[2px] bg-[#336CAE] transition-all" />
        </div>
        <div className="text-base mt-20 transition-all font-light ">
          {SiteData.aboutUs.text}
        </div>
      </div>
      <div className="relative">
        <img src={vibe} className="h-[20rem] border-4 border-solid border-white -right-32 block object-cover shadow-lg" alt="vibe" />
      </div>
    </div>
  </div>
);

export default About;
