import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../../css/page/Main.css'
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
    } else if (searchParams.get('keyword') == 911) {
      setSuperC(superCate.filter(item => item.category_seq==911))
    } else if (searchParams.get('keyword') == 912) {
      setSuperC(superCate.filter(item => item.category_seq==912))
    } else if (searchParams.get('keyword') == 913) {
      setSuperC(superCate.filter(item => item.category_seq==913))
    } else if (searchParams.get('keyword') == 914) {
      setSuperC(superCate.filter(item => item.category_seq==914))
    } else if (searchParams.get('keyword') == 915) {
      setSuperC(superCate.filter(item => item.category_seq==915))
    } else if (searchParams.get('keyword') == 916) {
      setSuperC(superCate.filter(item => item.category_seq==916))
    } else if (searchParams.get('keyword') == 917) {
      setSuperC(superCate.filter(item => item.category_seq==917))
    } else if (searchParams.get('keyword') == 918) {
      setSuperC(superCate.filter(item => item.category_seq==918))
    } else if (searchParams.get('keyword') == 919) {
      setSuperC(superCate.filter(item => item.category_seq==919))
    } else if (searchParams.get('keyword') == 920) {
      setSuperC(superCate.filter(item => item.category_seq >= 920 && item.category_seq < 929))
    } else if (searchParams.get('keyword') == 921) {
      setSuperC(superCate.filter(item => item.category_seq==921))
    } else if (searchParams.get('keyword') == 922) {
      setSuperC(superCate.filter(item => item.category_seq==922))
    } else if (searchParams.get('keyword') == 923) {
      setSuperC(superCate.filter(item => item.category_seq==923))
    } else if (searchParams.get('keyword') == 924) {
      setSuperC(superCate.filter(item => item.category_seq==924))
    } else if (searchParams.get('keyword') == 925) {
      setSuperC(superCate.filter(item => item.category_seq==925))
    } else if (searchParams.get('keyword') == 926) {
      setSuperC(superCate.filter(item => item.category_seq==926))
    } else if (searchParams.get('keyword') == 927) {
      setSuperC(superCate.filter(item => item.category_seq==927))
    } else if (searchParams.get('keyword') == 928) {
      setSuperC(superCate.filter(item => item.category_seq==928))
    } else if (searchParams.get('keyword') == 929) {
      setSuperC(superCate.filter(item => item.category_seq==929))
    } else if (searchParams.get('keyword') == 930) {
      setSuperC(superCate.filter(item => item.category_seq >= 930 && item.category_seq < 939))
    } else if (searchParams.get('keyword') == 931) {
      setSuperC(superCate.filter(item => item.category_seq==931))
    } else if (searchParams.get('keyword') == 932) {
      setSuperC(superCate.filter(item => item.category_seq==932))
    } else if (searchParams.get('keyword') == 933) {
      setSuperC(superCate.filter(item => item.category_seq==933))
    } else if (searchParams.get('keyword') == 934) {
      setSuperC(superCate.filter(item => item.category_seq==934))
    } else if (searchParams.get('keyword') == 935) {
      setSuperC(superCate.filter(item => item.category_seq==935))
    } else if (searchParams.get('keyword') == 936) {
      setSuperC(superCate.filter(item => item.category_seq==936))
    } else if (searchParams.get('keyword') == 937) {
      setSuperC(superCate.filter(item => item.category_seq==937))
    } else if (searchParams.get('keyword') == 938) {
      setSuperC(superCate.filter(item => item.category_seq==938))
    } else if (searchParams.get('keyword') == 939) {
      setSuperC(superCate.filter(item => item.category_seq==939))
    } else if (searchParams.get('keyword') == 940) {
      setSuperC(superCate.filter(item => item.category_seq >= 940 && item.category_seq < 949))
    } else if (searchParams.get('keyword') == 941) {
      setSuperC(superCate.filter(item => item.category_seq==941))
    } else if (searchParams.get('keyword') == 942) {
      setSuperC(superCate.filter(item => item.category_seq==942))
    } else if (searchParams.get('keyword') == 943) {
      setSuperC(superCate.filter(item => item.category_seq==943))
    } else if (searchParams.get('keyword') == 944) {
      setSuperC(superCate.filter(item => item.category_seq==944))
    } else if (searchParams.get('keyword') == 945) {
      setSuperC(superCate.filter(item => item.category_seq==945))
    } else if (searchParams.get('keyword') == 946) {
      setSuperC(superCate.filter(item => item.category_seq==946))
    } else if (searchParams.get('keyword') == 947) {
      setSuperC(superCate.filter(item => item.category_seq==947))
    } else if (searchParams.get('keyword') == 948) {
      setSuperC(superCate.filter(item => item.category_seq==948))
    } else if (searchParams.get('keyword') == 949) {
      setSuperC(superCate.filter(item => item.category_seq==949))
    } else if (searchParams.get('keyword') == 950) {
      setSuperC(superCate.filter(item => item.category_seq >= 960 && item.category_seq < 969))
    } else if (searchParams.get('keyword') == 951) {
      setSuperC(superCate.filter(item => item.category_seq==961))
    } else if (searchParams.get('keyword') == 952) {
      setSuperC(superCate.filter(item => item.category_seq==962))
    } else if (searchParams.get('keyword') == 953) {
      setSuperC(superCate.filter(item => item.category_seq==963))
    } else if (searchParams.get('keyword') == 954) {
      setSuperC(superCate.filter(item => item.category_seq==964))
    } else if (searchParams.get('keyword') == 955) {
      setSuperC(superCate.filter(item => item.category_seq==965))
    } else if (searchParams.get('keyword') == 956) {
      setSuperC(superCate.filter(item => item.category_seq==966))
    } else if (searchParams.get('keyword') == 957) {
      setSuperC(superCate.filter(item => item.category_seq==967))
    } else if (searchParams.get('keyword') == 958) {
      setSuperC(superCate.filter(item => item.category_seq==968))
    } else if (searchParams.get('keyword') == 959) {
      setSuperC(superCate.filter(item => item.category_seq==969))
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

export default Beauty