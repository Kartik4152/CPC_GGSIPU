import React from 'react';
// eslint-disable-next-line import/no-cycle
import CustomSwiper from '../components/CustomSwiper';
import SiteData from '../SiteData';

const MessageFaculty = () => (
  <div id="faculty" className="w-full flex flex-col items-center pb-16">
    <div className="w-4/6 mt-8 flex flex-col">
      <h1 className="mb-16 text-6xl text-[#336CAE] font-bold stroke-text">{SiteData.messageFaculty.heading}</h1>
      <CustomSwiper data={SiteData.messageFaculty.data} />
    </div>
  </div>
);

export default MessageFaculty;
