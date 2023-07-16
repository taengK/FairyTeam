
import Kakaomap from '../js/Kakaomap'

import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import '../css/page/chat.css'

import InfoBar from "../componenet/InfoBar/infoBar.js";
import Messages from "../componenet/Messages/Messages.js"
import TextContainer from "../componenet/TextContainer/TextContainer.js"
import Input from "../componenet/Input/Input.js"


const ENDPOINT = 'http://localhost:8888';
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])


  useEffect(() => {
   
    const { name, room } = queryString.parse(window.location.search)

    console.log(name, room)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT, window.location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (message1) => {
    // message1.preventDefault()

    if (message1) {
      // console.log(message)
      socket.emit('sendMessage', message1, () => setMessage(''))
    }
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat

// const Chat = () => {

//   const [name, setName] = useState('');
//   const [room, setRoom] = useState('');
//   const [users, setUsers] = useState('');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);


//   return (
//     <div>
//        <Kakaomap/>

//        <h1>채팅창이다</h1> 


//     </div>
//   )

// }

// export default Chat

 