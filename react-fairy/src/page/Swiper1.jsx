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
      {/* <SwiperSlide className='SlideBox1'><a target='_blink' href="http://127.0.0.1:5502/Sitecopy/%EC%98%A4%EB%A0%88%EC%98%A4_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC/index.html" className='fkfk'></a></SwiperSlide>
      <SwiperSlide className='SlideBox2'><a target='_blink' href="http://127.0.0.1:5502/Sitecopy/1213_Business/index.html" className='fkfk'></a></SwiperSlide>
      <SwiperSlide className='SlideBox3'><a target='_blink' href="http://127.0.0.1:5502/Sitecopy/1027_WishBlue%20%EC%99%84%EC%84%B1/index.html" className='fkfk'></a></SwiperSlide>
      <SwiperSlide className='SlideBox4'><a target='_blink' href="http://127.0.0.1:5502/Sitecopy/21.%20191022_%EC%A0%9C%EC%B6%9C_HTML/index.html" className='fkfk'></a></SwiperSlide>
       박충희 타이핑 절대 네버 지우지마 비장의 한수야
       */}
      



      
      
      
      
      
    </Swiper>
    </div>
  )
}

export default Swiper1