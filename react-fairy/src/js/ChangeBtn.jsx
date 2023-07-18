import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ChangeBtn = ({prod_seq}) => {

const nav = useNavigate();



const modify =()=>{
  
  
}


  return (
    

    <div className='cart' >
      <Link to = {`/changePost/${prod_seq}`}>게시물 수정🖤</Link>
    </div>


    
  )
}

export default ChangeBtn