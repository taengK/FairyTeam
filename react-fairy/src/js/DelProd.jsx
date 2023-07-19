import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DelProd = () => {


  const params = useParams();

  const [prodDel, setProdDel] =useState()

  const nav = useNavigate()

  const real = (e1) =>{
    e1.preventDefault()

    

    if(window.confirm('삭제하시겠습니까?')){
      setProdDel(params.seq)

      
    }

    }
  
  



  useEffect(() => {
    if(prodDel !== undefined){
    axios.post("http://localhost:8888/user/delPost", {
      seq: prodDel,
    }).then((res) => {
      // console.log(res.data.del);
      if(res.data.del === 'success'){
        nav('/')
      } 

    });
  }
  }, [prodDel]);





  return (


    <div  className="cart" onClick={real}>
      게시물 삭제🖤
    </div>



  );
}

export default DelProd