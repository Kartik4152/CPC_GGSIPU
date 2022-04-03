/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IFacultyData as IAlumniTestimonial } from './MessageFaculty';
import alum1 from '../assets/alumni/1.jpeg';
import alum2 from '../assets/alumni/2.jpeg';
import alum3 from '../assets/alumni/3.png';
import alum4 from '../assets/alumni/4.jpeg';
import alum5 from '../assets/alumni/5.png';
import AlumniCard from '../components/AlumniCard';

const alumniData: IAlumniTestimonial[] = [
  {
    name: 'Rakesh Arora',
    designation: 'CEO (Microsoft)',
    image: alum1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit illo laudantium quos fugiat totam molestiae, autem est magnam.'
  },
  {
    name: 'Rohan Rathore',
    designation: 'CTO (Infosys)',
    image: alum2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit illo laudantium quos fugiat totam molestiae, autem est magnam.'
  },
  {
    name: 'Manik Ahluwalia',
    designation: 'CEO (PPLWORK)',
    image: alum3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit illo laudantium quos fugiat totam molestiae, autem est magnam.'
  },
  {
    name: 'Naman Naman',
    designation: 'Director (Zer0Stipend)',
    image: alum4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit illo laudantium quos fugiat totam molestiae, autem est magnam.'
  },
  {
    name: 'Arpit Dhingra',
    designation: 'CTO (Wipro)',
    image: alum5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit illo laudantium quos fugiat totam molestiae, autem est magnam.'
  },
];

const AlumniCommunique = () => (
  <div id="alumni" className="w-full pt-8 flex flex-col items-center">
    <h1 className="text-base text-[#336CAE] font-bold mb-6">Alumni Communique</h1>
    <h2 className="text-4xl font-bold w-96 text-center mb-16">What Our Established Alumni Say</h2>
    <div className="w-full overflow-auto hide-scrollbar mt-8 flex pt-8">
      {alumniData.map((e:IAlumniTestimonial, index:number) => (
        <AlumniCard data={e} key={index} />
      ))}
    </div>
  </div>
);

export default AlumniCommunique;
