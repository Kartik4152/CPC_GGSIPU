/* eslint-disable react/no-array-index-key */
import React from 'react';
import AlumniCard from '../components/AlumniCard';
import SiteData from '../SiteData';

const AlumniCommunique = () => (
  <div id="alumni" className="w-full pt-8 flex flex-col items-center">
    <h1 className="text-base text-[#336CAE] font-bold mb-6">{SiteData.messageAlumni.heading}</h1>
    <h2 className="text-4xl font-bold w-[28rem] text-center mb-16">{SiteData.messageAlumni.subheading}</h2>
    <div className="w-full overflow-auto mt-8 flex pb-4 pt-8 blue-scroll">
      {SiteData.messageAlumni.data.map((e, index:number) => (
        <AlumniCard data={e} key={index} />
      ))}
    </div>
  </div>
);

export default AlumniCommunique;
