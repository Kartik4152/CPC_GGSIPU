/* eslint-disable */

import React from 'react';
import Marquee from "react-fast-marquee";


function importAll(r: any) {
  return r.keys().map(r);
}

const companies = importAll((require as any).context('../assets/logos/', false, /\.(png|jpe?g|svg)$/));

const Recruiters = () => (
  <div className="w-full py-8" id="recruiters">
    <div className="w-full text-center text-2xl">
      Our Past Recruiters
    </div>
    <Marquee speed={80} className='w-full py-12 overflow-hidden'>
      {companies.map((image: string, idx: number) => (      
            <img src={image} key={idx} alt="recruiter" className="object-contain w-1/6 h-8 mx-8" />
          ))}
    </Marquee>
  </div>
);

export default Recruiters;
