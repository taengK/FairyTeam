import React from 'react'
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
 
 <form className="form">
    
    <button className='plusButton'><h1>➕</h1></button>

    <input
      className="input"
      type="text"
      placeholder="전송하려는 메시지를 입력하세요."
      value={message}
      //{ target: { value } }
      onChange={(event) => setMessage(event.target.value)}
      OnKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    />
    
    <button className="sendButton" onClick={(event) => sendMessage(event)}>전송</button>
  </form>
)

export default Input;