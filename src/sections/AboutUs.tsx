/* eslint-disable max-len */
import React from 'react';
import About from '../assets/about.svg';

const AboutUs = () => (
  <div className="flex flex-col py-8 space-y-8">
    <div className="text-[#336CAE] text-5xl uppercase self-center border-b-4">About US</div>
    <div className="flex space-x-4">
      <div className="flex flex-col p-16 justify-center space-y-8 text-[#2a3446]">
        <div className="text-3xl font-extrabold text-[#4883c6d1]">Lorem ipsum dolor sit amet consectetur</div>
        <div className="text-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam est iste aspernatur minus? Sapiente consequuntur, et quod neque quaerat nemo quo dolores magnam quos
        </div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem vero deserunt fugiat consequatur magni quam. Nulla odit rerum expedita natus, reiciendis optio qui sit a ratione laudantium quo dicta.</div>
      </div>
      <img src={About} alt="" />
    </div>
  </div>
);

export default AboutUs;
