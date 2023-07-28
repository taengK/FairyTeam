import React, { useContext, useRef, useState } from 'react';
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
        <Swiper className="mySwiper"
        slidesPerView={1}
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
        
      >



      
      
      {/* 오레오 */}
      <SwiperSlide className='SlideBox1'><a target='_blink' className='MAdvertising' href="http://127.0.0.1:5502/react-fairy/public/Sitecopy/Oreo_BlackpinkFirst/index.html" ></a></SwiperSlide>
      {/* 가구 */}
      <SwiperSlide className='SlideBox2'><a target='_blink' className='MAdvertising' href="http://127.0.0.1:5502/react-fairy/public/Sitecopy/furnitureSecond/index.html" ></a></SwiperSlide>
      {/* 여행사 */}
      <SwiperSlide className='SlideBox3'><a target='_blink' className='MAdvertising' href="http://127.0.0.1:5502/react-fairy/public/Sitecopy/travel_agencyThred/index.html" ></a></SwiperSlide>
      {/* 헤르메스 */}
      <SwiperSlide className='SlideBox4'><a target='_blink' className='MAdvertising' href="http://127.0.0.1:5502/react-fairy/public/Sitecopy/HermesForth/index.html" ></a></SwiperSlide>
      {/* SMHRD */}
      <SwiperSlide className='SlideBox5'><a target='_blink' className='MAdvertising' href="http://127.0.0.1:5502/react-fairy/public/Sitecopy/SmhrdFifth/index.html" ></a></SwiperSlide>
      
        {/* <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide>
        <SwiperSlide className='SlideBox'><img src={SlideImg1} alt="" className='SlideImg'/></SwiperSlide> */}
      



      
      
      
      
      
    </Swiper>
    </div>
  )
}

export default Swiper1