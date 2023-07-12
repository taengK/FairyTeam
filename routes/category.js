const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const db_config = require('../config/database');


let conn =db_config.init()
db_config.connect(conn)





router.post('/db/categories', (req, res)=>{
    let sql = "select category_seq from product_info where prod_name = ?"
    conn.query(sql, [req.body.userId.id], (err, rows)=>{
        if (rows){
            console.log('값', rows)
            res.json({idCheck : rows})
        } else {
            console.log('error')
            res.json({idCheck : 'none'})
    }})
    

})
    


// app.get('user/category/:seq', (req, res)=>{
    
//     })
    

    module.exports = router;