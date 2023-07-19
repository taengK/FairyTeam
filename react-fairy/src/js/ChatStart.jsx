import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const ChatStart = ({user_id, buyer, prod_name}) => {

  const forChat = sessionStorage.getItem('id')

  console.log(user_id, buyer, prod_name);

 

  return (
    
    (forChat == null ?
        
        (
          <div className='DtChat'>
          채팅하기💬
      </div>
          ):(
          <div className='DtChat'>
        <Link to='/Join' user_id={user_id} buyer={buyer} prod_name={prod_name} >채팅하기💬</Link>
      </div>

        ))
     
  )
}

export default ChatStart
