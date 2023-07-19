import React, { useEffect, useRef, useState } from 'react';
import MapList from './MapList';

const { kakao } = window;

const LandingPage = () => {

  const [Places, setPlaces] = useState([]);
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const placeNameRef = useRef()



  const onChange = (e) => {
    setInputText(e.target.value);
  };

  

  const test = (e) => {
    console.log('test123123')
    console.log(InputText)
    setPlace(InputText);
    setInputText('');
  }


  useEffect(() => {

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const markers = [];
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(Place, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    function displayPagination(pagination) {
      const paginationEl = document.getElementById('pagination');
      const fragment = document.createDocumentFragment();

      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (let i = 1; i <= pagination.last; i++) {
        const el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, [Place]);

  






// const showPlace =(e)=>{
//   e.preventDefault()

//   console.log(Places);
// }






  





  return (
    <>
      <ul className="KaIF">
        <li>
          <input
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            value={InputText}
          />
          <button type="button" onClick={(e) => test(e)}>
            검색
          </button>
        </li>
        <li>
          {/* <input type="text" placeholder="거래장소를 입력하세요" /> */}
        </li>
      </ul>

      <>
        <ul className="realMap">
          <li>
            <div id="myMap"></div>
          </li>

          <li id="result-list">



            {Places.map((item) => (
                <MapList
                addName = {item.address_name}
                placeName = {item.place_name}
                roadAddName= {item.road_address_name}
                phone = {item.phone}
                ></MapList>
              // <div onClick={showPlace}>
              //   <ul className="result-list-num">
              //     <li></li>
              //     <li>
              //       <h5 >{item.place_name}</h5>
              //       {item.road_address_name ? (
              //         <ul>
              //           <li>도로명 주소 : {item.road_address_name}</li>
              //           <li>지번 주소 : {item.address_name}</li>
              //         </ul>
              //       ) : (
              //         <li>지번 주소 : {item.address_name}</li>
              //       )}
              //       <li>{item.phone}</li>
              //     </li>
              //   </ul>
              // </div>
            
            ))}




            <div id="pagination"></div>
          </li>
        </ul>
      </>
    </>
  );
};

export default LandingPage;
