import React from 'react'
import { Link } from 'react-router-dom'

const Category6 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/600?keyword=610"><p className='ctgP'>생활가전</p></Link>
        <Link to="/categories/600?keyword=611"><p className='ctgP'>가습기</p></Link>
        <Link to="/categories/600?keyword=612"><p className='ctgP'>청소기</p></Link>
        <Link to="/categories/600?keyword=613"><p className='ctgP'>공기청정기</p></Link>
        <Link to="/categories/600?keyword=614"><p className='ctgP'>선풍기/냉풍기</p></Link>
        <Link to="/categories/600?keyword=615"><p className='ctgP'>히터/온풍기</p></Link>
        <Link to="/categories/600?keyword=616"><p className='ctgP'>전기매트/장판</p></Link>
      </li>
      <li>
        <Link to="/categories/600?keyword=620"><p className='ctgP'>주방가전</p></Link>
        <Link to="/categories/600?keyword=621"><p className='ctgP'>인덕션/전기레인지</p></Link>
        <Link to="/categories/600?keyword=622"><p className='ctgP'>전기밥솥</p></Link>
        <Link to="/categories/600?keyword=623"><p className='ctgP'>커피머신</p></Link>
        <Link to="/categories/600?keyword=624"><p className='ctgP'>에어프라이어</p></Link>
        <Link to="/categories/600?keyword=625"><p className='ctgP'>토스터</p></Link>
        <Link to="/categories/600?keyword=626"><p className='ctgP'>전자레인지</p></Link>
      </li>
    </ul>

  )
}

export default Category6