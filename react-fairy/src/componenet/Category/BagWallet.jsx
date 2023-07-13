import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const BagWallet = (props) => {



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
  
  
  //     const [superC, setSuperC] = useState([])
  //     setSuperC(새로운 바꿔야하는 배열 )
  
  const [superC, setSuperC] = useState([])

  // superCate에 값이 들어간 이후로 시점 변경 
  useEffect(()=>{
    

    console.log('supercate', superCate)
    setSuperC(superCate.filter(item => item.category_seq >= 400 && item.category_seq < 500))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') === '410') {
      // console.log('keyword 410 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 410 && item.category_seq < 420))
    } else if (searchParams.get('keyword') === '411') {
      setSuperC(superCate.filter(item => item.category_seq === 411))
    } else if (searchParams.get('keyword') === '412') {
      setSuperC(superCate.filter(item => item.category_seq === 412))
    } else if (searchParams.get('keyword') === '413') {
      setSuperC(superCate.filter(item => item.category_seq === 413))
    } else if (searchParams.get('keyword') === '414') {
      setSuperC(superCate.filter(item => item.category_seq === 414))
    } else if (searchParams.get('keyword') === '415') {
      setSuperC(superCate.filter(item => item.category_seq === 415))
    } else if (searchParams.get('keyword') === '416') {
      setSuperC(superCate.filter(item => item.category_seq === 416))
    }
    else if (searchParams.get('keyword') === '420') {
      setSuperC(superCate.filter(item => item.category_seq >= 420 && item.category_seq < 430))
    } else if (searchParams.get('keyword') === '421') {
      setSuperC(superCate.filter(item => item.category_seq === 421))
    } else if (searchParams.get('keyword') === '422') {
      setSuperC(superCate.filter(item => item.category_seq === 422))
    } else if (searchParams.get('keyword') === '423') {
      setSuperC(superCate.filter(item => item.category_seq === 423))
    } else if (searchParams.get('keyword') === '424') {
      setSuperC(superCate.filter(item => item.category_seq === 424))
    } else if (searchParams.get('keyword') === '425') {
      setSuperC(superCate.filter(item => item.category_seq === 425))
    } else if (searchParams.get('keyword') === '426'){
      setSuperC(superCate.filter(item => item.category_seq === 426))
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

    </div>

  )
}

export default BagWallet