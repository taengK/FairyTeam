
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const CreatePost = () => {

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

      {userId ? (
        <Link to='/PostForm'><p className='CPCtt' data-hover="판매하기"><span>판매하기</span></p></Link>
      ) : (
        null
      )}

    </>


  )
}

export default CreatePost