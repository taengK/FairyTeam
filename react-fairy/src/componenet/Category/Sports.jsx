import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Sports = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 700 && item.category_seq < 800))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    // let superC = superCate.filter(item => item.category_seq >= 100 && item.category_seq < 200)

    if (searchParams.get('keyword') == 710) {
      // console.log('keyword 110 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 710 && item.category_seq < 719))
    } else if (searchParams.get('keyword') == 711) {
      setSuperC(superCate.filter(item => item.category_seq==711))
    } else if (searchParams.get('keyword') == 712) {
      setSuperC(superCate.filter(item => item.category_seq==712))
    } else if (searchParams.get('keyword') == 713) {
      setSuperC(superCate.filter(item => item.category_seq==713))
    } else if (searchParams.get('keyword') == 714) {
      setSuperC(superCate.filter(item => item.category_seq==714))
    } else if (searchParams.get('keyword') == 715) {
      setSuperC(superCate.filter(item => item.category_seq==715))
    } else if (searchParams.get('keyword') == 716) {
      setSuperC(superCate.filter(item => item.category_seq==716))
    } else if (searchParams.get('keyword') == 717) {
      setSuperC(superCate.filter(item => item.category_seq==717))
    } else if (searchParams.get('keyword') == 718) {
      setSuperC(superCate.filter(item => item.category_seq==718))
    } else if (searchParams.get('keyword') == 719) {
      setSuperC(superCate.filter(item => item.category_seq==719))
    } else if (searchParams.get('keyword') == 720) {
      setSuperC(superCate.filter(item => item.category_seq >= 720 && item.category_seq < 729))
    } else if (searchParams.get('keyword') == 721) {
      setSuperC(superCate.filter(item => item.category_seq==721))
    } else if (searchParams.get('keyword') == 722) {
      setSuperC(superCate.filter(item => item.category_seq==722))
    } else if (searchParams.get('keyword') == 723) {
      setSuperC(superCate.filter(item => item.category_seq==723))
    } else if (searchParams.get('keyword') == 724) {
      setSuperC(superCate.filter(item => item.category_seq==724))
    } else if (searchParams.get('keyword') == 725) {
      setSuperC(superCate.filter(item => item.category_seq==725))
    } else if (searchParams.get('keyword') == 726) {
      setSuperC(superCate.filter(item => item.category_seq==726))
    } else if (searchParams.get('keyword') == 727) {
      setSuperC(superCate.filter(item => item.category_seq==727))
    } else if (searchParams.get('keyword') == 728) {
      setSuperC(superCate.filter(item => item.category_seq==728))
    } else if (searchParams.get('keyword') == 729) {
      setSuperC(superCate.filter(item => item.category_seq==729))
    } else if (searchParams.get('keyword') == 730) {
      setSuperC(superCate.filter(item => item.category_seq >= 730 && item.category_seq < 739))
    } else if (searchParams.get('keyword') == 731) {
      setSuperC(superCate.filter(item => item.category_seq==731))
    } else if (searchParams.get('keyword') == 732) {
      setSuperC(superCate.filter(item => item.category_seq==732))
    } else if (searchParams.get('keyword') == 733) {
      setSuperC(superCate.filter(item => item.category_seq==733))
    } else if (searchParams.get('keyword') == 734) {
      setSuperC(superCate.filter(item => item.category_seq==734))
    } else if (searchParams.get('keyword') == 735) {
      setSuperC(superCate.filter(item => item.category_seq==735))
    } else if (searchParams.get('keyword') == 736) {
      setSuperC(superCate.filter(item => item.category_seq==736))
    } else if (searchParams.get('keyword') == 737) {
      setSuperC(superCate.filter(item => item.category_seq==737))
    } else if (searchParams.get('keyword') == 738) {
      setSuperC(superCate.filter(item => item.category_seq==738))
    } else if (searchParams.get('keyword') == 739) {
      setSuperC(superCate.filter(item => item.category_seq==739))
    } else if (searchParams.get('keyword') == 740) {
      setSuperC(superCate.filter(item => item.category_seq >= 750 && item.category_seq < 759))
    } else if (searchParams.get('keyword') == 741) {
      setSuperC(superCate.filter(item => item.category_seq===751))
    } else if (searchParams.get('keyword') == 742) {
      setSuperC(superCate.filter(item => item.category_seq==752))
    } else if (searchParams.get('keyword') == 743) {
      setSuperC(superCate.filter(item => item.category_seq==753))
    } else if (searchParams.get('keyword') == 744) {
      setSuperC(superCate.filter(item => item.category_seq==754))
    } else if (searchParams.get('keyword') == 745) {
      setSuperC(superCate.filter(item => item.category_seq==755))
    } else if (searchParams.get('keyword') == 746) {
      setSuperC(superCate.filter(item => item.category_seq==756))
    } else if (searchParams.get('keyword') == 747) {
      setSuperC(superCate.filter(item => item.category_seq==757))
    } else if (searchParams.get('keyword') == 748) {
      setSuperC(superCate.filter(item => item.category_seq==758))
    } else if (searchParams.get('keyword') == 749) {
      setSuperC(superCate.filter(item => item.category_seq==759))
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

      {/* 

          중분류 선택 시 category_seq 가 100이 아니면서

        <h1>MF</h1>
        <div className='container2'>
            {barc2}
        </div> */}
    </div>

  )
}

export default Sports