import React from 'react'
import { Link } from 'react-router-dom'

const Category5 = () => {
  return (

    <ul>
      <li>
        <Link to="/categories/500?keyword=510"><p className='ctgPH'>휴대폰</p></Link>
        <Link to="/categories/500?keyword=511"><p className='ctgP'>스마트폰</p></Link>
        <Link to="/categories/500?keyword=512"><p className='ctgP'>일반폰</p></Link>
        <Link to="/categories/500?keyword=513"><p className='ctgP'>케이스/보호필름/액세서리</p></Link>
        <Link to="/categories/500?keyword=514"><p className='ctgP'>케이블/충전기/주변기기</p></Link>
        {/* <p className='ctgP'><Link to="/categories/500?keyword=515">기타 휴대폰</Link></p> */}
      </li>

      <li>
        <Link to="/categories/500?keyword=520"><p className='ctgPH'>태블릿</p></Link>
        <Link to="/categories/500?keyword=521"><p className='ctgP'>태블릿</p></Link>
        <Link to="/categories/500?keyword=522"><p className='ctgP'>케이스/보호필름/액세서리</p></Link>
        <Link to="/categories/500?keyword=523"><p className='ctgP'>케이블/충전기/주변기기</p></Link>
      </li>

      <li>
        <Link to="/categories/500?keyword=530"><p className='ctgPH'>웨어러블</p></Link>
        <Link to="/categories/500?keyword=531"><p className='ctgP'>스마트워치/밴드</p></Link>
        <Link to="/categories/500?keyword=532"><p className='ctgP'>케이스/보호필름/액세서리</p></Link>
        <Link to="/categories/500?keyword=533"><p className='ctgP'>케이블/충전기/주변기기</p></Link>
      </li>

      <li>
        <Link to="/categories/500?keyword=540"><p className='ctgPH'>오디오/영상</p></Link>
        <Link to="/categories/500?keyword=541"><p className='ctgP'>이어폰</p></Link>
        <Link to="/categories/500?keyword=542"><p className='ctgP'>헤드폰</p></Link>
        <Link to="/categories/500?keyword=543"><p className='ctgP'>스피커/앰프</p></Link>
        <Link to="/categories/500?keyword=544"><p className='ctgP'>오디오/홈시어터</p></Link>
      </li>

      <li>
        <Link to="/categories/500?keyword=550"><p className='ctgPH'>PC/노트북</p></Link>
        <Link to="/categories/500?keyword=551"><p className='ctgP'>데스크탑</p></Link>
        <Link to="/categories/500?keyword=552"><p className='ctgP'></p>노트북/넷북</Link>
        <Link to="/categories/500?keyword=553"><p className='ctgP'></p>모니터</Link>
        <Link to="/categories/500?keyword=554"><p className='ctgP'></p>키보드</Link>
        <Link to="/categories/500?keyword=555"><p className='ctgP'></p>마우스</Link>
        <Link to="/categories/500?keyword=556"><p className='ctgP'>기타 PC 주변기기</p></Link>
      </li>

      <li>
        <Link to="/categories/500?keyword=560"><p className='ctgPH'>카메라/DSLR</p></Link>
        <Link to="/categories/500?keyword=561"><p className='ctgP'>필름카메라</p></Link>
        <Link to="/categories/500?keyword=562"><p className='ctgP'>DSLR/미러리스</p></Link>
        <Link to="/categories/500?keyword=563"><p className='ctgP'>렌즈/필터/컨버터</p></Link>
        <Link to="/categories/500?keyword=564"><p className='ctgP'>일반디카/토이카메라</p></Link>
        <Link to="/categories/500?keyword=565"><p className='ctgP'>삼각대/플래시/조명</p></Link>
      </li>

    </ul>

  )
}

export default Category5