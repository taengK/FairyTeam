import React from 'react'
import { Link } from 'react-router-dom'


const CategoryList = () => {


  return (

    <ul>
      <li>
        <Link to="/categories/100?keyword=110"><h4 >아우터</h4></Link>
        <p><Link to="/categories/100?keyword=111">패딩</Link></p>
        <p><Link to="/categories/100?keyword=112">점퍼</Link></p>
        <p><Link to="/categories/100?keyword=113">코트</Link></p>
        <p><Link to="/categories/100?keyword=114">자켓</Link></p>
        <p><Link to="/categories/100?keyword=115">가디건</Link></p>
        <p><Link to="/categories/100?keyword=116">조끼</Link></p>
      </li>
      <li>
        <Link to="/categories/100?keyword=120"><h4 >상의</h4></Link>
        <p><Link to="/categories/100?keyword=121">니트/스웨터</Link></p>
        <p><Link to="/categories/100?keyword=122">후드티/후드집업</Link></p>
        <p><Link to="/categories/100?keyword=123">맨투맨</Link></p>
        <p><Link to="/categories/100?keyword=124">블라우스</Link></p>
        <p><Link to="/categories/100?keyword=125">셔츠</Link></p>
        <p><Link to="/categories/100?keyword=126">반팔 티셔츠</Link></p>
        <p><Link to="/categories/100?keyword=127">긴팔 티셔츠</Link></p>
      </li>
      <li>
        <Link to="/categories/100?keyword=130"><h4>하의</h4></Link>
        <p><Link to="/categories/100?keyword=131">청바지</Link></p>
        <p><Link to="/categories/100?keyword=132">슬랙스</Link></p>
        <p><Link to="/categories/100?keyword=133">면바지</Link></p>
        <p><Link to="/categories/100?keyword=134">반바지</Link></p>
        <p><Link to="/categories/100?keyword=135">트레이닝</Link></p>
        <p><Link to="/categories/100?keyword=136">레깅스</Link></p>
      </li>
    </ul>


  )
}

export default CategoryList
