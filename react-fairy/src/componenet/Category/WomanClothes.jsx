import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// test

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
const WomanClothes = () => {
  
  // useEffect(function, deps)
  // deps 가 없으면 항상
  // deps 가 빈 배열 [] 이면 렌더링 시에 동작함
  // deps 에 배열이 있으면 배열의 값이 변할 때 동작함


  const [categorySeq, setCategorySeq] = useState();
  const [superCate, setSuperCate] = useState([]);
  
  
  // WomanClothes 첫 렌더링 시 데이터 가져오는 useEffect

  useEffect(()=>{
    
    axios.post('http://localhost:8888/db/categories',{
      categorySeq : categorySeq
    })
    .then((res)=>{
      
      if (res.data.result !== undefined) {
        
        // console.log(res.data.result);
        
        setSuperCate(res.data.result)
        console.log(superCate);
        

      } else{
        console.log('nono');
      }
    })
    
  },[])
  

// 확인용 로그
//  console.log(superCate);

 
  
  
    return (
      
      //test start
      <div>
            
        <div className='container'>
            {superCate.map(item=>
                <CategoryTable key={item.prod_barcode}
                name ={item.prod_name} 
                price={item.prod_price}
                photo={item.prod_photo}
                ></CategoryTable>)}
        </div>
        
        {/* 

          중분류 선택 시 category_seq 가 100이 아니면서            

        <h1>MF</h1>
        <div className='container2'>
            {barc2}
        </div> */}
    </div>


              // test end










    // <div className='Main'>
    //   <section className='Main-sec02'>
     

              
    //      <ul>
    //           <li>
          
    //           <a href = "">
    //             <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDhfMzgg%2FMDAxNjU3MjY0MjI5MjM1.MuPAFpxxCeTP-fOwcaL-3VapQqPSOc_uAX4AJQdxftMg.bHWQGqo4bdG9dq3BzdB5Nm5Q2Xt967Fl37-0_82mVX4g.JPEG.barbie8368%2F1657264225930.jpg&type=a340' width ={200}height={200}/>
    //             <h3 align="center">aaa</h3><p align="center">CTT</p>
    //           </a>
    //           </li>

    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/251/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/253/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/254/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/255/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/256/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/257/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/258/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/259/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/260/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/261/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/270/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/263/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/264/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/265/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/266/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/267/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/268/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
    //           <li>
    //             <a href="#!"><img src='https://picsum.photos/id/269/150/150' alt="준비중.." /></a>
    //             <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    //           </li>
              
    //       </ul>

        
    //       </section>
    // </div>
  )
}

export default WomanClothes