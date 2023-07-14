import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';








import { useSearchParams } from 'react-router-dom';

const CategoryTable = ( {name, price, photo ,barc} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */

        // const [product,setProduct] = useState();
    
        // useEffect(() => {
    
            
        //     axios.post('http://localhost:8888/db/products', {
        //         product : product
        //     })
        //     .then((res)=>{
              
        //       if (res.data.product !== undefined) {
                
        //         // console.log(res.data.product);
                
        //         setProduct(res.data.product)
                
        //         // 모든 품목 가져오기
        //         // console.log(superCate);
                
        
        //       } else{
        //         console.log('nono');
        //       }
        //     })
            
        //   },[])    

        

    return (

        
   
    <div className='ctgItem'>
        <table>
            <tbody>
                <tr>
                    <td className='ctgImgBox' style={{backgroundImage:`url(${photo})`}}></td>
                </tr>
                {/* <tr className='ctgCPBox'>
                    <td className='ctgCttBox'>{name}</td>
                    <td className='ctgPriBox'>{price}</td>
                </tr> */}
                <tr>
                    <Link to={`/Detaill/${barc}` }><td data-name="VIEW MORE" className='ctgbtn'><h6>{name}</h6><p>{price}</p></td></Link>
                    {/* {product.map(item =>
                    <Detaill name={item.prod_name}
                    content={item.prod_content}
                    price={item.prod_price}
                    photo={item.prod_photo}
                    barc={item.prod_barcode}
                    id={item.user_id}
                    status={item.prod_status}
                    seq={item.category_seq}
                    date={item.prod_at}
                    ></Detaill>)} */}
                </tr>
            </tbody>
        </table>
        
        {/* {product.map(item =>
          <Detaill name={item.prod_name}
            content={item.prod_content}
            price={item.prod_price}
            photo={item.prod_photo}
            barc={item.prod_barcode}
            id={item.user_id}
            status={item.prod_status}
            seq={item.category_seq}
            date={item.prod_at}
          ></Detaill>)} */}
          
        
      
      
    </div>
   
    )
}

export default CategoryTable