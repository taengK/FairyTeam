import React from 'react'
import Logo from '../../Images/Logo.png'

import { Link } from 'react-router-dom'




const Head = () => {
  return (
    <div className='head'>
        <div className='LogoBox'><Link to='/'><img src={Logo} alt="" className='LogoImg'/></Link></div>
        <div className='inputBox'><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요'/></div>
      <ul>
        <li><Link to='/Signup'><p>회원가입</p></Link></li>
        <li><Link to='/Login'><p>로그인</p></Link></li>
        <li><Link to='/Mypage'><p>마이페이지</p></Link></li>
        <li><Link to='/Love'><p>찜목록</p></Link></li>
        <li><Link to='/Detaill'><p>상세페이지</p></Link></li>
      </ul>
    </div>
  )
}

export default Head