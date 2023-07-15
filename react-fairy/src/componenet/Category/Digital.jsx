import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../../css/page/Main.css'
import CategoryTable from './CategoryTable';
import { useSearchParams } from 'react-router-dom';


const Digital = (props) => {



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
    setSuperC(superCate.filter(item => item.category_seq >= 500 && item.category_seq < 600))
    // 전체 물품 superCate 중에서
    // category_seq 가 100~199인 (여성의류인) 물품을 superC로 설정


    if (searchParams.get('keyword') === '510') {
      // console.log('keyword 510 enter')
      setSuperC(superCate.filter(item => item.category_seq >= 510 && item.category_seq < 520))
    } else if (searchParams.get('keyword') === '511') {
      setSuperC(superCate.filter(item => item.category_seq === 511))
    } else if (searchParams.get('keyword') === '512') {
      setSuperC(superCate.filter(item => item.category_seq === 512))
    } else if (searchParams.get('keyword') === '513') {
      setSuperC(superCate.filter(item => item.category_seq === 513))
    } else if (searchParams.get('keyword') === '514') {
      setSuperC(superCate.filter(item => item.category_seq === 514))
    } else if (searchParams.get('keyword') === '515') {
      setSuperC(superCate.filter(item => item.category_seq === 515))
    } 
    else if (searchParams.get('keyword') === '520') {
      setSuperC(superCate.filter(item => item.category_seq >= 520 && item.category_seq < 530))
    } else if (searchParams.get('keyword') === '521') {
      setSuperC(superCate.filter(item => item.category_seq === 521))
    } else if (searchParams.get('keyword') === '522') {
      setSuperC(superCate.filter(item => item.category_seq === 522))
    } else if (searchParams.get('keyword') === '523') {
      setSuperC(superCate.filter(item => item.category_seq === 523))
    }
     else if (searchParams.get('keyword') === '530') {
      setSuperC(superCate.filter(item => item.category_seq >= 530 && item.category_seq < 540))
    } else if (searchParams.get('keyword') === '531') {
      setSuperC(superCate.filter(item => item.category_seq === 531))
    } else if (searchParams.get('keyword') === '532') {
      setSuperC(superCate.filter(item => item.category_seq === 532))
    } else if (searchParams.get('keyword') === '533') {
      setSuperC(superCate.filter(item => item.category_seq === 533))
    }
    else if (searchParams.get('keyword') === '540') {
     setSuperC(superCate.filter(item => item.category_seq >= 540 && item.category_seq < 550))
   } else if (searchParams.get('keyword') === '541') {
     setSuperC(superCate.filter(item => item.category_seq === 541))
   } else if (searchParams.get('keyword') === '542') {
     setSuperC(superCate.filter(item => item.category_seq === 542))
   } else if (searchParams.get('keyword') === '543') {
     setSuperC(superCate.filter(item => item.category_seq === 543))
   } else if (searchParams.get('keyword') === '544') {
    setSuperC(superCate.filter(item => item.category_seq === 544))
   } else if (searchParams.get('keyword') === '545') {
    setSuperC(superCate.filter(item => item.category_seq === 545))
   }
   else if (searchParams.get('keyword') === '550') {
    setSuperC(superCate.filter(item => item.category_seq >= 550 && item.category_seq < 560))
  } else if (searchParams.get('keyword') === '551') {
    setSuperC(superCate.filter(item => item.category_seq === 551))
  } else if (searchParams.get('keyword') === '552') {
    setSuperC(superCate.filter(item => item.category_seq === 552))
  } else if (searchParams.get('keyword') === '553') {
    setSuperC(superCate.filter(item => item.category_seq === 553))
  } else if (searchParams.get('keyword') === '554') {
   setSuperC(superCate.filter(item => item.category_seq === 554))
  } else if (searchParams.get('keyword') === '555') {
   setSuperC(superCate.filter(item => item.category_seq === 555))
  } else if (searchParams.get('keyword') === '556') {
    setSuperC(superCate.filter(item => item.category_seq === 556))
  }
   else if (searchParams.get('keyword') === '560') {
    setSuperC(superCate.filter(item => item.category_seq >= 560 && item.category_seq < 570))
  } else if (searchParams.get('keyword') === '561') {
    setSuperC(superCate.filter(item => item.category_seq === 561))
  } else if (searchParams.get('keyword') === '562') {
    setSuperC(superCate.filter(item => item.category_seq === 562))
  } else if (searchParams.get('keyword') === '563') {
    setSuperC(superCate.filter(item => item.category_seq === 563))
  } else if (searchParams.get('keyword') === '564') {
   setSuperC(superCate.filter(item => item.category_seq === 564))
  } else if (searchParams.get('keyword') === '565') {
   setSuperC(superCate.filter(item => item.category_seq === 565))
  } else if (searchParams.get('keyword') === '566') {
    setSuperC(superCate.filter(item => item.category_seq === 566))
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

export default Digital