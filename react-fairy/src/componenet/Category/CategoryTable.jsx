import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTable = ( {name, price, photo ,barc} ) => {
    /*
        리액트에서 table 생성시
        tbody태그를 넣어주어야 개발자모드에서 에러가 나오지 않음
    */
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
                    <Link to={`/products/${barc}`}><td data-name="VIEW MORE" className='ctgbtn'><h6>{name}</h6><p>{price}</p></td></Link>
                </tr>
            </tbody>
        </table>
    </div>
   
    )
}

export default CategoryTable