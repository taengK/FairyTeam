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
const Swiper1 = () => {
  return (
    <div>
         <h2>EVENT</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
      <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Swiper1