import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TodayProd = ({name, price, photo, seq}) => {



  






  return (
    <div className='ctgItem'>
    {/* <div>
      <h2>오늘의 물품상품</h2>
    </div> */}

    {/* <div> */}
          <Link to = {`/Detaill/${seq}`} key={seq}>

      <table>
        <tbody>
          <tr>
            <td className='ctgImgBox' style={{ backgroundImage: `url(${photo})` }}></td>
          </tr>
          <tr>
            <td data-name="VIEW MORE" className='ctgbtn'><h6>{name}</h6><p>{price}</p></td>
          </tr>
        </tbody>
        
      </table>
      </Link>
    </div>
    // </div>
  )
}

export default TodayProd