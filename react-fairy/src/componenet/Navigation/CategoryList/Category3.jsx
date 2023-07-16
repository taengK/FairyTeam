import React from 'react'
import { Link } from 'react-router-dom'

const Category3 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/300?keyword=310"><h4>남성화</h4></Link>
        <p><Link to="/categories/300?keyword=311">샌들/슬리퍼</Link></p>
        <p><Link to="/categories/300?keyword=312">구두/로퍼</Link></p>
        <p><Link to="/categories/300?keyword=313">워커/부츠</Link></p>
      </li>
      <li>
        <Link to="/categories/300?keyword=320"><h4>여성화</h4></Link>
        <p><Link to="/categories/300?keyword=321">샌들/슬리퍼</Link></p>
        <p><Link to="/categories/300?keyword=322">구두</Link></p>
        <p><Link to="/categories/300?keyword=323">단화/플랫슈즈</Link></p>
        <p><Link to="/categories/300?keyword=324">워커/부츠</Link></p>
        <p><Link to="/categories/300?keyword=325">기타 여성화</Link></p>
      </li>
      <li>
        <Link to="/categories/300?keyword=330"><h4>스포츠화</h4></Link>
        <p><Link to="/categories/300?keyword=331">축구/풋살화</Link></p>
        <p><Link to="/categories/300?keyword=333">등산/트레킹화</Link></p>
        <p><Link to="/categories/300?keyword=335">기타 스포츠화</Link></p>
      </li>
    </ul>
  )
}

export default Category3