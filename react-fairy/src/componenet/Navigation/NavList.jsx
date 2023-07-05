import React from 'react'

const NavList = () => {
  return (
    <div className='Navi'>
      <div className='ctg'>카테고리</div>
        <ul>
            <li><a href="#"><p>이벤트</p></a></li>
            <li><a href="#"><p>이달의행사</p></a></li>
            <li><a href="#"><p>땡처리</p></a></li>
            <li><a href="#"><p>출석체크</p></a></li>
        </ul>
    </div>
  )
}

export default NavList