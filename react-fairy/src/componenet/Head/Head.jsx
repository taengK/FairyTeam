import React from 'react'
import Login from '../../page/Login'
import SignUp from '../../page/SignUp'
import Mypage from '../../page/Mypage'
import Love from '../../page/Love'

import { Link } from 'react-router-dom'




const Head = () => {
  return (
    <div className='head'>+
      <ul>
        <li><div><img src="/" alt="" /> </div></li>
        <li><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요'/></li>
        <li><Link to='/Signup'>회원가입</Link></li>
        <li><Link to='/Login'>로그인</Link></li>
        <li><Link to='/Mypage'>마이페이지</Link></li>
        <li><Link to='/Love'>찜 목록</Link></li>
        
      </ul>


    </div>
  )
}

export default Head