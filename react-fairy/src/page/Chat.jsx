
import Kakaomap from '../js/Kakaomap'

import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import '../css/page/chat.css'

import InfoBar from "../componenet/InfoBar/infoBar.js";
import Message from "../componenet/Messages/Message.js"
import TextContainer from "../componenet/TextContainer/TextContainer.js"
import Input from "../componenet/Input/Input.js"
import axios from 'axios';


const ENDPOINT = 'http://localhost:8888';
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [allMessage,setAllMessage] = useState([])


  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)

    console.log(name, room)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {alert(error)}
    })

    
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
 
    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [messages])



  const sendMessage = (event) => {

    event.preventDefault()

 

      let userId =  sessionStorage.getItem('id')
      console.log('이거 뜨나?'+userId);
      console.log('이거 뜨나?'+message);

    if (message) {
      axios.post('http://localhost:8888/user/chat',{userId : userId, message : message})
      .then((res)=>{
        
        console.log('중간점검'+res.data.result.id);
        if(res.data.result!==undefined){
          console.log('너무 슬퍼 '+res.data.result);
          setAllMessage(res.data.result)

        }
    })
    }
  }

  return (
    <div className='outerContainer'>
      <div className='container' style={{overflow:"scroll"}}>
        <InfoBar room={room} style={{position:"fixed", backgroundColor:"red"}}/>
        {allMessage.map(item =>
        <Message id={item.talker}
        chat={item.talk}>

          
        </Message> 
        
        )} 
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />


      </div>
      <TextContainer users={users} />
    </div>

  )
}

export default Chat


 