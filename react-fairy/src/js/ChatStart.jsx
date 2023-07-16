import React from 'react'
import { Link } from 'react-router-dom'


const ChatStart = () => {
  return (

     

          <li><Link to='/Chat'><input type="button" class="DtChat" value="채팅하기💬" /></Link>
              {/* <i class="fa-solid fa-comment"></i> */}
          </li>
    
  )
}

export default ChatStart