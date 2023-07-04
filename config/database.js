const mysql = require('mysql2')

const db_info = {
    host : 'project-db-stu2.smhrd.com',
    port : '3308',
    user : 'campus_h_230627_5',
    password : 'smhrd5',
    database : 'Fairy'
}

module.exports = {
    init : function(){
        return mysql.createConnection(db_info)
    },
    connect : function(conn){
        conn.connect(function(err){
            if(err) console.log('연결 실패');
            else console.log('연결 성공!');
        })
    }
}