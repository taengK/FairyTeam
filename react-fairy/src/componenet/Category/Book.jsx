import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Book = (props) => {



  // useEffect(function, deps)
  // deps 가 없으면 항상
  // deps 가 빈 배열 [] 이면 렌더링 시에 동작함
  // deps 에 배열이 있으면 배열의 값이 변할 때 동작함


  const [categorySeq, setCategorySeq] = useState();
  const [superCate, setSuperCate] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  
  // WomanClothes 첫 렌더링 시 데이터 가져오는 useEffect
  
  useEffect(() => {
    
    console.log(searchParams.get('keyword'))
    axios.post('http://localhost:8888/db/categories', {
      categorySeq: categorySeq
    })
    .then((res)=>{
      
      if (res.data.result !== undefined) {
        
        console.log(res.data.result);
        
        setSuperCate(res.data.result)
        
        // 모든 품목 가져오기
        console.log(superCate);
        

      } else{
        console.log('nono');
      }
    })
    
  },[props.check])
  

// 확인용 로그
//  console.log(superCate);

  // }
  // else if(/categories/100110){
  //   const superC = superCate.filter(item=>item.category_seq >= 110 && item.category_seq < 119)
  // }


  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('keyword'))

  
  //     const [superC, setSuperC] = useState([])
  //     setSuperC(새로운 바꿔야하는 배열 )
  
  const [superC, setSuperC] = useState([])

  // superCate에 값이 들어간 이후로 시점 변경 
  useEffect(()=>{
    

    console.log('supercate', superCate)
    setSuperC(superCate.filter(item => item.category_seq >= 800 && item.category_seq < 900))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    // let superC = superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200)

    if (searchParams.get('keyword') == 810) {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 810 && item.category_seq < 819))
    } else if (searchParams.get('keyword') == 811) {
      setSuperC(superCate.filter(item => item.category_seq==811))
    } else if (searchParams.get('keyword') == 812) {
      setSuperC(superCate.filter(item => item.category_seq==812))
    } else if (searchParams.get('keyword') == 813) {
      setSuperC(superCate.filter(item => item.category_seq==813))
    } else if (searchParams.get('keyword') == 814) {
      setSuperC(superCate.filter(item => item.category_seq==814))
    } else if (searchParams.get('keyword') == 815) {
      setSuperC(superCate.filter(item => item.category_seq==815))
    } else if (searchParams.get('keyword') == 816) {
      setSuperC(superCate.filter(item => item.category_seq==816))
    } else if (searchParams.get('keyword') == 817) {
      setSuperC(superCate.filter(item => item.category_seq==817))
    } else if (searchParams.get('keyword') == 818) {
      setSuperC(superCate.filter(item => item.category_seq==818))
    } else if (searchParams.get('keyword') == 819) {
      setSuperC(superCate.filter(item => item.category_seq==819))
    } else if (searchParams.get('keyword') == 820) {
      setSuperC(superCate.filter(item => item.category_seq >= 840 && item.category_seq < 849))
    } else if (searchParams.get('keyword') == 821) {
      setSuperC(superCate.filter(item => item.category_seq==841))
    } else if (searchParams.get('keyword') == 822) {
      setSuperC(superCate.filter(item => item.category_seq==842))
    } else if (searchParams.get('keyword') == 823) {
      setSuperC(superCate.filter(item => item.category_seq==843))
    } else if (searchParams.get('keyword') == 824) {
      setSuperC(superCate.filter(item => item.category_seq==844))
    } else if (searchParams.get('keyword') == 825) {
      setSuperC(superCate.filter(item => item.category_seq==845))
    } else if (searchParams.get('keyword') == 826) {
      setSuperC(superCate.filter(item => item.category_seq==846))
    } else if (searchParams.get('keyword') == 827) {
      setSuperC(superCate.filter(item => item.category_seq==847))
    } else if (searchParams.get('keyword') == 828) {
      setSuperC(superCate.filter(item => item.category_seq==848))
    } else if (searchParams.get('keyword') == 829) {
      setSuperC(superCate.filter(item => item.category_seq==849))
    } 
      

  },[superCate])




  return (

    //test start
    <div>

      <div className='MainCtgCtn'>
        {superC.map(item =>
          <CategoryTable seq={item.prod_seq}
            name={item.prod_name}
            price={item.prod_price}
            photo={item.prod_photo}
            barc={item.prod_barcode}
          ></CategoryTable>)}
      </div>

      {/* 

          중분류 선택 시 category_seq 가 100이 아니면서

        <h1>MF</h1>
        <div className='container2'>
            {barc2}
        </div> */}
    </div>

  )
}

export default Book