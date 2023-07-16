import React from 'react'
import { Link } from 'react-router-dom'

const Category7 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/700?keyword=710"><h4>골프</h4></Link>
        <p><Link to="/categories/700?keyword=711">골프채</Link></p>
        <p><Link to="/categories/700?keyword=712">골프 남성 의류</Link></p>
        <p><Link to="/categories/700?keyword=713">골프 여성 의류</Link></p>
        <p><Link to="/categories/700?keyword=714">골프백</Link></p>
        <p><Link to="/categories/700?keyword=715">골프 공</Link></p>
      </li>
      <li>
        <Link to="/categories/700?keyword=720"><h4>캠핑</h4></Link>
        <p><Link to="/categories/700?keyword=721">캠핑 의자/테이블</Link></p>
        <p><Link to="/categories/700?keyword=722">캠핑 취사용품</Link></p>
        <p><Link to="/categories/700?keyword=723">캠핑 랜턴</Link></p>
        <p><Link to="/categories/700?keyword=724">침낭/매트/해먹</Link></p>
        <p><Link to="/categories/700?keyword=725">텐트/그늘막</Link></p>
        <p><Link to="/categories/700?keyword=726">기타 캠핑 용품</Link></p>
      </li>
      <li>
        <Link to="/categories/700?keyword=730"><h4>낚시</h4></Link>
        <p><Link to="/categories/700?keyword=731">공통 낚시 장비</Link></p>
        <p><Link to="/categories/700?keyword=732">바다 낚시</Link></p>
        <p><Link to="/categories/700?keyword=733">민물 낚시</Link></p>
        <p><Link to="/categories/700?keyword=734">낚시 의류 및 기타 용품</Link></p>

      </li>
      <li>
        <Link to="/categories/700?keyword=740"><h4>등산/클라이밍</h4></Link>
        <p><Link to="/categories/700?keyword=741">남성 등산복</Link></p>
        <p><Link to="/categories/700?keyword=742">여성 등산복</Link></p>
        <p><Link to="/categories/700?keyword=743">등산 가방</Link></p>
        <p><Link to="/categories/700?keyword=744">암벽/클라이밍</Link></p>
        <p><Link to="/categories/700?keyword=745">기타 등산 용품</Link></p>

      </li>
    </ul>

  )
}

export default Category7