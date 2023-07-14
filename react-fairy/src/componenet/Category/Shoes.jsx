import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Shoes = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 300 && item.category_seq < 400))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') === '310') {
      // console.log('keyword 310 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 310 && item.category_seq < 320))
    } else if (searchParams.get('keyword') === '311') {
      setSuperC(superCate.filter(item => item.category_seq === 311))
    } else if (searchParams.get('keyword') === '312') {
      setSuperC(superCate.filter(item => item.category_seq === 312))
    } else if (searchParams.get('keyword') === '313') {
      setSuperC(superCate.filter(item => item.category_seq === 313))
    } else if (searchParams.get('keyword') === '314') {
      setSuperC(superCate.filter(item => item.category_seq === 314))
    }
    else if (searchParams.get('keyword') === '320') {
      setSuperC(superCate.filter(item => item.category_seq >= 320 && item.category_seq < 330))
    } else if (searchParams.get('keyword') === '321') {
      setSuperC(superCate.filter(item => item.category_seq === 321))
    } else if (searchParams.get('keyword') === '322') {
      setSuperC(superCate.filter(item => item.category_seq === 322))
    } else if (searchParams.get('keyword') === '323') {
      setSuperC(superCate.filter(item => item.category_seq === 323))
    } else if (searchParams.get('keyword') === '324') {
      setSuperC(superCate.filter(item => item.category_seq === 324))
    } else if (searchParams.get('keyword') === '325') {
      setSuperC(superCate.filter(item => item.category_seq === 325))
    }
     else if (searchParams.get('keyword') === '330') {
      setSuperC(superCate.filter(item => item.category_seq >= 330 && item.category_seq < 340))
    } else if (searchParams.get('keyword') === '331') {
      setSuperC(superCate.filter(item => item.category_seq === 331))
    } else if (searchParams.get('keyword') === '332') {
      setSuperC(superCate.filter(item => item.category_seq === 332))
    } else if (searchParams.get('keyword') === '333') {
      setSuperC(superCate.filter(item => item.category_seq === 333))
    } else if (searchParams.get('keyword') === '334') {
      setSuperC(superCate.filter(item => item.category_seq === 334))
    } else if (searchParams.get('keyword') === '335') {
      setSuperC(superCate.filter(item => item.category_seq === 335))
    }
      

  },[superCate])




  return (

    //test start
    <div>

      <div className='ctgCtn'>
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

export default Shoes