/*global kakao*/
import React, { useEffect } from 'react';


const Kakaomap = () => {
  console.log('1. kakao map constructor')
  useEffect(() => {

    console.log('3. kakao map mounted')
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=046b47dda6cb5fbbdc7101fa8b4008e7&libraries=services';
    script.async = true;
    document.body.appendChild(script);

    
    script.onload = () => {
      
      // Kakao 지도 API 라이브러리가 로드된 후 실행될 코드
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
        level: 3
      };
      
      console.log('onload')
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.0676860117488);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      const ps = new kakao.maps.services.Places();

      ps.keywordSearch('이태원 맛집', placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      }

      function displayMarker(place) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x)
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

      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      return () => {
        kakao.maps.event.clearListeners(map, 'click');
      };
    };
    document.head.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {console.log('2. kakao map rendering')}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <input type="text" />
    </div>
  );
};

export default Kakaomap;
