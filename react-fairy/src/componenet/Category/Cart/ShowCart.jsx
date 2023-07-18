import React from 'react'
import { Link } from 'react-router-dom'


const ShowCart = ({name, price, photo, seq}) => {
  return (
    
      <Link to={`/Detaill/${seq}`} key={seq}>
        <table>
          <tbody>
            <tr>
              <td
                className="MainCtgImgBox"
                style={{ backgroundImage: `url(${photo})` }}
              ></td>
            </tr>
            <tr>
              <td data-name="VIEW MORE" className="MainCtgbtn">
                <h6>{name}</h6>
                <p>{price}</p>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </Link>

  );
}

export default ShowCart