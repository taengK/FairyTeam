import React from 'react'

const MapList = ({addName, placeName, roadAddName, phone}) => {




    const showPlace =(e)=>{
        e.preventDefault()
        if(window.confirm(`${placeName}을 거래 장소로 선택할까요?`)){
            sessionStorage.setItem('postPlace', `${placeName}`)
            alert('등록되었습니다')
        }
        
      }


  return (
    
<div onClick={showPlace}>
                <ul className="result-list-num">
                  <li></li>
                  <li>
                    <h5 >{placeName}</h5>
                    {roadAddName ? (
                      <ul>
                        <li>도로명 주소 : {roadAddName}</li>
                        <li>지번 주소 : {addName}</li>
                      </ul>
                    ) : (
                      <li>지번 주소 : {addName}</li>
                    )}
                    <li>{phone}</li>
                  </li>
                </ul>
              </div>


  )
}

export default MapList