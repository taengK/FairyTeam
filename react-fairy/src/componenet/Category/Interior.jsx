import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../../css/page/Main.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Interior = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    // let superC = superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200)

    if (searchParams.get('keyword') == 1010) {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 1010 && item.category_seq < 1019))
    } else if (searchParams.get('keyword') == 1011) {
      setSuperC(superCate.filter(item => item.category_seq==1011))
    } else if (searchParams.get('keyword') == 1012) {
      setSuperC(superCate.filter(item => item.category_seq==1012))
    } else if (searchParams.get('keyword') == 1013) {
      setSuperC(superCate.filter(item => item.category_seq==1013))
    } else if (searchParams.get('keyword') == 1014) {
      setSuperC(superCate.filter(item => item.category_seq==1014))
    } else if (searchParams.get('keyword') == 1015) {
      setSuperC(superCate.filter(item => item.category_seq==1015))
    } else if (searchParams.get('keyword') == 1016) {
      setSuperC(superCate.filter(item => item.category_seq==1016))
    } else if (searchParams.get('keyword') == 1017) {
      setSuperC(superCate.filter(item => item.category_seq==1017))
    } else if (searchParams.get('keyword') == 1018) {
      setSuperC(superCate.filter(item => item.category_seq==1018))
    } else if (searchParams.get('keyword') == 1019) {
      setSuperC(superCate.filter(item => item.category_seq==1019))
    } else if (searchParams.get('keyword') == 1020) {
      setSuperC(superCate.filter(item => item.category_seq >= 1030 && item.category_seq < 1039))
    } else if (searchParams.get('keyword') == 1021) {
      setSuperC(superCate.filter(item => item.category_seq==1031))
    } else if (searchParams.get('keyword') == 1022) {
      setSuperC(superCate.filter(item => item.category_seq==1032))
    } else if (searchParams.get('keyword') == 1023) {
      setSuperC(superCate.filter(item => item.category_seq==1033))
    } else if (searchParams.get('keyword') == 1024) {
      setSuperC(superCate.filter(item => item.category_seq==1034))
    } else if (searchParams.get('keyword') == 1025) {
      setSuperC(superCate.filter(item => item.category_seq==1035))
    } else if (searchParams.get('keyword') == 1026) {
      setSuperC(superCate.filter(item => item.category_seq==1036))
    } else if (searchParams.get('keyword') == 1027) {
      setSuperC(superCate.filter(item => item.category_seq==1037))
    } else if (searchParams.get('keyword') == 1028) {
      setSuperC(superCate.filter(item => item.category_seq==1038))
    } else if (searchParams.get('keyword') == 1029) {
      setSuperC(superCate.filter(item => item.category_seq==1039))
    
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

export default Interior