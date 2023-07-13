import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const WomanClothes = (props) => {



  // useEffect(function, deps)
  // deps 가 없으면 항상
  // deps 가 빈 배열 [] 이면 렌더링 시에 동작함
  // deps 에 배열이 있으면 배열의 값이 변할 때 동작함


  const [categorySeq, setCategorySeq] = useState();
  const [superCate, setSuperCate] = useState([]);

  
  
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


  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('keyword'))

  
  //     const [superC, setSuperC] = useState([])
  //     setSuperC(새로운 바꿔야하는 배열 )
  
  const [superC, setSuperC] = useState([])

  // superCate에 값이 들어간 이후로 시점 변경 
  useEffect(()=>{
    

    console.log('supercate', superCate)
    setSuperC(superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') == 110) {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 110 && item.category_seq < 120))
    } else if (searchParams.get('keyword') == 111) {
      setSuperC(superCate.filter(item => item.category_seq == 111))
    } else if (searchParams.get('keyword') == 112) {
      setSuperC(superCate.filter(item => item.category_seq == 112))
    } else if (searchParams.get('keyword') == 113) {
      setSuperC(superCate.filter(item => item.category_seq == 113))
    } else if (searchParams.get('keyword') == 114) {
      setSuperC(superCate.filter(item => item.category_seq == 114))
    } else if (searchParams.get('keyword') == 115) {
      setSuperC(superCate.filter(item => item.category_seq == 115))
    } else if (searchParams.get('keyword') == 116) {
      setSuperC(superCate.filter(item => item.category_seq == 116))
    }
    else if (searchParams.get('keyword') == 120) {
      setSuperC(superCate.filter(item => item.category_seq >= 120 && item.category_seq < 130))
    } else if (searchParams.get('keyword') == 121) {
      setSuperC(superCate.filter(item => item.category_seq == 121))
    } else if (searchParams.get('keyword') == 122) {
      setSuperC(superCate.filter(item => item.category_seq == 122))
    } else if (searchParams.get('keyword') == 123) {
      setSuperC(superCate.filter(item => item.category_seq == 123))
    } else if (searchParams.get('keyword') == 124) {
      setSuperC(superCate.filter(item => item.category_seq == 124))
    } else if (searchParams.get('keyword') == 125) {
      setSuperC(superCate.filter(item => item.category_seq == 125))
    } else if (searchParams.get('keyword') == 126){
      setSuperC(superCate.filter(item => item.category_seq == 126))
    } else if (searchParams.get('keyword') == 127){
      setSuperC(superCate.filter(item => item.category_seq == 127))
    }
     else if (searchParams.get('keyword') == 130) {
      setSuperC(superCate.filter(item => item.category_seq >= 130 && item.category_seq < 140))
    } else if (searchParams.get('keyword') == 131) {
      setSuperC(superCate.filter(item => item.category_seq == 131))
    } else if (searchParams.get('keyword') ==132) {
      setSuperC(superCate.filter(item => item.category_seq == 132))
    } else if (searchParams.get('keyword') == 133) {
      setSuperC(superCate.filter(item => item.category_seq == 133))
    } else if (searchParams.get('keyword') == 134) {
      setSuperC(superCate.filter(item => item.category_seq == 134))
    } else if (searchParams.get('keyword') == 135) {
      setSuperC(superCate.filter(item => item.category_seq == 135))
    } else if (searchParams.get('keyword') == 136) {
      setSuperC(superCate.filter(item => item.category_seq == 136))
    }
      

  },[superCate])




  return (

    //test start
    <div>

      <div className='container'>
        {superC.map(item =>
          <CategoryTable key={item.prod_barcode}
            name={item.prod_name}
            price={item.prod_price}
            photo={item.prod_photo}
            barc={item.prod_barcode}
          ></CategoryTable>)}
      </div>

    </div>

  )
}

export default WomanClothes