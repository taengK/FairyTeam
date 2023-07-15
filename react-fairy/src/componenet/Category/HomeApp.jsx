import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const HomeApp = (props) => {



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
  
  
  //     const [superC, setSuperC] = useState([])
  //     setSuperC(새로운 바꿔야하는 배열 )
  
  const [superC, setSuperC] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('keyword'));
  // superCate에 값이 들어간 이후로 시점 변경 
  useEffect(()=>{
    

    console.log('supercate', superCate)
    setSuperC(superCate.filter(item => item.category_seq >= 600 && item.category_seq < 700))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') == 610) {
      // console.log('keyword 610 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 610 && item.category_seq < 620))
    } else if (searchParams.get('keyword') == 611) {
      setSuperC(superCate.filter(item => item.category_seq === 611))
    } else if (searchParams.get('keyword') == 612) {
      setSuperC(superCate.filter(item => item.category_seq === 612))
    } else if (searchParams.get('keyword') == 613) {
      setSuperC(superCate.filter(item => item.category_seq === 613))
    } else if (searchParams.get('keyword') == 614) {
      setSuperC(superCate.filter(item => item.category_seq === 614))
    } else if (searchParams.get('keyword') == 615) {
      setSuperC(superCate.filter(item => item.category_seq === 615))
    } else if (searchParams.get('keyword') == 616) {
      setSuperC(superCate.filter(item => item.category_seq === 616))
    }
    else if (searchParams.get('keyword') === '620') {
      setSuperC(superCate.filter(item => item.category_seq >= 620 && item.category_seq < 630))
    } else if (searchParams.get('keyword') === '621') {
      setSuperC(superCate.filter(item => item.category_seq === 621))
    } else if (searchParams.get('keyword') === '622') {
      setSuperC(superCate.filter(item => item.category_seq === 622))
    } else if (searchParams.get('keyword') === '623') {
      setSuperC(superCate.filter(item => item.category_seq === 623))
    } else if (searchParams.get('keyword') === '624') {
      setSuperC(superCate.filter(item => item.category_seq === 624))
    } else if (searchParams.get('keyword') === '625') {
      setSuperC(superCate.filter(item => item.category_seq === 625))
    } else if (searchParams.get('keyword') === '626'){
      setSuperC(superCate.filter(item => item.category_seq === 626))
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

    </div>

  )
}

export default HomeApp