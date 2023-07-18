import React from 'react'
import { Link } from 'react-router-dom'

const Category10 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/1000?keyword=1010"><p className='ctgPH'>가구</p></Link>
        <Link to="/categories/1000?keyword=1011"><p className='ctgP'>거실가구</p></Link>
        <Link to="/categories/1000?keyword=1012"><p className='ctgP'>침실가구</p></Link>
        <Link to="/categories/1000?keyword=1013"><p className='ctgP'>학생/서재/사무용가구</p></Link>
        <Link to="/categories/1000?keyword=1014"><p className='ctgP'>선반/수납 가구</p></Link>
        <Link to="/categories/1000?keyword=1015"><p className='ctgP'>주방가구</p></Link>

      </li>
      <li>
        <Link to="/categories/1000?keyword=1020"><p className='ctgPH'>인테리어소품</p></Link>
        <Link to="/categories/1000?keyword=1021"><p className='ctgP'>포스터/그림/액자</p></Link>
        <Link to="/categories/1000?keyword=1022"><p className='ctgP'>디퓨저/캔들</p></Link>
        <Link to="/categories/1000?keyword=1023"><p className='ctgP'>쿠션/방석</p></Link>
        <Link to="/categories/1000?keyword=1024"><p className='ctgP'>탁상/벽시계</p></Link>
        <Link to="/categories/1000?keyword=1025"><p className='ctgP'>거울</p></Link>
        <Link to="/categories/1000?keyword=1026"><p className='ctgP'>기타 인테리어 소품</p></Link>
      </li>
    </ul>

  )
}

export default Category10