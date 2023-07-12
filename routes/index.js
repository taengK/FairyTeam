const express = require('express')
const router = express.Router()
const path = require('path');

const db_config = require('../config/database');

let conn =db_config.init()
db_config.connect(conn)

router.get('/',(req, res)=>{
    console.log('index Router');
    res.render('/')
    // res.send(path.join(__dirname, "react-fairy/build/index.html"))
})

// router.post('/user/idcheck', (req, res)=>{
//     console.log('idcheck Router', req.body);
//     // 중복체크 시작
//     let sql = "select user_id from user_info where user_id = ?"
//     conn.query(sql, [req.body.userId.id], (err, rows)=>{
//         if (rows[0] !== undefined){
//             console.log('이미 존재하는 아이디', rows)
//             res.json({idCheck : 'existed'})
//         } else {
//             console.log('생성 가능')
//             res.json({idCheck : 'none'})
//         }
//     })
    
    
//     // 중복체크 끝

// })

// router.post('/user/signup', (req, res)=>{
//     console.log('signup Router', req.body);
    

//     //회원가입 시작
    
//     let sql = "insert into user_info values(?, ?, ?, ?, ?, 37.5, current_timestamp, 'U')"
//     // id, pw, name, nick, email
   
//     conn.query(sql
//         , [req.body.userData.id
//             , req.body.userData.pw
//             , req.body.userData.name
//             , req.body.userData.nick
//             , req.body.userData.add
//             ]
//         , (err, rows)=>{
//             if(rows) {
//                 console.log('success signup')
//                 res.json({result : 'success'})
//             } else {
//                 console.log('faild to signup', err);
//                 res.json({result : 'duplicated'})
//             }
//     })
// } 
//     //회원가입 끝
// )


// router.post('/user/login',(req, res)=>{
//     console.log('login router~!');
//     let sql = "select * from user_info where user_id=? and user_pw=?"
//     conn.query(sql,
//         [req.body.userData.id, req.body.userData.pw]
//         , (err, rows)=>{
//             console.log(rows);
//             if(rows.length > 0){
//                 res.json({result : 'success', id : req.body.userData.id})
//             } else {
//                 res.json({result : 'failed'})
//             }
//         })
// })


// product

// router.post('/db/categories', (req, res)=>{
//     let sql = "select category_seq from product_info where prod_name = ?"
//     conn.query(sql, [req.body.userId.id], (err, rows)=>{
//         if (rows){
//             console.log('값', rows[0].category_seq)
//             res.json({idCheck : rows})
//         } else {
//             console.log('error')
//         }
//     })
    

// })


// product

// router.post('/db/product', (req, res)=>{
//     // console.log('idcheck Router', req.body);
//     // 중복체크 시작
//     let sql = "select prod_barcode from product_info where prod_name = ?"
//     conn.query(sql, [req.body.userId.id], (err, rows)=>{
//         if (rows){
//             console.log('이미 존재하는 디', rows)
//             res.json({idCheck : rows})
//         } else {
//             console.log('생성 가능')
//             res.json({idCheck : 'none'})
//         }
//     })
    
    
//     // 중복체크 끝

// })

// router.post('/user/category', (req, res)=>{
//     // console.log('idcheck Router', req.body);
//     // 중복체크 시작
//     let sql = "select prod_barcode from product_info where prod_name = ?"
//     conn.query(sql, [req.body.userId.id], (err, rows)=>{
//         if (rows){
//             console.log('이미 존재하는 디', rows)
//             res.json({idCheck : rows})
//         } else {
//             console.log('생성 가능')
//             res.json({idCheck : 'none'})
//         }
//     })
    
    
    // 중복체크 끝

// })


module.exports = router;