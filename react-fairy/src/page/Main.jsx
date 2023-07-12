import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideImg1 from '../Images/dog.jpg'
import TodayProd from './TodayProd';
import Swiper1 from './Swiper1';

const Main = () => {
  return (
    <div className='Main'>
      <section className='Main-sec01'>
        <Swiper1></Swiper1>
      </section>
      <section className='Main-sec02'>
          <TodayProd></TodayProd>
      </section>
    </div>
  )
}

export default Main