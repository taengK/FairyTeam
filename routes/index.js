const express = require('express')
const router = express.Router()
const path = require('path');

const db_config = require('../config/database');

let conn =db_config.init()
db_config.connect(conn)

router.get('/',(req,res)=>{
    console.log('index Router');
    res.send(path.join(__dirname,'react-fairy/build/index.html'))
})

router.post('/user/join',(req,res)=>{
    console.log('Join Router!',req.body);

    // 중복체크 시작!
    // DB에서 중복체크를 진행 한 후,DB 안에 없는 ID만 회원가입을 진행
    // 만약 중복이라면 콘솔창에 중복
    // 아니라면 종복x 가입 가능
    let sql2 = 'select id from member2 where id=?'
    conn.query(sql2,[req.body.userData.id],(err,rows)=>{
        console.log(rows);
        if(rows.length>0){
            res.json({result:'duplicated'})
        }else{
            let sql = 'insert into member2 values (?,?,?)'
            conn.query(sql,[req.body.userData.id , req.body.userData.pw , req.body.userData.add],(err,rows)=>{
            if (rows){
                console.log('join 성공');
                res.json({result:'success'})
            }else {
                console.log('join 실패..');
                res.json({result:'failed'})
        }
    })
        }
    })
    
    // 중복체크 끝!

    //회원가입 시작!
    
    //회원가입 끝!
})

router.post('/user/login',(req,res)=>{
    console.log('login Router!');
    let sql ='select * from member2 where id=? and pw=?'
    conn.query(sql,[req.body.userData.id , req.body.userData.pw]
        ,(err,rows)=>{
            console.log(rows);
            if(rows.length>0){
                res.json({result:'success', id : req.body.userData.id})
            }else{
                res.json({result:'failed'})
            }
        })
})


module.exports = router;