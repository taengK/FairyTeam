import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const ShowCart = ({name, price, photo, seq}) => {


  const [btnValue, setBtnValue] = useState()

  const btnRef = useRef()

  const removeCart =(e)=>{
    e.preventDefault()
    setBtnValue(btnRef.current.id)
  }
  console.log(btnValue);

  useEffect(()=>{
    axios.post()
  }, [setBtnValue])



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