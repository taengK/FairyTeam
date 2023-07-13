import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Beauty = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 900 && item.category_seq < 1000))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    // let superC = superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200)

    if (searchParams.get('keyword') == 910) {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 910 && item.category_seq < 919))
    } else if (searchParams.get('keyword') == 920) {
      setSuperC(superCate.filter(item => item.category_seq >= 920 && item.category_seq < 929))
    } else if (searchParams.get('keyword') == 930) {
      setSuperC(superCate.filter(item => item.category_seq >= 930 && item.category_seq < 939))
    } else if (searchParams.get('keyword') == 940) {
      setSuperC(superCate.filter(item => item.category_seq >= 940 && item.category_seq < 949))
    } else if (searchParams.get('keyword') == 950) {
      setSuperC(superCate.filter(item => item.category_seq >= 960 && item.category_seq < 969))
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

export default Beauty