import React from 'react'
import { Link } from 'react-router-dom'


const CategoryList = () => {


  return (

    <ul >
      <li >
        <Link to="/categories/100?keyword=110"><p className='ctgPH'>아우터</p></Link>
        <Link to="/categories/100?keyword=111"><p className='ctgP'>패딩</p></Link>
        <Link to="/categories/100?keyword=112"><p className='ctgP'>점퍼</p></Link>
        <Link to="/categories/100?keyword=113"><p className='ctgP'>코트</p></Link>
        <Link to="/categories/100?keyword=114"><p className='ctgP'>자켓</p></Link>
        <Link to="/categories/100?keyword=115"><p className='ctgP'>가디건</p></Link>
        <Link to="/categories/100?keyword=116"><p className='ctgP'>조끼</p></Link>
      </li>
      <li>
        <Link to="/categories/100?keyword=120"><p className='ctgPH'>상의</p></Link>
        <Link to="/categories/100?keyword=121"><p className='ctgP'>니트/스웨터</p></Link>
        <Link to="/categories/100?keyword=122"><p className='ctgP'>후드티/후드집업</p></Link>
        <Link to="/categories/100?keyword=123"><p className='ctgP'>맨투맨</p></Link>
        <Link to="/categories/100?keyword=124"><p className='ctgP'>블라우스</p></Link>
        <Link to="/categories/100?keyword=125"><p className='ctgP'>셔츠</p></Link>
        <Link to="/categories/100?keyword=127"><p className='ctgP'>긴팔 티셔츠</p></Link>
        <Link to="/categories/100?keyword=126"><p className='ctgP'>반팔 티셔츠</p></Link>
      </li>
      <li>
        <Link to="/categories/100?keyword=130"><p className='ctgPH'>하의</p></Link>
        <Link to="/categories/100?keyword=132"><p className='ctgP'>슬랙스</p></Link>
        <Link to="/categories/100?keyword=133"><p className='ctgP'>면바지</p></Link>
        <Link to="/categories/100?keyword=134"><p className='ctgP'>반바지</p></Link>
        <Link to="/categories/100?keyword=131"><p className='ctgP'>청바지</p></Link>
        <Link to="/categories/100?keyword=135"><p className='ctgP'>트레이닝</p></Link>
        <Link to="/categories/100?keyword=136"><p className='ctgP'>레깅스</p></Link>
      </li>
    </ul>


  )
}

export default CategoryList
