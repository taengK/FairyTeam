import React from 'react'
import { Link } from 'react-router-dom'

const Category9 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/900?keyword=910"><h4>스킨케어</h4></Link>
        <p><Link to="/categories/900?keyword=911">클렌징/스크럽</Link></p>
        <p><Link to="/categories/900?keyword=912">스킨/토너/미스트</Link></p>
        <p><Link to="/categories/900?keyword=913">로션/에멀젼</Link></p>
        <p><Link to="/categories/900?keyword=914">에센스/크림</Link></p>
        <p><Link to="/categories/900?keyword=915">팩/마스크</Link></p>
        <p><Link to="/categories/900?keyword=916">썬케어</Link></p>
      </li>
      <li>
        <Link to="/categories/900?keyword=920"><h4>색조 메이크업</h4></Link>
        <p><Link to="/categories/900?keyword=921">아이라이너/브로우</Link></p>
        <p><Link to="/categories/900?keyword=922">아이섀도우</Link></p>
        <p><Link to="/categories/900?keyword=923">마스카라</Link></p>
        <p><Link to="/categories/900?keyword=924">립틴트</Link></p>
        <p><Link to="/categories/900?keyword=925">립밤/립글로즈</Link></p>
        <p><Link to="/categories/900?keyword=926">립스틱</Link></p>
        <p><Link to="/categories/900?keyword=927">치크/블러셔</Link></p>
        {/* <p><Link to="/categories/900?keyword=928">기타</Link></p>                       */}
      </li>
      <li>
        <Link to="/categories/900?keyword=930"><h4>베이스 메이크업</h4></Link>
        <p><Link to="/categories/900?keyword=931">메이크업베이스</Link></p>
        <p><Link to="/categories/900?keyword=932">BB/CC크림</Link></p>
        <p><Link to="/categories/900?keyword=933">쿠션팩트</Link></p>
        <p><Link to="/categories/900?keyword=934">파운데이션</Link></p>
        <p><Link to="/categories/900?keyword=935">파우더/팩트</Link></p>
        <p><Link to="/categories/900?keyword=936">프라이머/컨실러</Link></p>
        {/* <p><Link to="/categories/900?keyword=937">기타</Link></p>                       */}
      </li>
      <li>
        <Link to="/categories/900?keyword=940"><h4>바디/헤어케어</h4></Link>
        <p><Link to="/categories/900?keyword=941">샴푸/린스</Link></p>
        <p><Link to="/categories/900?keyword=942">헤어에센스/트리트먼트</Link></p>
        <p><Link to="/categories/900?keyword=943">헤어스타일링</Link></p>
        {/* <p><Link to="/categories/900?keyword=944">염색</Link></p> */}
        {/* <p><Link to="/categories/900?keyword=945">바디클렌저/로션</Link></p>                       */}
        <p><Link to="/categories/900?keyword=946">핸드/풋케어</Link></p>

      </li>
      <li>
        <Link to="/categories/900?keyword=950"><h4>네일아트</h4></Link>
        <p><Link to="/categories/900?keyword=951">네일아트/스티커</Link></p>
        {/* <p><Link to="/categories/900?keyword=952">매니큐어/페디큐어</Link></p> */}
        <p><Link to="/categories/900?keyword=953">네일케어도구</Link></p>

      </li>
    </ul>


  )
}

export default Category9