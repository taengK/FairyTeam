import React from 'react'
import Login from '../Head/Login'
import SignUp from '../Head/SignUp'
import BookMark from '../Head/BookMark'
import Love from './Love'



const Head = () => {
  return (
    <div className='head'>
      <ul>
        <li><div>LOGO </div></li>
        <li><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요'/></li>
        <li><a href="#"><SignUp/></a></li>
        <li><a href="#"><Login/></a></li>
        <li><a href="#"><BookMark/></a></li>
        <li><a href="#"><Love/></a></li>
        
      </ul>


    </div>
  )
}

export default Head