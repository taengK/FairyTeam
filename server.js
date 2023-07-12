 const express = require('express')
 const app = express()
 const indexRouter = require('./routes')
 const path = require('path')
 const cors = require('cors')
 const bodyParser = require('body-parser')



 app.set('port',process.env.PORT || 8888)
 
 app.use(bodyParser.urlencoded({extended:true}))
 
 app.use(express.json())
 app.use(cors())
  


 app.use(express.static(path.join(__dirname,'react-fairy/build')))
 
 app.use('/', indexRouter)



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



 app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 대기중..');
 })