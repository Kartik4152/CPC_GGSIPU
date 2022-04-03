import React from 'react';
import { IFacultyData as IAlumniTestimonial } from '../sections/MessageFaculty';
import WhiteQuotes from '../assets/quotes_white.svg';

const AlumniCard:React.FC<{data: IAlumniTestimonial}> = ({ data }) => (
  <div className="w-96 h-64 relative flex flex-col justify-between border-[1px] overflow-visible border-solid border-opacity-10 border-black shrink-0 shadow-lg mx-4">
    <div className="absolute w-12 h-12 -top-6 left-12 bg-[#336CAE] rounded-full flex items-center justify-center">
      <img src={WhiteQuotes} className="object-contain h-4 w-4" alt="quotes" />
    </div>
    <div className="p-4 pt-10">{data.text}</div>
    <div className="flex items-center p-4 border-t-[1px] border-black border-opacity-10">
      <img src={data.image} alt="alumni" className="h-8 w-8 object-cover rounded-full" />
      <div className="flex flex-col ml-4">
        <div>{data.name}</div>
        <div className="opacity-75 text-sm">{data.designation}</div>
      </div>
    </div>
  </div>
);

export default AlumniCard;
