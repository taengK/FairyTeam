import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const MyFavo = () => {
    
    const session = sessionStorage.getItem('id')
    const [user, setUser] = useState({})

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



    const handle = (e) =>{
        e.preventDefault();
        
        setUser({user_id : session})

    }

    useEffect(() => {
        
            axios.post('http://localhost:8888/db/myfavor', { user : user })
            
            .then((res) => {
                console.log(res.data.myFav);
                if (res.data.myFav !== undefined) {
                    // setSendFav(res.data.myFav)
                    // console.log(sendFav);
                } else {

                }
                
            })
        
    }, [setUser])

  return (
    

    // <li>
    //       {userId ? (
    //         <Link to='/Cart' onCliclk={handle}>찜목록</Link>
    //       ) : (
    //         null
    //       )}
    //     </li>







      <tr>
          <td><input type="checkbox" name="1" /></td>
          <td><article>
              <a href="#">
                  <img src="	https://via.placeholder.com/80x80" alt="1" />
              </a>
              <div>
                  <h2><a href="#">상품명</a></h2>
              </div>
          </article></td>
          <td>무료배송</td>
          <td>27,000</td>
      </tr>

  )
}

export default MyFavo