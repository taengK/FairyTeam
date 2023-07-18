import React from 'react'
import { Link } from 'react-router-dom'

const Category2 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/200?keyword=210"><p className='ctgPH'>아우터</p></Link>

        <Link to="/categories/200?keyword=211"><p className='ctgP'>패딩</p></Link>
        <Link to="/categories/200?keyword=212"><p className='ctgP'>점퍼</p></Link>
        <Link to="/categories/200?keyword=213"><p className='ctgP'>코트</p></Link>
        <Link to="/categories/200?keyword=214"><p className='ctgP'>자켓</p></Link>
        <Link to="/categories/200?keyword=215"><p className='ctgP'>가디건</p></Link>
        <Link to="/categories/200?keyword=216"><p className='ctgP'>조끼</p></Link>

      </li>
      <li>
        <Link to="/categories/200?keyword=220"><p className='ctgPH'>상의</p></Link>
        <Link to="/categories/200?keyword=221"><p className='ctgP'>니트/스웨터</p></Link>
        <Link to="/categories/200?keyword=222"><p className='ctgP'>후드티/후드집업</p></Link>
        <Link to="/categories/200?keyword=223"><p className='ctgP'>맨투맨</p></Link>
        <Link to="/categories/200?keyword=224"><p className='ctgP'>셔츠</p></Link>
        <Link to="/categories/200?keyword=225"><p className='ctgP'>반팔 티셔츠</p></Link>
        <Link to="/categories/200?keyword=226"><p className='ctgP'>긴팔 티셔츠</p></Link>
      </li>
      <li>
        <Link to="/categories/200?keyword=230"><p className='ctgPH'>하의</p></Link>
        <Link to="/categories/200?keyword=231"><p className='ctgP'>청바지</p></Link>
        <Link to="/categories/200?keyword=232"><p className='ctgP'>슬랙스</p></Link>
        <Link to="/categories/200?keyword=233"><p className='ctgP'>면바지</p></Link>
        <Link to="/categories/200?keyword=234"><p className='ctgP'>반바지</p></Link>
        <Link to="/categories/200?keyword=235"><p className='ctgP'>트레이닝</p></Link>
      </li>
    </ul>

  )
}

export default Category2