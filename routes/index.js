const express = require('express')
const router = express.Router()
const path = require('path');

const db_config = require('../config/database');

let conn =db_config.init()
db_config.connect(conn)

router.get('/',()=>{
    console.log('index Router');
    // res.send(path.join(__dirname, "react-fairy/build/index.html"))
})

router.post('/user/signup', (req, res)=>{
    console.log('signup Router', req.body);


    // 중복체크 시작
    let sql2 = "select id from user_info where id = ?"
    conn.query(sql2, [req.body.userData.id], (err, rows)=>{
        console.log(rows);
    })


    // 중복체크 끝


    //회원가입 시작
    let sql = "insert into user_info values(?, ?, ?, ?, ?, 37.5, current_timestamp, 'U')"
    // id, pw, name, nick, email
    conn.query(sql
        , [req.body.userData.id
            , req.body.userData.pw
            , req.body.userData.name
            , req.body.userData.nick
            , req.body.userData.add
            ]
        , (err, rows)=>{
            if(rows) {
                console.log('success signup')
                res.json({result : 'success'})
            } else {
                console.log('faild to signup', err);
                res.json({result : 'duplicated'})
            }
    })
    //회원가입 끝
})


router.post('/user/login',(req, res)=>{
    console.log('login router~!');
    let sql = "select * from user_info where user_id=? and user_pw=?"
    conn.query(sql,
        [req.body.userData.id, req.body.userData.pw]
        , (err, rows)=>{
            console.log(rows);
            if(rows.length > 0){
                res.json({result : 'success', id : req.body.userData.id})
            } else {
                res.json({result : 'failed'})
            }
        })
})


module.exports = router;