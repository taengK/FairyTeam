import React from 'react'
import { Link } from 'react-router-dom'

const Category8 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/800?keyword=810"><h4>도서</h4></Link>
        <p><Link to="/categories/800?keyword=811">시/소설</Link></p>
        <p><Link to="/categories/800?keyword=812">자기계발</Link></p>
        <p><Link to="/categories/800?keyword=813">교양/인문</Link></p>
        <p><Link to="/categories/800?keyword=814">경제/경영</Link></p>
        {/* <p><Link to="/categories/800?keyword=815">예술/디자인</Link></p>
                        <p><Link to="/categories/800?keyword=816">여행/취미/레저/건강</Link></p>
                        <p><Link to="/categories/800?keyword=817">과학/IT</Link></p>
                        <p><Link to="/categories/800?keyword=818">기타</Link></p> */}
      </li>
      <li>
        <Link to="/categories/800?keyword=820"><h4>상품권</h4></Link>
        <p><Link to="/categories/800?keyword=821">문화/도서</Link></p>
        <p><Link to="/categories/800?keyword=822">백화점</Link></p>
        {/* <p><Link to="/categories/800?keyword=823">기타 상품권</Link></p> */}

      </li>
    </ul>

  )
}

export default Category8