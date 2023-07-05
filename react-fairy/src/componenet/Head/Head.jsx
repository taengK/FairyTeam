import React from 'react'
import Login from '../../page/Login'
import SignUp from '../../page/SignUp'
import Mypage from '../../page/Mypage'
import Love from '../../page/Love'



const Head = () => {
  return (
    <div className='head'>
      <ul>
        <li><div><img src="/" alt="" /> </div></li>
        <li><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요'/></li>
        <li><a href="#"><SignUp/></a></li>
        <li><a href="#"><Login/></a></li>
        <li><a href="#"><Mypage/></a></li>
        <li><a href="#"><Love/></a></li>
        
      </ul>


    </div>
  )
}

export default Head