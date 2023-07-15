import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryTable = ( {name, price, photo ,seq} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
    return (

        
//    <Context.Provider value = {{prodInfo, setProdInfo}}>
<div className='MainCtgItem'>

    <Link to = {`/Detaill/${seq}`} key={seq}>

        <table>
            <tbody>
                <tr>
                    <td className='MainCtgImgBox' style={{backgroundImage:`url(${photo})`}}></td>
                </tr>
                <tr>
                    <td data-name="VIEW MORE" className='MainCtgbtn'><h6>{name}</h6><p>{price}</p></td>
                </tr>
            </tbody>
        </table>
    </Link>
</div>
    // </Context.Provider>
    )
}

export default CategoryTable