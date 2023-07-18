import React from 'react'
import { Link } from 'react-router-dom'

const Category9 = () => {
  return (
    <ul>
      <li>
        <Link to="/categories/900?keyword=910"><p className='ctgPH'>스킨케어</p></Link>
        <Link to="/categories/900?keyword=911"><p className='ctgP'>클렌징/스크럽</p></Link>
        <Link to="/categories/900?keyword=912"><p className='ctgP'>스킨/토너/미스트</p></Link>
        <Link to="/categories/900?keyword=914"><p className='ctgP'>에센스/크림</p></Link>
        <Link to="/categories/900?keyword=915"><p className='ctgP'>팩/마스크</p></Link>
        <Link to="/categories/900?keyword=916"><p className='ctgP'>썬케어</p></Link>
      </li>
      <li>
        <Link to="/categories/900?keyword=920"><p className='ctgPH'>색조 메이크업</p></Link>
        <Link to="/categories/900?keyword=921"><p className='ctgP'>아이라이너/브로우</p></Link>
        <Link to="/categories/900?keyword=922"><p className='ctgP'>아이섀도우</p></Link>
        <Link to="/categories/900?keyword=923"><p className='ctgP'>마스카라</p></Link>
        <Link to="/categories/900?keyword=924"><p className='ctgP'>립틴트</p></Link>
        <Link to="/categories/900?keyword=925"><p className='ctgP'>립밤/립글로즈</p></Link>
        <Link to="/categories/900?keyword=926"><p className='ctgP'>립스틱</p></Link>
        <Link to="/categories/900?keyword=927"><p className='ctgP'>치크/블러셔</p></Link>
        {/* <p className='ctgP'><Link to="/categories/900?keyword=928">기타</Link></p>                       */}
      </li>
      <li>
        <Link to="/categories/900?keyword=930"><p className='ctgPH'>베이스 메이크업</p></Link>
        <Link to="/categories/900?keyword=931"><p className='ctgP'>메이크업베이스</p></Link>
        <Link to="/categories/900?keyword=932"><p className='ctgP'>BB/CC크림</p></Link>
        <Link to="/categories/900?keyword=933"><p className='ctgP'>쿠션팩트</p></Link>
        <Link to="/categories/900?keyword=934"><p className='ctgP'>파운데이션</p></Link>
        <Link to="/categories/900?keyword=935"><p className='ctgP'>파우더/팩트</p></Link>
        <Link to="/categories/900?keyword=936"><p className='ctgP'>프라이머/컨실러</p></Link>
        {/* <p className='ctgP'><Link to="/categories/900?keyword=937">기타</Link></p>                       */}
      </li>
      <li>
        <Link to="/categories/900?keyword=940"><p className='ctgPH'>바디/헤어케어</p></Link>
        <Link to="/categories/900?keyword=941"><p className='ctgP'>샴푸/린스</p></Link>
        <Link to="/categories/900?keyword=942"><p className='ctgP'>헤어에센스/트리트먼트</p></Link>
        <Link to="/categories/900?keyword=943"><p className='ctgP'>헤어스타일링</p></Link>
        <Link to="/categories/900?keyword=946"><p className='ctgP'>핸드/풋케어</p></Link>

      </li>
      <li>
        <Link to="/categories/900?keyword=950"><p className='ctgPH'>네일아트</p></Link>
        <Link to="/categories/900?keyword=951"><p className='ctgP'>네일아트/스티커</p></Link>
        <Link to="/categories/900?keyword=953"><p className='ctgP'>네일케어도구</p></Link>

        {/* <p className='ctgP'><Link to="/categories/900?keyword=952">매니큐어/페디큐어</Link></p> */}
        {/* <p className='ctgP'><Link to="/categories/900?keyword=944">염색</Link></p> */}
        {/* <p className='ctgP'><Link to="/categories/900?keyword=945">바디클렌저/로션</Link></p>                       */}
      </li>
    </ul>


  )
}

export default Category9