import React from 'react';

import '../Messages/Message.css'

import ReactEmoji from 'react-emoji';



const Message = ({id,chat}) => {
  let isSentByCurrentUser = false;

  const trimmedName = id.trim().toLowerCase();

  if(id === trimmedName) { 
    isSentByCurrentUser = true;
  }

  return (
    
    isSentByCurrentUser ? (

    <div className='messageContainer justifyEnd' >
      <p className='sentText' pr-10>{trimmedName}</p>
      
      <div className='messageBox backgroundBlue'>
        <p className='messageText colorwhite'>{ReactEmoji.emojify(chat)}</p>
      </div>
    
    </div>) : (
    
    <div className='messageContainer justifyStart'>
      <div className='messageBox backgroundLight' >
          <p className='messageText colorDark'>{ReactEmoji.emojify(chat)}</p>
      </div>
      
      <p className='sentText pl-10 '>{id}</p>
    
    </div>
    )
  )
}

export default Message;