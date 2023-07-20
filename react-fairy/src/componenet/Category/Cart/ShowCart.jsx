import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const ShowCart = ({name, price, photo, seq}) => {

  const nav = useNavigate()
  const [btnValue, setBtnValue] = useState({})

  const btnRef = useRef()

  const removeCart =(e)=>{
    e.preventDefault()

    if(window.confirm('삭제하시겠습니까?')){
    setBtnValue(
      {prod_seq : btnRef.current.id,
        user_id : sessionStorage.getItem('id')})
      }
    }
    
    console.log(btnValue);
    
    
    useEffect(()=>{
      
    btnValue.prod_seq !== undefined &&
    axios.post("http://localhost:8888/user/delFavo", {
      favo : btnValue
    })
    .then((res) => {
      console.log(res.data.delFavo);
      if(res.data.delFavo == 'success'){
        alert('삭제되었습니다')
        window.location.reload();
      }

    })
  
  }, [btnValue])



  return (
    
    <div className="GridMainItem" >
              <input type='button' value='삭제' id={`${seq}`} ref={btnRef} onClick={removeCart}></input>
    <br></br><br></br>
      
      <Link to={`/Detaill/${seq}`} key={seq}>
        <table>
          <tbody>
            <tr>
              <td
                className="GridMainImgBox"
                style={{ backgroundImage: `url(${photo})` }}
              ></td>
            </tr>
            <tr>
              <td data-name="VIEW MORE" className="GridMainBtn">
                <h6>{name}</h6>
                <p>{price}</p>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </Link>
      </div>
  );
}

export default ShowCart