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

const Main = () => {
  return (
    <div className='Main'>
      <section className='Main-sec01'>
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
      </section>
      <section className='Main-sec02'>
          <h2>오늘의 물품상품</h2>
          <ul>
              <li>
                <a href=""><img src='https://picsum.photos/id/250/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/251/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/253/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/254/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/255/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/256/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/257/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/258/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/259/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/260/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/261/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/270/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/263/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/264/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/265/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/266/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/267/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/268/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              <li>
                <a href=""><img src='https://picsum.photos/id/269/150/150' alt="준비중.." /></a>
                <a href="" data-name="VIEW MORE" class="btn"><h3>TIT</h3><p>CTT</p></a>
              </li>
              
          </ul>

          <button></button>
      </section>
    </div>
  )
}

export default Main