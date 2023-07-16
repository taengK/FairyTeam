import React from 'react'
import { Link } from 'react-router-dom'

const Category10 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/1000?keyword=1010"><h4>가구</h4></Link>
        <p><Link to="/categories/1000?keyword=1011">거실가구</Link></p>
        <p><Link to="/categories/1000?keyword=1012">침실가구</Link></p>
        <p><Link to="/categories/1000?keyword=1013">학생/서재/사무용가구</Link></p>
        <p><Link to="/categories/1000?keyword=1014">선반/수납 가구</Link></p>
        <p><Link to="/categories/1000?keyword=1015">주방가구</Link></p>

      </li>
      <li>
        <Link to="/categories/1000?keyword=1020"><h4>인테리어소품</h4></Link>
        <p><Link to="/categories/1000?keyword=1021">포스터/그림/액자</Link></p>
        <p><Link to="/categories/1000?keyword=1022">디퓨저/캔들</Link></p>
        <p><Link to="/categories/1000?keyword=1023">쿠션/방석</Link></p>
        <p><Link to="/categories/1000?keyword=1024">탁상/벽시계</Link></p>
        <p><Link to="/categories/1000?keyword=1025">거울</Link></p>
        <p><Link to="/categories/1000?keyword=1026">기타 인테리어 소품</Link></p>
      </li>
    </ul>

  )
}

export default Category10