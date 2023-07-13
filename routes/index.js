const express = require('express')
const router = express.Router()
const path = require('path');

const db_config = require('../config/database');

let conn =db_config.init()
db_config.connect(conn)


// 메인 ----------------------------- 시작      <완료>
router.get('/',(req, res)=>{
    console.log('index Router');
    res.render('/')
    // res.send(path.join(__dirname, "react-fairy/build/index.html"))
})
// 메인 ----------------------------- 종료




// 회원 ----------------------------- 시작

    // 중복체크 --------------------- 시작

router.post('/user/idcheck', (req, res)=>{
    console.log('idcheck Router', req.body);
    let sql = "select user_id from user_info where user_id = ?"
    conn.query(sql, [req.body.userId.id], (err, rows)=>{
        if (rows[0] !== undefined){
            console.log('이미 존재하는 아이디', rows)
            res.json({idCheck : 'existed'})
        } else {
            console.log('생성 가능')
            res.json({idCheck : 'none'})
        }
    })
})
    // 중복체크 ---------------------------- 종료

    // 회원가입 ---------------------------- 시작

router.post('/user/signup', (req, res)=>{
    console.log('signup Router', req.body);
    
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
} 
)
    //회원가입 ---------------------------------- 종료




    // 로그인 -------------------------------- 시작

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
    // 로그인 ----------------------- 종료

// 회원 ----------------------------- 종료




// 카테고리 ------------------------- 시작

router.post('/db/categories', (req, res)=>{
    let sql = "select category_seq, prod_name, prod_photo, prod_price, prod_barcode from product_info"
    // "select A.super_category, B.prod_photo, B.prod_name, B.prod_price, B.prod_barcode from prod_category_info A, product_info B where A.category_seq = B.category_seq"
    
    conn.query(sql, [req.body.categorySeq], (err, rows)=>{
        if (rows){
            console.log('super_category')
            res.json({result : rows})
        } else {
            console.log('error', err)
            res.json({result : 'none'})
    }})
})
// 카테고리 ------------------------- 종료



// 물품등록 ----------------------------- 시작      미완

router.post('/db/product', (req, res)=>{
    
    let sql = "select prod_barcode from product_info where prod_name = ?"
    
    conn.query(sql, [req.body.userId.id], (err, rows)=>{
        if (rows){
            console.log('ㅇ', rows)
            res.json({idCheck : rows})
        } else {
            console.log('ㄴ')
            res.json({idCheck : 'none'})
        }
    })
})

// 물품등록 ----------------------------------- 종료

module.exports = router;