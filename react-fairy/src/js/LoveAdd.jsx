import React, { useState } from 'react'

const LoveAdd = ({prod_name, prod_price, prod_seq, prod_photo}) => {

  const [userData, setUserData] = useState({})

  const favorite = () =>{
    sessionStorage.setItem('prod_name', prod_name)
    sessionStorage.setItem('prod_price', prod_price)
    sessionStorage.setItem('prod_seq', prod_seq)
    sessionStorage.setItem('prod_photo', prod_photo)

    if (sessionStorage.getItem('id') !== null) {
      setUserData({
        prod_name : {prod_name},
        prod_price : {prod_price},
        prod_seq : {prod_seq},
        prod_photo : {prod_photo}
      })
     } else {
      
     }
    
    

  }


  return (
    <div>
        <ul class="DtButton">
      <li><input type="button" class="cart" value="장바구니🖤" onClick={favorite}/>
      {/* <i class="fa-solid fa-heart"></i> */}
      </li>
        </ul>
      <input type="button" class="cart" value="장바구니🖤" 
        style={{
          backgroundColor:"white",
          color:"black",
          width:"400px"
        }}
      />
    </div>
  )
}
{/* <i class="fa-solid fa-heart"></i> */}

export default LoveAdd