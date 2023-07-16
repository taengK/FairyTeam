import React from 'react'
import { Link } from 'react-router-dom'

const Category4 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/400?keyword=410"><h4>여성가방</h4></Link>
        <p><Link to="/categories/400?keyword=411">클러치백</Link></p>
        <p><Link to="/categories/400?keyword=412">숄더백</Link></p>
        <p><Link to="/categories/400?keyword=413">크로스백</Link></p>
        <p><Link to="/categories/400?keyword=414">토트백</Link></p>
        <p><Link to="/categories/400?keyword=415">백팩</Link></p>

      </li>
      <li>
        <Link to="/categories/400?keyword=420"><h4>남성가방</h4></Link>
        <p><Link to="/categories/400?keyword=421">클러치백</Link></p>
        <p><Link to="/categories/400?keyword=422">숄더백</Link></p>
        <p><Link to="/categories/400?keyword=423">크로스백</Link></p>
        {/* <p><Link to="/categories/400?keyword=424">브리프케이스</Link></p> */}
        <p><Link to="/categories/400?keyword=425">백팩</Link></p>

      </li>
    </ul>

  )
}

export default Category4