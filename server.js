 const express = require('express')
 const app = express()
 const indexRouter = require('./routes')
 const path = require('path')
 const cors = require('cors')

 app.set('port',process.env.PORT || 8888)
 
 app.use(express.json())
 app.use(cors())


 app.use(express.static(path.join(__dirname,'react-fairy/build')))
 
 app.use('/',indexRouter)
// <<<<<<< HEAD
 
// =======



// >>>>>>> ff5ce4af43e30d4706cdd89cd62f3a76634f1cb7
 app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 대기중..');
 })