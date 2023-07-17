import React, { useEffect, useState } from 'react'
import Logo from '../../Images/Logo.svg'

import { Link } from 'react-router-dom'

import CreatePost from '../Navigation/CreatePost';
import ChatStart from '../../js/ChatStart';
import Cart from '../../page/Cart';




const Head = () => {


  const [userId, setUserId] = useState('');

  // 쿠키에서 id 값을 가져와서 상태 변수에 설정하는 함수
  const checkLogin = () => {
    if (sessionStorage.getItem('id') !== null) {
      setUserId(true);
    } else {
      setUserId(false)
    }
  };


  // 로그인 버튼 클릭 시 쿠키에 id 값을 저장하고 상태 변수를 업데이트하는 함수

  // 로그아웃 버튼 클릭 시 쿠키의 id 값을 제거하고 상태 변수를 업데이트하는 함수
  const handleLogout = () => {
    sessionStorage.removeItem('id');
    window.location.reload();
    setUserId('');
  };

  // 컴포넌트가 마운트될 때 쿠키의 id 값을 확인하여 상태 변수를 설정
  useEffect(() => {
    checkLogin();
  }, [userId]);

  // useEffect(()=>{

  // },[userId])



  return (
    <>
      <ul className='HeadGnbBox'>
        <li>
          {userId ? (
            <Link to='/Mypage'>마이페이지</Link>
          ) : (
            null
          )}
        </li>
        <li>
          {userId ? (
            <Link to='/Modification'>수정페이지</Link>
          ) : (
            null
          )}
        </li>
        {userId ? (
          <li className='HeadGnb'><Link to='/' onClick={handleLogout}>로그아웃</Link></li>
        ) : (
          <li className='HeadGnb'><Link to='/SignUpLogin' >회원가입/로그인</Link></li>
        )}
      </ul>


      {/* <div className='HeadGnb'><Link to='/SignUpLogin'><p>회원가입/로그인</p></Link></div> */}
      <ul className='head'>
        <li className='headBox'>
          <div className='LogoBox'><Link to='/'><img src={Logo} alt="" className='LogoImg' /></Link></div>
          <div className='inputBox'><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요' /></div>
        </li>
        <li className='headNv'>
          <CreatePost />
        </li>
        <li>
          <Link to='/Chat' ><p className='CPCtt' data-hover="채팅하기💬"><span>채팅하기💬</span></p></Link>
        </li>
        <li>
          <Link to='/cart'><p className='CPCtt CPCttLove' data-hover="찜목록💖"><span className='CPjjim'>찜목록💖</span></p></Link>
        </li>
      </ul>
    </>
  )
}

{/* <button class="btn2"><i class="fa-solid fa-bars"></i></button> */ }
export default Head
{/* <li>
  {userId ? (
    <Link to='/PostForm'>게시물작성</Link>
  ) : (
    null
  )}
</li> */}