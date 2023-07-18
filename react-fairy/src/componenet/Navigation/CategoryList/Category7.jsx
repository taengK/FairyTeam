import React from 'react'
import { Link } from 'react-router-dom'

const Category7 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/700?keyword=710"><p className='ctgPH'>골프</p></Link>
        <Link to="/categories/700?keyword=711"><p className='ctgP'>골프채</p></Link>
        <Link to="/categories/700?keyword=712"><p className='ctgP'>골프 남성 의류</p></Link>
        <Link to="/categories/700?keyword=713"><p className='ctgP'>골프 여성 의류</p></Link>
        <Link to="/categories/700?keyword=714"><p className='ctgP'>골프백</p></Link>
        <Link to="/categories/700?keyword=715"><p className='ctgP'>골프 공</p></Link>
      </li>
      <li>
        <Link to="/categories/700?keyword=720"><p className='ctgPH'>캠핑</p></Link>
        <Link to="/categories/700?keyword=721"><p className='ctgP'>캠핑 의자/테이블</p></Link>
        <Link to="/categories/700?keyword=722"><p className='ctgP'>캠핑 취사용품</p></Link>
        <Link to="/categories/700?keyword=723"><p className='ctgP'>캠핑 랜턴</p></Link>
        <Link to="/categories/700?keyword=724"><p className='ctgP'>침낭/매트/해먹</p></Link>
        <Link to="/categories/700?keyword=725"><p className='ctgP'>텐트/그늘막</p></Link>
        <Link to="/categories/700?keyword=726"><p className='ctgP'>기타 캠핑 용품</p></Link>
      </li>
      <li>
        <Link to="/categories/700?keyword=730"><p className='ctgPH'>낚시</p></Link>
        <Link to="/categories/700?keyword=731"><p className='ctgP'>공통 낚시 장비</p></Link>
        <Link to="/categories/700?keyword=732"><p className='ctgP'>바다 낚시</p></Link>
        <Link to="/categories/700?keyword=733"><p className='ctgP'>민물 낚시</p></Link>
        <Link to="/categories/700?keyword=734"><p className='ctgP'>낚시 의류 및 기타 용품</p></Link>

      </li>
      <li>
        <Link to="/categories/700?keyword=740"><p className='ctgPH'>등산/클라이밍</p></Link>
        <Link to="/categories/700?keyword=741"><p className='ctgP'>남성 등산복</p></Link>
        <Link to="/categories/700?keyword=742"><p className='ctgP'>여성 등산복</p></Link>
        <Link to="/categories/700?keyword=743"><p className='ctgP'>등산 가방</p></Link>
        <Link to="/categories/700?keyword=744"><p className='ctgP'>암벽/클라이밍</p></Link>
        <Link to="/categories/700?keyword=745"><p className='ctgP'>기타 등산 용품</p></Link>

      </li>
    </ul>

  )
}

export default Category7