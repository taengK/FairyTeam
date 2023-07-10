
import React from 'react'
import { Link } from 'react-router-dom'


// 

const Mypage = () => {
  return (
      <div  className='head'>
        <ul>
          <li><Link to='/Signup'><p>내상품</p></Link></li>
          <li><Link to='/Love'><p>찜목록</p></Link></li>
          <li><Link to='/Detaill'><p>채팅</p></Link></li>
        </ul>
      </div>
  )
}

export default Mypage
