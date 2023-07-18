import React from 'react'
import { Link } from 'react-router-dom'

const Category11 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/1100?keyword=1110"><p className='ctgPH'>주방용품</p></Link>
        <Link to="/categories/1100?keyword=1111"><p className='ctgP'>그릇/홈세트</p></Link>
        <Link to="/categories/1100?keyword=1112"><p className='ctgP'>잔/컵</p></Link>
        <Link to="/categories/1100?keyword=1113"><p className='ctgP'>텀블러/물병</p></Link>
        <Link to="/categories/1100?keyword=1114"><p className='ctgP'>냄비/프라이팬</p></Link>
        <Link to="/categories/1100?keyword=1115"><p className='ctgP'>조리도구</p></Link>
        <Link to="/categories/1100?keyword=1116"><p className='ctgP'>보관/밀폐용기</p></Link>
        <Link to="/categories/1100?keyword=1117"><p className='ctgP'>커피용품</p></Link>
      </li>
      <li>
        <Link to="/categories/1100?keyword=1120"><p className='ctgPH'>욕실용품</p></Link>
        <Link to="/categories/1100?keyword=1121"><p className='ctgP'>구강/면도용품</p></Link>
        <Link to="/categories/1100?keyword=1122"><p className='ctgP'>샤워/목욕용품</p></Link>
        <Link to="/categories/1100?keyword=1123"><p className='ctgP'>수건/타월</p></Link>
        <Link to="/categories/1100?keyword=1124"><p className='ctgP'>욕실수납/정리</p></Link>

      </li>
    </ul>

  )
}

export default Category11