import React from 'react'
import { Link } from 'react-router-dom'

const Category5 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/500?keyword=510"><h4>휴대폰</h4></Link>
        <p><Link to="/categories/500?keyword=511">스마트폰</Link></p>
        <p><Link to="/categories/500?keyword=512">일반폰</Link></p>
        <p><Link to="/categories/500?keyword=513">케이스/보호필름/액세서리</Link></p>
        <p><Link to="/categories/500?keyword=514">케이블/충전기/주변기기</Link></p>
        {/* <p><Link to="/categories/500?keyword=515">기타 휴대폰</Link></p> */}
      </li>
      <li>
        <Link to="/categories/500?keyword=520"><h4>태블릿</h4></Link>
        <p><Link to="/categories/500?keyword=521">태블릿</Link></p>
        <p><Link to="/categories/500?keyword=522">케이스/보호필름/액세서리</Link></p>
        <p><Link to="/categories/500?keyword=523">케이블/충전기/주변기기</Link></p>

      </li>
      <li>
        <Link to="/categories/500?keyword=530"><h4>웨어러블</h4></Link>
        <p><Link to="/categories/500?keyword=531">스마트워치/밴드</Link></p>
        <p><Link to="/categories/500?keyword=532">케이스/보호필름/액세서리</Link></p>
        <p><Link to="/categories/500?keyword=533">케이블/충전기/주변기기</Link></p>

      </li>
      <li>
        <Link to="/categories/500?keyword=540"><h4>오디오/영상</h4></Link>
        <p><Link to="/categories/500?keyword=541">이어폰</Link></p>
        <p><Link to="/categories/500?keyword=542">헤드폰</Link></p>
        <p><Link to="/categories/500?keyword=543">스피커/앰프</Link></p>
        <p><Link to="/categories/500?keyword=544">오디오/홈시어터</Link></p>

      </li>
      <li>
        <Link to="/categories/500?keyword=550"><h4>PC/노트북</h4></Link>
        <p><Link to="/categories/500?keyword=551">데스크탑</Link></p>
        <p><Link to="/categories/500?keyword=552">노트북/넷북</Link></p>
        <p><Link to="/categories/500?keyword=553">모니터</Link></p>
        <p><Link to="/categories/500?keyword=554">키보드</Link></p>
        <p><Link to="/categories/500?keyword=555">마우스</Link></p>
        <p><Link to="/categories/500?keyword=556">기타 PC 주변기기</Link></p>

      </li>
      <li>
        <Link to="/categories/500?keyword=560"><h4>카메라/DSLR</h4></Link>
        <p><Link to="/categories/500?keyword=561">필름카메라</Link></p>
        <p><Link to="/categories/500?keyword=562">DSLR/미러리스</Link></p>
        <p><Link to="/categories/500?keyword=563">렌즈/필터/컨버터</Link></p>
        <p><Link to="/categories/500?keyword=564">일반디카/토이카메라</Link></p>
        <p><Link to="/categories/500?keyword=565">삼각대/플래시/조명</Link></p>

      </li>
    </ul>
  )
}

export default Category5