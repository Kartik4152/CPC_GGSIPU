/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunk } from 'lodash-es';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import {
  Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';

function importAll(r: any) {
  return r.keys().map(r);
}

const companies = chunk(importAll((require as any).context('../assets/logos/', false, /\.(png|jpe?g|svg)$/)), 7);
const Recruiters = () => (
  <div className="w-full py-8">
    <div className="w-full text-center text-2xl">
      Our Past Recruiters
    </div>
    <Swiper
      autoplay={{ delay: 2000 }}
      loop
      cssMode
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {companies.map((e: any) => (
        <SwiperSlide>
          <div className="w-full flex items-center h-32 p-8 justify-evenly">
            {e.map((image: string) => (
              <img src={image} alt="recruiter" className="object-contain w-1/6 h-8" />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Recruiters;
