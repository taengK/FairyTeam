import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const LoveAdd = ({prod_name, prod_price, prod_seq, prod_photo}) => {

  const [userData, setUserData] = useState({})
  const [userId, setUserId] = useState()
  const nav = useNavigate()
  


  useEffect(()=>{
    sessionStorage.getItem('id')
    console.log(sessionStorage.getItem('id'));
    console.log(prod_seq);
  },[])
  

  const favorite = (e) =>{
    e.preventDefault();

    sessionStorage.setItem('prod_name', prod_name)
    sessionStorage.setItem('prod_price', prod_price)
    sessionStorage.setItem('prod_seq', prod_seq)
    sessionStorage.setItem('prod_photo', prod_photo)
    
    const sessionid = sessionStorage.getItem('id');
    if (sessionid !== undefined) {
      
      setUserData({
        prod_seq : prod_seq,
        user_id : sessionid
      })
    } 
    
    
  }
  // console.log(userData);
  

  useEffect(()=>{
    

    axios.post('http://localhost:8888/db/favorite',
    {
      userData : userData
    })

    .then((res)=>{
      console.log(res.data.fav);

      if(res.data.fav === 'success'){
        alert('해당 상품이 장바구니에 추가되었습니다')
        if(window.confirm('장바구니에서 확인할까요?')){
          nav('/cart')
        }
        // if(result){
        //   nav('/cart')
        // }
        // sessionStorage.setItem('id', res.data.id)

        // sessionStorage.getItem('id')
        // nav('/')
        // window.location.reload();

      }
       else if (res.data.fav ==='existed') {
        alert('이미 장바구니에 담겨있는 상품입니다')
        
      } 
      
    })
  },[userData])










  return (
    <div onClick={favorite} className='cart' >
     장바구니🖤
    </div>
  )
}
{/* <i class="fa-solid fa-heart"></i> */}

export default LoveAdd