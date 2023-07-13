 const express = require('express')
 const socketio = require('socket.io')
 const http = require('http')

 const cors = require('cors')
 const router = require('./routes/router')
 const { addUser, removeUser, getUser, getUsersInRoom } = require('./routes/users')
 const bodyParser = require('body-parser')

 const indexRouter = require('./routes')
 const path = require('path')
 const app = express()
 const server = http.createServer(app)
 const io = socketio(server)
 app.use(cors())
  app.use(router)

 app.set('port',process.env.PORT || 8888)



 io.on('connection', (socket) => {
  console.log('새로운 유저가 접속했습니다.')

  socket.on('join', ({name, room}, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    if (error) callback({error : '에러가 발생했습니다.'})

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, ${user.room}에 오신 것을 환영합니다.`,
  })
  io.to(user.room).emit('roomData', {
    room: user.room,
    users: getUsersInRoom(user.room),
  })
  socket.join(user.room)
  callback()
})
socket.on('sendMessage', (message, callback) => {
  const user = getUser(socket.id)
  // console.log(user)
  // console.log(typeof message, message)
  io.to(user.room).emit('message', {
    user: user.name,
    text: message,
  })
  callback()
})

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name}님이 퇴장하셨습니다.`,
      })
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      })
    }
    console.log('유저가 나갔습니다.')
  })
})

 app.use(bodyParser.urlencoded({extended:true}))
 
 app.use(express.json())
 


 app.use(express.static(path.join(__dirname,'react-fairy/build')))
 
 app.use('/', indexRouter)

 server.listen(app.get('port'),()=>{
   console.log(app.get('port'),'번 포트에서 서버연결 대기중..');
})


//  app.use('/', userRouter)

//  app.use('/', prodRouter)
 
//  app.use('/', cateRouter)

 // category test
//  app.get('/path/:id', (req, res)=>{
//    // query String(주소창에 ?id=aaaa&pw=bbbb) 사용하여 요청하는 방법
//    // req.query
//    console.log(req.query);
//    console.log(req.query.id);
//    console.log(req.query.pw);
//    res.send('11')
// })



