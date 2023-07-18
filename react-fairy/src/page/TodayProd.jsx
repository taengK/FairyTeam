import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TodayProd = ({ name, price, photo, seq }) => {


  return (
    <div className='MainCtgItem'>
      <Link to={`/Detaill/${seq}`} key={seq}>
        <table>
          <tbody>
            <tr>
              <td className='MainCtgImgBox' style={{ backgroundImage: `url(${photo})` }}></td>
            </tr>
            <tr>
              <td data-name="VIEW MORE" className='MainCtgbtn'><h6>{name}</h6><p>{price}</p></td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
    // </div>
  )
}

export default TodayProd
{/* <ul>
    <li>
      <img src='https://picsum.photos/id/251/150/150' alt="준비중.." />
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/251/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
    <li>
      <a href="#!"><img src='https://picsum.photos/id/252/150/150' alt="준비중.." /></a>
      <a href="#!" data-name="VIEW MORE" className="btn"><h3>TIT</h3><p>CTT</p></a>
    </li>
</ul> */}