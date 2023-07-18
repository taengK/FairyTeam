import React from 'react'
import { Link } from 'react-router-dom'

const Category4 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/400?keyword=410"><p className='ctgPH'>여성가방</p></Link>
        <Link to="/categories/400?keyword=411"><p className='ctgP'>클러치백</p></Link>
        <Link to="/categories/400?keyword=412"><p className='ctgP'>숄더백</p></Link>
        <Link to="/categories/400?keyword=413"><p className='ctgP'>크로스백</p></Link>
        <Link to="/categories/400?keyword=414"><p className='ctgP'>토트백</p></Link>
        <Link to="/categories/400?keyword=415"><p className='ctgP'>백팩</p></Link>

      </li>
      <li>
        <Link to="/categories/400?keyword=420"><p className='ctgPH'>남성가방</p></Link>
        <Link to="/categories/400?keyword=421"><p className='ctgP'>클러치백</p></Link>
        <Link to="/categories/400?keyword=422"><p className='ctgP'>숄더백</p></Link>
        <Link to="/categories/400?keyword=423"><p className='ctgP'>크로스백</p></Link>
        <Link to="/categories/400?keyword=425"><p className='ctgP'>백팩</p></Link>
        {/* <p className='ctgP'><Link to="/categories/400?keyword=424">브리프케이스</Link></p> */}

      </li>
    </ul>

  )
}

export default Category4