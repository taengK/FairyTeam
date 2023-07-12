import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TodayProd from './TodayProd'

function Categories() {

    const nav = useNavigate()

    const idRef = useRef()

    const [userId, setUserId] = useState({})
    const [cateSeq, setCateSeq] = useState({})

    const test =(e)=>{
        e.preventDefault();
        
        setUserId({id : idRef.current.value})
        
    }
    

  useEffect(() => {
    if (userId.id !== undefined) {
      axios.post('http://localhost:8888/user/categories', {
        userId: userId
      })
        .then((res) => {

          console.log('아이디 중복 검사 :', res.data.idCheck);

          if (res.data.idCheck !== undefined) {

            console.log(Number(res.data.idCheck[0].category_seq));

            let cateSeq = Number(res.data.idCheck[0].category_seq)
            let topCate = parseInt(cateSeq / 100) * 100
            let midCate = parseInt(cateSeq / 10) * 10
            let botCate = parseInt(cateSeq)
            const seq = String(topCate) + String(midCate) + String(botCate);

            setCateSeq({ cateseq: seq })

            nav(`/Categories/${seq}`)

          } 
        })
    }
  })


    const [seqCont, setSeqCont] = useState(cateSeq.cateseq)

    let img = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjhfODAg%2FMDAxNjgyNjE3OTkyNjc1.D4SOrpmGLIGDY-7HY9KKFE_PKmUuPVPQJEl9gydLuqIg.Llyl_6G72u3AupkuaXb3C0sreG-uY0j_te0eydipk5Ig.JPEG.2zii118%2FIMG_5105.jpg&type=a340'
    
    
    return (
    <div>
        <div className='fds'>
            <input type="text" ref = {idRef}/>
            <button onClick = {test} type='button'>asdasdasdasd</button>
        </div>
    
        {/* <ContextTest.provider value = {{barcodeCont, setBarcodeCont}}> */}
        <TodayProd seq = {seqCont} img1 ={img}></TodayProd>
        {/* </ContextTest.provider> */}
    </div>
  )
}

export default Categories