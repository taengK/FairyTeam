import React from 'react'


const NavList = () => {
  return (
    <div className='Navi'>
      <div className='ctg'>category
        <ul className='ctgNav'>
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
        </ul>
      </div>
        <ul>
            <li><a href="#!"><p>이벤트</p></a></li>
            <li><a href="#!"><p>이달의행사</p></a></li>
            <li><a href="#!"><p>땡처리</p></a></li>
            <li><a href="#!"><p>출석체크</p></a></li>
        </ul>
    </div>
  )
}

export default NavList