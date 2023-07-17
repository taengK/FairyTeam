import React from 'react'
import './Input.css';

const openNewWindow = () => {
  window.open('http://localhost:3000/Kakao', '_blank', 'width=400,height=300');
};

const Input = ({ setMessage, sendMessage, message }) => (
 


 <form className="form">
    
    <button className='plusButton' onClick={openNewWindow}><h1>➕</h1></button>

    <input
      className="input"
      type="text"
      placeholder="전송하려는 메시지를 입력하세요."
      value={message}
      //{ target: { value } }
      onChange={({ target: { value } })=> setMessage(value)}
      onKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    />
    
    <button className="sendButton" onClick={(event) => sendMessage(event)}>전송</button>
  </form>
)

export default Input;