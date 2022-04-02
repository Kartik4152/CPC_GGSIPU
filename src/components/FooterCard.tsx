import React from 'react';

const FooterCard:React.FC<{icon: string, title:string, text: string}> = ({ icon, title, text }) => (
  <div className="flex w-[20rem] justify-center">
    <div className="flex">
      <img src={icon} alt="google map pin" className="w-12 h-12 object-contain mr-2" />
      <div className="flex flex-col max-w-[10rem]">
        <div className="text-white">
          {title}
        </div>
        <div className="text-white text-xs">
          {text}
        </div>
      </div>
    </div>
  </div>
);

export default FooterCard;
