
import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';


// 카테고리 컴포넌트
import Category1 from './CategoryList/Category1';
import Category2 from './CategoryList/Category2';
import Category11 from './CategoryList/Category11';
import Category3 from './CategoryList/Category3';
import Category4 from './CategoryList/Category4';
import Category5 from './CategoryList/Category5';
import Category6 from './CategoryList/Category6';
import Category7 from './CategoryList/Category7';
import Category8 from './CategoryList/Category8';
import Category9 from './CategoryList/Category9';
import Category10 from './CategoryList/Category10';






const NavList = (props) => {
  const hamElements = useRef(null);
  const [showHamNav, setShowHamNav] = useState(false);
 let cnt = 0;
  const handleClick = () => {
    console.log('마우스 클릭 이벤트가 발생했습니다.');
    setShowHamNav(!showHamNav);
    // 추가 작업 수행
    cnt++;
    props.chCheck()
  };


  // // useEffect 하기 위한 조건
  // const [list, setList] = useState(0)

  // const handleList = (e)=>{
  //   e.preventDefault();
  //   setList({})
  // }
  // // 가져온 정보 저장할 
  // const [navData, setNavData] = useState([])

  // useEffect(()=>{
  //   axios.post('http://localhost:8888/db/navlist', {
  //     list : list
  //   })
  //   .then((res)=>{
      
  //     if (res.data.nav !== undefined) {
      
  //       setNavData(res.data.nav)
        
        
  //     } else{
  //       console.log('nono');
  //     }
  //   })
  // },[list])





 //<ul className={`hamNav ${showHamNav ? 'show' : ''}`}>
  return (
    <div className='NaviCtgBox'>
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>
        <div className='realHam'>
          <i class="fa-solid fa-bars"></i><p>카테고리</p>
            </div>
            <ul class="NaviCtgGnb">
            
        <li><Link to="/categories/100?keyword=100">여성의류</Link>
                  <div class="subBox">
                    <Category1></Category1>
                  </div>
              </li>
              <li><Link to="/categories/200?keyword=200">남성의류</Link>
                  <div class="subBox">
                    <Category2></Category2>
                  </div>
              </li>

              <li><Link to="/categories/300?keyword=300">신발</Link>
                  <div class="subBox">
                    <Category3></Category3>
                  </div>
              </li>

              <li><Link to="/categories/400?keyword=400">가방/지갑</Link>
                  <div class="subBox">
                    <Category4></Category4>
                  </div>
              </li>
              <li><Link to="/categories/500?keyword=500">디지털</Link>
                  <div class="subBox">
                    <Category5></Category5>
                  </div>
              </li>

              <li><Link to="/categories/600?keyword=600">가전제품</Link>
                  <div class="subBox">
                    <Category6></Category6>
                  </div>
              </li>
              <li><Link to="/categories/700?keyword=700">스포츠/레저</Link>
                  <div class="subBox">
                    <Category7></Category7>
                  </div>
              </li>

              <li><Link to="/categories/800?keyword=800">도서/티켓/문구</Link>
                  <div class="subBox">
                    <Category8></Category8>
                  </div>
              </li>

              <li><Link to="/categories/900?keyword=900">뷰티/미용</Link>
                  <div class="subBox">
                    <Category9></Category9>
                  </div>
              </li>

              <li><Link to="/categories/1000?keyword=1000">가구/인테리어</Link>
                  <div class="subBox">
                    <Category10></Category10>
                  </div>
              </li>

              <li><Link to="/categories/1100?keyword=1100">생활/주방용품</Link>
                  <div class="subBox">
                    <Category11></Category11>
                  </div>
              </li>
            </ul>
      </div>
        <ul>
          <li><Link to="/categories/400?keyword=400"><strong>EVENT</strong></Link></li>
          <li><Link to="/categories/800?keyword=800">할인상품</Link></li>
          <li><Link to="/categories/1100?keyword=1123">장마철</Link></li>
          <li><Link to="/categories/900?keyword=900">뜨는상품.</Link></li>
        </ul>
    </div>
  )
}

export default NavList