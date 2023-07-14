// import React, { useEffect, useRef, useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


// function Categories() {

//     const nav = useNavigate()

//     const idRef = useRef()
//     const testRef= useRef()

    // const [userId, setUserId] = useState({})
    // const [cateSeq, setCateSeq] = useState({})

    // const test =(e)=>{
    //     e.preventDefault();
        
    //     setUserId({id : idRef.current.value})
        
    // }
    

//   useEffect(() => {
//     if (userId.id !== undefined) {
//       axios.post('http://localhost:8888/db/categories', {
//         userId: userId
//       })
//         .then((res) => {

//           console.log('카테고리 번호 확인 :', res.data.idCheck);

//           if (res.data.idCheck !== undefined) {

//             console.log(res.data.idCheck[0].category_seq);

//             // const cateSeq = Number(res.data.idCheck[0].category_seq)
//             // const topCate = parseInt(cateSeq / 100) * 100
//             // const midCate = parseInt(cateSeq / 10) * 10
//             // const botCate = parseInt(cateSeq)
//             // const seq = String(topCate) + String(midCate) + String(botCate);

//             // setCateSeq({ cateseq: seq })

//             nav('/')

//           } 
//         })
//     }
//   })


//     // const [seqCont, setSeqCont] = useState(cateSeq.cateseq)

//     // let img = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjhfODAg%2FMDAxNjgyNjE3OTkyNjc1.D4SOrpmGLIGDY-7HY9KKFE_PKmUuPVPQJEl9gydLuqIg.Llyl_6G72u3AupkuaXb3C0sreG-uY0j_te0eydipk5Ig.JPEG.2zii118%2FIMG_5105.jpg&type=a340'
    
    
//     return (
//     <div>

//       <div>
//             <input type="text" ref = {idRef}/>
//             {/* <p>{seqCont}</p> */}
//             <button onClick = {test} type='button'>asdasdasdasd</button>
//             </div>
    
        
//     </div>
//   )
// }

// export default Categories