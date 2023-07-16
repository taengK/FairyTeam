import React from 'react'
import { Link } from 'react-router-dom'

const Category2 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/200?keyword=210"><h4>아우터</h4></Link>

        <p><Link to="/categories/200?keyword=211">패딩</Link></p>
        <p><Link to="/categories/200?keyword=212">점퍼</Link></p>
        <p><Link to="/categories/200?keyword=213">코트</Link></p>
        <p><Link to="/categories/200?keyword=214">자켓</Link></p>
        <p><Link to="/categories/200?keyword=215">가디건</Link></p>
        <p><Link to="/categories/200?keyword=216">조끼</Link></p>

      </li>
      <li>
        <Link to="/categories/200?keyword=220"><h4>상의</h4></Link>
        <p><Link to="/categories/200?keyword=221">니트/스웨터</Link></p>
        <p><Link to="/categories/200?keyword=222">후드티/후드집업</Link></p>
        <p><Link to="/categories/200?keyword=223">맨투맨</Link></p>
        <p><Link to="/categories/200?keyword=224">셔츠</Link></p>
        <p><Link to="/categories/200?keyword=225">반팔 티셔츠</Link></p>
        <p><Link to="/categories/200?keyword=226">긴팔 티셔츠</Link></p>
      </li>
      <li>
        <Link to="/categories/200?keyword=230"><h4>하의</h4></Link>
        <p><Link to="/categories/200?keyword=231">청바지</Link></p>
        <p><Link to="/categories/200?keyword=232">슬랙스</Link></p>
        <p><Link to="/categories/200?keyword=233">면바지</Link></p>
        <p><Link to="/categories/200?keyword=234">반바지</Link></p>
        <p><Link to="/categories/200?keyword=235">트레이닝</Link></p>
      </li>
    </ul>

  )
}

export default Category2