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
    let sql = "select * from user_info where user_id=?"
    conn.query(sql,
        [req.body.userData.id]
        , (err, rows)=>{
            if (rows[0] !== undefined){
                if(rows[0].user_id === req.body.userData.id){
                    if(rows[0].user_pw === req.body.userData.pw){
                        console.log(rows);   
                        res.json({result : 'success', id : req.body.userData.id})
                } else if (rows[0].user_pw !== req.body.userData.pw){
                    res.json({result : 'password err'})
                }
            }
            } else {
                console.log('에러' ,err);
                res.json({result : 'id err'})
            }
        })
})
// 로그인 ----------------------- 종료

// 비밀번호 수정 ------------------------------------------ 시작

router.post('/user/change',(req,res)=>{
    console.log('change router');
    let sql = 'update user_info set user_pw = ? ,user_nick=? where user_id=?'
    conn.query(sql,[req.body.userData.pw,req.body.userData.nick,req.body.userData.id],(err,rows)=>{
        if(rows){
            res.json({result : 'success'})
        }
    })
})





// 비밀번호 수정 ------------------------------------------ 종료

// 회원 ----------------------------- 종료




// 카테고리 ------------------------- 시작

router.post('/db/categories', (req, res)=>{
    let sql = "select prod_seq, category_seq, prod_name, prod_photo, prod_price, prod_barcode from product_info order by prod_seq desc"
   
    
    conn.query(sql, [req.body.categorySeq], (err, rows)=>{
        if (rows){
            console.log('데이터 송출 성공')
            res.json({result : rows})
        } else {
            console.log('error', err)
            res.json({result : 'none'})
    }})
})
// 카테고리 ------------------------- 종료



// 상세페이지 ----------------------------- 시작      미완

router.post('/db/Detaill', (req, res)=>{
    
    let sql = "select A.*, B.user_nick from product_info A, user_info B where A.user_id = B.user_id and A.prod_seq =?"
    
    conn.query(sql, [req.body.seq], (err, rows)=>{
        if (rows){
            console.log('ㅇ', rows)
            res.json({prodInfo : rows})
        } else {
            console.log('ㄴ')
            res.json({prodInfo : 'none'})
        }
    })
})



// 상세페이지 ----------------------------------- 종료


// 게시물 작성 ---------------------------------
router.post('/user/postForm', (req, res)=>{
    console.log('postForm Router', req.body);
    
    let sql = "INSERT INTO product_info (prod_name, prod_content, prod_price, category_seq, prod_status, prod_photo, prod_at, prod_barcode, user_id) VALUES (?,?,?,?,?,?, current_timestamp ,?,?)"
    // id, pw, name, nick, email
   
    conn.query(sql
        , [req.body.userData.name
            , req.body.userData.content
            , req.body.userData.price
            , req.body.userData.category
            , req.body.userData.status
            , req.body.userData.photo
            // , req.body.userData.time
            , req.body.userData.barcode
            , req.body.userData.id
            ]
        , (err, rows)=>{
            if(rows) {
                console.log('success upload')
                res.json({result : 'success'})
            } else {
                console.log('faild to upload', err);
                res.json({result : 'duplicated'})
            }
    })
} 
)

// 게시물 작성 --------------------------------- 종료

// 게시물 수정 ---------------------------------- 시작

router.post('/user/ChangePost', (req, res)=>{
    console.log('postForm Router', req.body);
    
    let sql = "(update product_info set prod_name=?,prod_content=?,prod_price=?,category_seq=?,prod_status=?,prod_photo=? where prod_seq=?)"
    // id, pw, name, nick, email
   
    conn.query(sql
        , [req.body.userData.name
            , req.body.userData.content
            , req.body.userData.price
            , req.body.userData.category
            , req.body.userData.status
            , req.body.userData.photo
            // , req.body.userData.time
            , req.body.userData.seq
            
            ]
        , (err, rows)=>{
            if(rows) {
                console.log('success upload')
                res.json({result : 'success'})
            } else {
                console.log('faild to upload', err);
                res.json({result : 'duplicated'})
            }
    })
} 
)
// 게시물 수정 ---------------------------------- 종료


// 게시물 불러오기 ---------------------------------- 시작

