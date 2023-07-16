import React from 'react'
import { Link } from 'react-router-dom'

const Category11 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/1100?keyword=1110"><h4>주방용품</h4></Link>
        <p><Link to="/categories/1100?keyword=1111">그릇/홈세트</Link></p>
        <p><Link to="/categories/1100?keyword=1112">잔/컵</Link></p>
        <p><Link to="/categories/1100?keyword=1113">텀블러/물병</Link></p>
        <p><Link to="/categories/1100?keyword=1114">냄비/프라이팬</Link></p>
        <p><Link to="/categories/1100?keyword=1115">조리도구</Link></p>
        <p><Link to="/categories/1100?keyword=1116">보관/밀폐용기</Link></p>
        <p><Link to="/categories/1100?keyword=1117">커피용품</Link></p>
      </li>
      <li>
        <Link to="/categories/1100?keyword=1120"><h4>욕실용품</h4></Link>
        <p><Link to="/categories/1100?keyword=1121">구강/면도용품</Link></p>
        <p><Link to="/categories/1100?keyword=1122">샤워/목욕용품</Link></p>
        <p><Link to="/categories/1100?keyword=1123">수건/타월</Link></p>
        <p><Link to="/categories/1100?keyword=1124">욕실수납/정리</Link></p>

      </li>
    </ul>

  )
}

export default Category11