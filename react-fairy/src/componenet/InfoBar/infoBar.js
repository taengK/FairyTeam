import React from 'react'
import './infoBar.css';

import onlineIcon from '../InfoBar/closeIcon.png'
import closeIcon from '../InfoBar/onlineIcon.png'



const infoBar = () => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        {/* <img className='onlineIcon' src={onlineIcon} alt='online icon' /> */}
        <h3>채팅방</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          {/* <img src={closeIcon} alt='close icon' /> */}
        </a>
      </div>
    </div>
  );
}

export default infoBar