router.post('/user/callPost', (req, res)=>{
    console.log('postForm Router', req.body);
    
    let sql = "select * from product_info where prod_seq = ?"
    // id, pw, name, nick, email
   
    conn.query(sql
        , [req.body.seq           
            ]
        , (err, rows)=>{
            if(rows) {
                console.log('call success')
                res.json({result : 'success'})
            } else {
                console.log('faild to call', err);
                res.json({result : 'duplicated'})
            }
    })
} 
)
// 게시물 불러오기 ---------------------------------- 종료


//채팅 내역 ---------------------------------
router.post('/user/chatting',(req, res)=>{
    console.log('제발 돼라')
    let sql = 'select talker,talk from chatting_info where talker = ? and talk =?'

    conn.query(sql,[req.body.id,req.body.chat],(err,rows)=>{
        if(rows){
            res.json({result : rows})
        }
    })

    
})


//채팅 내역 --------------------------------- 종료

// 채팅 ------------------------- 시작

router.post('/user/chat',(req, res)=>{
    console.log('chat router~!');

    console.log('이거뜸?'+req.body.userId)
    console.log('ㄹㅇ??'+req.body.message)
    //채팅방 번호 --> 1
    //회원 ID
    //입력한 내용
    let sql = "insert into chatting_info(cr_seq,talker,talk, emoticon, talk_at) values (1,?,?,null,now());"
    
    conn.query(sql, [req.body.userId, req.body.message], (err, rows)=>{
        if (rows){
            let sql = 'select talker,talk from chatting_info'
            conn.query(sql,(err,rows)=>{
                if(rows){
                    res.json({result:rows})
                }
            })
            // console.log('이게나와야대'+req.body.userId);
            // console.log('이게나와야대'+req.body.message);
            // res.json({result:rows})
            // res.json({id:req.body.userId,chat:req.body.message})
        } else {
            return 'err'           
        }
    })




    //console.log(req.body.roomNuber)
  
})

router.post('/user/INTOchat',(req, res)=>{
    console.log('ㅋ~');

    console.log(req.body.userName)
    console.log(req.body.roomNum)

})


// router.post('/db/categories', (req, res)=>{
//     let sql = "select category_seq, prod_name, prod_photo, prod_price, prod_barcode from product_info"
   
    
//     conn.query(sql, [req.body.categorySeq], (err, rows)=>{
//         if (rows){
//             console.log('super_category')
//             res.json({result : rows})
//         } else {
//             console.log('error', err)
//             res.json({result : 'none'})
//     }})
// })

  

// 채팅 ------------------------- 종료


// 오늘의 물품 --------------------------- 시작

router.post('/db/recent', (req, res)=>{
    
    let sql = "select prod_name, prod_price, prod_photo, prod_seq from product_info order by prod_seq desc limit 10"
    
    conn.query(sql, (err, rows)=>{
        if (rows){
            console.log('ㅇ', rows)
            res.json({recent : rows})
        } else {
            console.log('ㄴ')
            res.json({recent : 'none'})
        }
    })
})
// 오늘의 물품 --------------------------- 종료




// 상세페이지 > 장바구니 ---------------------------- 시작
router.post('/db/favorite', (req, res)=>{
    console.log(req.body.userData);
    let sql = "insert into favorites_info (prod_seq, user_id, fav_at) values (?, ?, current_timestamp)"
    
    conn.query(sql, [req.body.userData.prod_seq, req.body.userData.user_id], (err, rows)=>{
        if (rows){
            console.log('즐찾추가', rows)
            res.json({fav : 'success'})
        } else {
            console.log('즐찾실패', err)
            res.json({fav : 'none'})
        }
    })
})
// 상세페이지 > 장바구니 ---------------------------- 종료


// 로그인 > 찜목록 --------------------- 시작
router.post('/db/myfavor', (req, res)=>{
    
    let sql = "select A.prod_photo, A.prod_name, A.prod_price, B.prod_seq from product_info A, favorites_info B where A.prod_seq = B.prod_seq and B.user_id = ?"
    
    conn.query(sql, [req.body.myFavo.user_id], (err, rows)=>{
        if (rows){
            console.log('내 즐찾', rows)
            res.json({myFav : rows})
        } else {
            console.log('즐찾실패', err)
            res.json({myFav : 'none'})
        }
    })
})
// 로그인 > 찜목록 --------------------- 종료


module.exports = router;