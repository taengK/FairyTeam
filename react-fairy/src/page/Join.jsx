import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import '../css/page/Join.css'
import axios from 'axios';


const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const userName = useRef()
    const roomNum = useRef()

    function joinChat(){

      axios.post('http://localhost:8888/user/INTOchat',{userName :  userName.current.value, roomNum: roomNum.current.value})
      .then((res)=>{

        // if(res.data == 'success'){
        //   axios.post('http://localhost:8888/user/chatting',{id:id,chat:chat})// DB 에서 채팅 내역 가져오기
        // }
        // else{

        // }
      })
    }

  return (
    <div className='joinOuterContainer'>
    <div className='joinInnerContainer'>
      <h1 className='heading'></h1>
      <div>
        <input
          placeholder='이름'
          className='joinInput'
          type='text'
          ref={userName}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder='채팅방'
          className='joinInput mt-20'
          type='text'
          ref={roomNum}
          onChange={(event) => setRoom(event.target.value)}
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className={'button mt-20'} type='button' onClick={joinChat}>
          가입
        </button>
      </Link>
    </div>
  </div> 
  )
}

export default Join