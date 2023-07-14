import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const CategoryTable = ( {name, price, photo ,barc} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
    const nav = useNavigate()

    
    
    

    // useEffect(()=>{

        // setDetailProd({
        //     name : {name},
        //     price : {price},
        //     photo : {photo},
        //     barc : {barc}

        // })
    // }, [])
    
    // console.log(name);
  

    // console.log([name]);

    // const sendInfo = (e)=>{
    //     nav(`/Detaill/?keyword=${barc}`)

    //     // {prodInfo.map(item =>
    //     //     <Detaill key={item.prodBarc}
    //     //     name = {item.prodName}
    //     //     price = {item.prodPrice}
    //     //     photo = {item.prodPhoto}
    //     //     barc = {item.prodBarc}>
    //     //     </Detaill>)}
    //     // nav(`/Detaill/${barc}`)
    // }

    return (

        
//    <Context.Provider value = {{prodInfo, setProdInfo}}>
<div className='ctgItem'>

    <Link to = {`/Detaill/${barc}`} key={barc}>

        <table>
            <tbody>
                <tr>
                    <td className='ctgImgBox' style={{backgroundImage:`url(${photo})`}}></td>
                </tr>
                {/* <tr className='ctgCPBox'>
                    <td className='ctgCttBox'>{name}</td>
                    <td className='ctgPriBox'>{price}</td>
                </tr> */}
                <tr >
                    <td data-name="VIEW MORE" className='ctgbtn' ><h6>{name}</h6><p>{price}</p></td>
                </tr>
            </tbody>
        </table>
    </Link>
    
    </div>
    // </Context.Provider>
    )
}

export default CategoryTable