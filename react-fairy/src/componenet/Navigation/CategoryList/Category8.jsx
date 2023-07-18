import React from 'react'
import { Link } from 'react-router-dom'

const Category8 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/800?keyword=810"><p className='ctgPH'>도서</p></Link>
        <Link to="/categories/800?keyword=811"><p className='ctgP'>시/소설</p></Link>
        <Link to="/categories/800?keyword=812"><p className='ctgP'>자기계발</p></Link>
        <Link to="/categories/800?keyword=813"><p className='ctgP'>교양/인문</p></Link>
        <Link to="/categories/800?keyword=814"><p className='ctgP'>경제/경영</p></Link>
        
      </li>
      <li>
        <Link to="/categories/800?keyword=820"><p className='ctgPH'>상품권</p></Link>
        <Link to="/categories/800?keyword=821"><p className='ctgP'>문화/도서</p></Link>
        <Link to="/categories/800?keyword=822"><p className='ctgP'>백화점</p></Link>
        {/* <p className='ctgP'><Link to="/categories/800?keyword=823">기타 상품권</Link></p> */}
        {/* <p className='ctgP'><Link to="/categories/800?keyword=815">예술/디자인</Link></p>
                        <p className='ctgP'><Link to="/categories/800?keyword=816">여행/취미/레저/건강</Link></p>
                        <p className='ctgP'><Link to="/categories/800?keyword=817">과학/IT</Link></p>
                        <p className='ctgP'><Link to="/categories/800?keyword=818">기타</Link></p> */}
      </li>
    </ul>

  )
}

export default Category8