import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Product() {

    const nav = useNavigate()

    const idRef =useRef()

    const [userId, setUserId] = useState({})

    const test =(e)=>{
        e.preventDefault();
        
        setUserId({id : idRef.current.value})
    }
    

    useEffect(()=>{
        if(userId.id !== undefined ){
          axios.post('http://localhost:8888/user/product',{
            userId : userId
          })
          .then((res)=>{
      
            console.log('아이디 중복 검사 :' ,res.data.idCheck);
            if(res.data.idCheck !== undefined){
                console.log(res.data.idCheck[0].prod_barcode);
                const bar = res.data.idCheck[0].prod_barcode
                nav(`/Detaill/${bar}`)
                
            // } else if(res.data.idCheck === 'none') {
            //   alert('가입이 가능한 아이디입니다')
            //   pwRef.current.focus()
            //   console.log('가입 가능, res.data.idCheck :',res.data.idCheck);
            //   console.log('회원가입 가능? res.data.result :', res.data.result)
              
            // }
        }})
          // undefined가 아니더라도 짧으면 전송하지 않음
        
        }


    })



  return (
    <div>
        <div className='asd'>
            <input type="text" ref = {idRef}/>
            <button onClick = {test} type='button'>asdasdasdasd</button>
        </div>
    </div>
  )
}

export default Product