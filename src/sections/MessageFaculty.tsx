import React from 'react';
// eslint-disable-next-line import/no-cycle
import CustomSwiper from '../components/CustomSwiper';
import DeanUsict from '../assets/dean.jpg';

interface IFacultyData {
    name: string;
    designation: string;
    image: string;
    text: string;
}
const facultyData : IFacultyData[] = [
  {
    name: 'Prof. Pravin Chandra',
    designation: 'Professor & Dean (USICT)',
    image: DeanUsict,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit minima, adipisci illo voluptate neque accusantium hic beatae laborum consectetur nemo dolores cupiditate fugiat ad at necessitatibus perferendis itaque iure.'
  },
  {
    name: 'Prof. Rakesh Raheja',
    designation: 'Professor & Dean (USLLS)',
    image: DeanUsict,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit minima, adipisci illo voluptate neque accusantium hic beatae laborum consectetur nemo dolores cupiditate fugiat ad at necessitatibus perferendis itaque iure.'
  },
  {
    name: 'Prof. Sushma Swaraj',
    designation: 'Professor & Dean (USDI)',
    image: DeanUsict,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit minima, adipisci illo voluptate neque accusantium hic beatae laborum consectetur nemo dolores cupiditate fugiat ad at necessitatibus perferendis itaque iure.'
  },
];

const MessageFaculty = () => (
  <div id="messageFaculty" className="w-full flex flex-col items-center pb-16">
    <div className="w-4/6 mt-8 flex flex-col">
      <h1 className="mb-16 text-6xl text-[#336CAE] font-bold stroke-text">Message From Faculty</h1>
      <CustomSwiper data={facultyData} />
    </div>
  </div>
);

export default MessageFaculty;
export type { IFacultyData };
