/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-cycle
import Quotes from '../assets/quotes.png';

const CustomSwiper:React.FC<{data: any[]}> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const handleScroll = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    if (scroller.current) {
      const { width } = scroller.current.getBoundingClientRect();
      scroller.current.scrollTo(width * current, 0);
    }
  }, [current]);
  const next = (e: any) => {
    if (e.type === 'keydown' && !(e.code === 'Enter' || e.code === 'Space')) return;
    e.preventDefault();
    setCurrent((prev) => (prev + 1) % data.length);
  };
  const previous = (e: any) => {
    if (e.type === 'keydown' && !(e.code === 'Enter' || e.code === 'Space')) return;
    e.preventDefault();
    setCurrent((prev) => (data.length + (prev - 1)) % data.length);
  };
  return (
    <div className="w-full overflow-hidden relative">
      {/* Arrows */}
      <div className="flex space-x-2 absolute right-8 top-1">
        <div className="bg-[#336CAE] h-12 w-12 rounded-full flex items-center justify-center text-2xl text-white font-bold cursor-pointer z-10 focus-within:outline-blue-800" tabIndex={0} onClick={previous} onKeyDown={previous} role="button">←</div>
        <div className="bg-[#336CAE] h-12 w-12 rounded-full flex items-center justify-center text-2xl text-white font-bold cursor-pointer z-10 focus-within:outline-blue-800" tabIndex={0} onClick={next} onKeyDown={next} role="button">→</div>
      </div>
      {/* Scroll State */}
      <div className="flex space-x-2 absolute right-8 bottom-8">
        {Array.from({ length: data.length }, (_, i) => i).map((val: number) => <div className={`h-2 ${current === val ? 'w-8 bg-[#00B2FF]' : 'w-2 bg-[#336ACE]'} shrink-0 transition-all`} />)}
      </div>
      <div className="w-fit flex scroll-smooth overflow-auto snap-x snap-mandatory hide-scrollbar" ref={scroller} onScroll={handleScroll}>
        {data.map((e:any) => (
          <div className="w-full shrink-0 snap-start" key={e.name}>
            {/* Content */}
            <div className="flex">
              <div className="flex shrink-0 mr-8">
                <div className="w-12 h-24 shrink-0 bg-[#336CAE]" />
                <img src={e.image} alt="faculty" className="h-72 object-cover" />
              </div>
              <div className="flex flex-col relative">
                <img className="w-4/5 h-4/5 absolute object-contain opacity-10 -z-[1]" src={Quotes} alt="quotes" />
                <h1 className="font-bold text-3xl">
                  <span className="block">{e.name.split(' ').splice(0, e.name.split(' ').length - 1).join(' ')}</span>
                  <span className="block">{e.name.split(' ')[e.name.split(' ').length - 1]}</span>
                </h1>
                <h2 className="mt-4 text-lg">
                  {e.designation}
                </h2>
                <p className="mt-8 text-sm w-4/5">
                  {e.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
