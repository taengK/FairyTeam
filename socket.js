const socketIO = require('socket.io')

module.exports = (server, app)=>{
    const io = socketIO(server,{path : '/socket.io'})

app.set('io', io)
const chat = io.of('/chat')

    chat.on('connection',(socket)=>{
        console.log('chat namespace에 접속');
        const req = socket.request
        const {headers: {referer}} = req


        const roomID = referer.split('/')[referer.split('/').length-1]
        socket.join(roomID)
        
        //console.log(socket.request);
        // console.log('connect new client', socket.id);
        socket.on('disconnect', ()=>{
            console.log('disconnect client',socket.id);
            socket.leave(roomID)
        })
        socket.on('chat',(data)=>{
            socket.to(data.roomid).emit(data)
        })
    })
}