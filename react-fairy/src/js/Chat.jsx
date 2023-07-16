import React from 'react'
import { Link } from 'react-router-dom'


const Chat = () => {
  return (

      <ul class="DtButton">

          <li><Link to='/Chat'><input type="button" class="DtChat" value="채팅하기💬" /></Link>
              <i class="fa-solid fa-comment"></i>
          </li>
    </ul>
  )
}

export default Chat 