
import { useRef, useState } from 'react';


const NavList = () => {
  const hamElements = useRef(null);
  const [showHamNav, setShowHamNav] = useState(false);
  const handleClick = () => {
    console.log('마우스 클릭 이벤트가 발생했습니다.');
    setShowHamNav(!showHamNav);
    // 추가 작업 수행
  };


  return (
    <div className='Navi'>
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>ctg
        <ul className={`hamNav ${showHamNav ? 'show' : ''}`}>
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
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