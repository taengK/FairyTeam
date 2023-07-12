
import { useRef, useState } from 'react';


const NavList = () => {
  const hamElements = useRef(null);
  const [showHamNav, setShowHamNav] = useState(false);
  const handleClick = () => {
    console.log('마우스 클릭 이벤트가 발생했습니다.');
    setShowHamNav(!showHamNav);
    // 추가 작업 수행
  };

 //<ul className={`hamNav ${showHamNav ? 'show' : ''}`}>
  return (
    <div className='Navi'>
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>
        <div className='realHam'>
          <i class="fa-solid fa-bars"></i><p>카테고리</p>
            </div>
            <ul class="gnb">
              <li><a href="">여성의류</a>
                  <div class="subBox">
                    <ul>
                      <li>
                        <h4>아우터</h4>
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                      </li>
                      <li>
                      <h4>상의</h4>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <h4>하의</h4>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>
              <li><a href="">남성의류</a>
                  <div class="subBox">
                    <ul>
                      <li>
                        <h4>아우터</h4>
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                      </li>
                      <li>
                      <h4>상의</h4>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <h4>하의</h4>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>

              <li><a href="">menu3</a>
                  <div class="subBox">3</div>
              </li>

              <li><a href="">menu4</a>
                  <div class="subBox">4</div>
              </li>

              <li><a href="">menu5</a>
                  <div class="subBox">5</div>
              </li>

              <li><a href="">menu6</a>
                  <div class="subBox">6</div>
              </li>

              <li><a href="">menu7</a>
                  <div class="subBox">7</div>
              </li>

              <li><a href="">menu8</a>
                  <div class="subBox">8</div>
              </li>
            </ul>
      </div>
        <ul>
          <li><a href="#!"><p>이벤트</p></a></li>
          <li><a href="#!"><p>이달의행사</p></a></li>
          <li><a href="#!"><p>땡처리</p></a></li>
          <li><a href="#!"><p>출석체크</p></a></li>
        </ul>
    </div>
  )
}

export default NavList