import React, {useEffect} from 'react';

import '../Messages/Messages.css'
import Message from "../Messages/Message.js"

import BasicScrollToBottom from "react-scroll-to-bottom";


function Messages({ messages, name }) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <BasicScrollToBottom className="messages">
      {messages.map((message, i) => {
        return <div key={i}><Message message={message} name={name} /></div>
      })}
    </BasicScrollToBottom>
  );
}

export default Messages;