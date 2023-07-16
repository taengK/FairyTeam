import React from 'react'
import { Link } from 'react-router-dom'


const ChatStart = () => {
  return (
      <div>
        <Link to='/Chat'>
          <input type="button" class="DtChat" value="채팅하기💬" />
        </Link>
      </div>
  )
}

export default ChatStart