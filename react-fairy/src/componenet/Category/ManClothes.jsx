import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../../css/page/Main.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const ManClothes = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 200 && item.category_seq < 300))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') === '210') {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 210 && item.category_seq < 220))
    } else if (searchParams.get('keyword') === '211') {
      setSuperC(superCate.filter(item => item.category_seq === 211))
    } else if (searchParams.get('keyword') === '212') {
      setSuperC(superCate.filter(item => item.category_seq === 212))
    } else if (searchParams.get('keyword') === '213') {
      setSuperC(superCate.filter(item => item.category_seq === 213))
    } else if (searchParams.get('keyword') === '214') {
      setSuperC(superCate.filter(item => item.category_seq === 214))
    } else if (searchParams.get('keyword') === '215') {
      setSuperC(superCate.filter(item => item.category_seq === 215))
    } else if (searchParams.get('keyword') === '216') {
      setSuperC(superCate.filter(item => item.category_seq === 216))
    }
    else if (searchParams.get('keyword') === '220') {
      setSuperC(superCate.filter(item => item.category_seq >= 220 && item.category_seq < 230))
    } else if (searchParams.get('keyword') === '221') {
      setSuperC(superCate.filter(item => item.category_seq === 221))
    } else if (searchParams.get('keyword') === '222') {
      setSuperC(superCate.filter(item => item.category_seq === 222))
    } else if (searchParams.get('keyword') === '223') {
      setSuperC(superCate.filter(item => item.category_seq === 223))
    } else if (searchParams.get('keyword') === '224') {
      setSuperC(superCate.filter(item => item.category_seq === 224))
    } else if (searchParams.get('keyword') === '225') {
      setSuperC(superCate.filter(item => item.category_seq === 225))
    } else if (searchParams.get('keyword') === '226'){
      setSuperC(superCate.filter(item => item.category_seq === 226))
    } else if (searchParams.get('keyword') === '227'){
      setSuperC(superCate.filter(item => item.category_seq === 227))
    }
     else if (searchParams.get('keyword') === '230') {
      setSuperC(superCate.filter(item => item.category_seq >= 230 && item.category_seq < 240))
    } else if (searchParams.get('keyword') === '231') {
      setSuperC(superCate.filter(item => item.category_seq === 231))
    } else if (searchParams.get('keyword') === '232') {
      setSuperC(superCate.filter(item => item.category_seq === 232))
    } else if (searchParams.get('keyword') === '233') {
      setSuperC(superCate.filter(item => item.category_seq === 233))
    } else if (searchParams.get('keyword') === '234') {
      setSuperC(superCate.filter(item => item.category_seq === 234))
    } else if (searchParams.get('keyword') === '235') {
      setSuperC(superCate.filter(item => item.category_seq === 235))
    }
      

  },[superCate])




  return (

    //test start
    <div>

      <div className='GridCtn'>
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

export default ManClothes