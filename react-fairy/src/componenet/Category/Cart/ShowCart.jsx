import React from 'react'
import { Link } from 'react-router-dom'


const ShowCart = ({name, price, photo, seq}) => {
  return (
    <div className="GridMainItem" >
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