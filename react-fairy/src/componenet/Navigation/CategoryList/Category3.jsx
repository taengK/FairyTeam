import React from 'react'
import { Link } from 'react-router-dom'

const Category3 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/300?keyword=310"><p className='ctgPH'>남성화</p></Link>
        <Link to="/categories/300?keyword=311"><p className='ctgP'>샌들/슬리퍼</p></Link>
        <Link to="/categories/300?keyword=312"><p className='ctgP'>구두/로퍼</p></Link>
        <Link to="/categories/300?keyword=313"><p className='ctgP'>워커/부츠</p></Link>
      </li>
      <li>
        <Link to="/categories/300?keyword=320"><p className='ctgPH'>여성화</p></Link>
        <Link to="/categories/300?keyword=321"><p className='ctgP'>샌들/슬리퍼</p></Link>
        <Link to="/categories/300?keyword=322"><p className='ctgP'>구두</p></Link>
        <Link to="/categories/300?keyword=323"><p className='ctgP'>단화/플랫슈즈</p></Link>
        <Link to="/categories/300?keyword=324"><p className='ctgP'>워커/부츠</p></Link>
        <Link to="/categories/300?keyword=325"><p className='ctgP'>기타 여성화</p></Link>
      </li>
      <li>
        <Link to="/categories/300?keyword=330"><p className='ctgPH'>스포츠화</p></Link>
        <Link to="/categories/300?keyword=331"><p className='ctgP'>축구/풋살화</p></Link>
        <Link to="/categories/300?keyword=333"><p className='ctgP'>등산/트레킹화</p></Link>
        <Link to="/categories/300?keyword=335"><p className='ctgP'>기타 스포츠화</p></Link>
      </li>
    </ul>
  )
}

export default Category3