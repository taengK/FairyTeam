import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TodayProd from './TodayProd';
import Swiper1 from './Swiper1';




const Main = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
     
    
    axios.post('http://localhost:8888/db/recent')
      .then((res) => {

        console.log('정보는 :', res.data.recent);

        if (res.data.recent !== 'none') {

          // console.log(res.data.recent[0].prod_at);
          setData(res.data.recent
            // prod_name : res.data.recent.prod_name,
            // prod_price : res.data.recent.prod_price,
            // prod_photo : res.data.recent.prod_photo,
            // prod_seq : res.data.recent.prod_seq
          )
      
        } 
      })
      console.log(data);

},[])




  return (
    <div className='Main'>
      <section className='Main-sec01'>
      {data.map(item =>
        <Swiper1 
        photo={item.prod_photo}
          seq={item.prod_seq}>

        </Swiper1>
        )}
      </section>
      <h2>오늘의 물품상품</h2>
      <section className='MainCtgCtn'>
      {data.map(item =>
        <TodayProd
          name={item.prod_name}
          price={item.prod_price}
          photo={item.prod_photo}
          seq={item.prod_seq}
        ></TodayProd>
        )}
        
      </section>
    </div>
  )
}

export default Main