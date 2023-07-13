import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './CategoryCSS.css'
import CategoryTable from './CategoryTable';


const Digital = () => {
  
  // useEffect(function, deps)
  // deps 가 없으면 항상
  // deps 가 빈 배열 [] 이면 렌더링 시에 동작함
  // deps 에 배열이 있으면 배열의 값이 변할 때 동작함


  const [categorySeq, setCategorySeq] = useState();
  const [superCate, setSuperCate] = useState([]);
  
  
  // WomanClothes 첫 렌더링 시 데이터 가져오는 useEffect

  useEffect(()=>{
    
    axios.post('http://localhost:8888/db/categories',{
      categorySeq : categorySeq
    })
    .then((res)=>{
      
      if (res.data.result !== undefined) {
        
        console.log(res.data.result);
        
        setSuperCate(res.data.result)

        console.log(superCate); 
        

      } else{
        console.log('nono');
      }
    })
    
  },[])
  

// 확인용 로그
//  console.log(superCate);

 const superC = superCate.filter(item=>item.super_category === 500)

  
  
    return (
      
      //test start
      <div>
            
        <div className='container'>
            {superC.map(item=>
                <CategoryTable key={item.prod_barcode}
                name ={item.prod_name} 
                price={item.prod_price}
                photo={item.prod_photo}
                ></CategoryTable>)}
        </div>
        
       

          {/* 중분류 선택 시 category_seq 가 100이 아니면서 */}

     
    </div>


              // test end

  )
}

export default Digital