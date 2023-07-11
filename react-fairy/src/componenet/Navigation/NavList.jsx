
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
<<<<<<< HEAD
      <div className='ctg'>category
        <ul className='ctgNav'>
          <li><a href="">1</a></li>
        </ul>
=======
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>
        <div className='realHam'>
          <i class="fa-solid fa-bars"></i><p>카테고리</p>
            </div>
            <ul class="gnb">
              <li><a href="">menu1</a>
                  <div class="subBox">
                    <ul>
                      <li>
                        <h4>의류</h4>
                        <p><a href="#">상의</a></p>
                        <p><a href="#">하의</a></p>
                        <p><a href="#">시발</a></p>
                      </li>
                      <li>
                      <h4>의류</h4>
                        <p><a href="#">상의</a></p>
                        <p><a href="#">하의</a></p>
                        <p><a href="#">시발</a></p>
                      </li>
                      <li>
                      <h4>의류</h4>
                        <p><a href="#">상의</a></p>
                        <p><a href="#">하의</a></p>
                        <p><a href="#">시발</a></p>
                      </li>
                    </ul>
                  </div>
              </li>
              <li><a href="">menu2</a>
                  <div class="subBox">2</div>
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
>>>>>>> ea2a68046d85ef2acbb199193d89b75c3df55e64
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