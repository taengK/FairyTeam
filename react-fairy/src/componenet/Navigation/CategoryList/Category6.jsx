import React from 'react'
import { Link } from 'react-router-dom'

const Category6 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/600?keyword=610"><h4>생활가전</h4></Link>
        <p><Link to="/categories/600?keyword=611">가습기</Link></p>
        <p><Link to="/categories/600?keyword=612">청소기</Link></p>
        <p><Link to="/categories/600?keyword=613">공기청정기</Link></p>
        <p><Link to="/categories/600?keyword=614">선풍기/냉풍기</Link></p>
        <p><Link to="/categories/600?keyword=615">히터/온풍기</Link></p>
        <p><Link to="/categories/600?keyword=616">전기매트/장판</Link></p>
      </li>
      <li>
        <Link to="/categories/600?keyword=620"><h4>주방가전</h4></Link>
        <p><Link to="/categories/600?keyword=621">인덕션/전기레인지</Link></p>
        <p><Link to="/categories/600?keyword=622">전기밥솥</Link></p>
        <p><Link to="/categories/600?keyword=623">커피머신</Link></p>
        <p><Link to="/categories/600?keyword=624">에어프라이어</Link></p>
        <p><Link to="/categories/600?keyword=625">토스터</Link></p>
        <p><Link to="/categories/600?keyword=626">전자레인지</Link></p>
      </li>
    </ul>

  )
}

export default Category6