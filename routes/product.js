const express = require('express')
const router = express.Router()

const db_config = require('../config/database');

let conn =db_config.init()
db_config.connect(conn)


// 바코드 가져오기

router.post('/db/product', (req, res)=>{
    
    let sql = "select prod_barcode from product_info where prod_name = ?"
    
    conn.query(sql, [req.body.userId.id], (err, rows)=>{
        if (rows){
            console.log('이미 존재하는 디', rows)
            res.json({idCheck : rows})
        } else {
            console.log('생성 가능')
            res.json({idCheck : 'none'})
        }
    })
    
    
    // 중복체크 끝

})

module.exports = router;