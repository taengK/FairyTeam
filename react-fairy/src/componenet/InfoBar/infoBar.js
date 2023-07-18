import React from 'react'
import './infoBar.css';

import onlineIcon from '../InfoBar/onlineIcon.png'
import closeIcon from  '../InfoBar/closeIcon.png'



const infoBar = ({room}) => {
  return (
    <div className='infoBar' >
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='online icon' />
        <h4>{room}</h4>
      </div>


      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='close icon' />
        </a>
      </div>

    </div>
  );
}

export default infoBar

// style={{backgroundColor:"red", position:"fixed"}}