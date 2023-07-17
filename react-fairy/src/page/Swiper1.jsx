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
         <a target='_blank' href="http://127.0.0.1:5502/EX_HTML/suminJJIM.html"><h2>1EVENT</h2></a>
         
         
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
      <SwiperSlide className='SlideBox'><a href="http://127.0.0.1:5502/EX_HTML/suminJJIM.html" className='fkfk'></a></SwiperSlide>
      <SwiperSlide className='SlideBox'><a href="http://127.0.0.1:5502/EX_HTML/suminJJIM.html" className='fkfk'></a></SwiperSlide>
      <SwiperSlide className='SlideBox'><a href="http://127.0.0.1:5502/EX_HTML/suminJJIM.html" className='fkfk'></a></SwiperSlide>
      
      



      
      
      
      
      
    </Swiper>
    </div>
  )
}

export default Swiper1