
import React from 'react'
import { Link } from 'react-router-dom'


// 

const Mypage = () => {
  return (
    <div className='myPage' style={{backgroundColor:"#fc0"}} >
      
      <div class="wrap">
        <div class="blueContainer">
          <i class="fa-solid fa-circle-user"></i>
          <div className='myPageIden'>
            <div class="grade">GOLD</div>
            
            <div class="name">ID</div>
            <br />
            <button>수정하기</button>
          </div>
          <div class="modify">i</div>
        </div>
        <div class="summaryContainer">
     
          <div class="item">
            <div class="number">354</div> 
            {/* 숫자는 임의의 수 입니다 */}
            <div>상품후기</div>
          </div>
          <div class="item">
            <div class="number">354</div>
            <div>적립금(BLCT)</div>
          </div>
        </div>
        <div class="shippingStatusContainer">
          <div class="title">
            주문/배송조회
          </div>
          
          <div class="status">

            <div class="item">
              <div>
                <div class="blue number">6</div>
                <div class="text">장바구니</div>
              </div>
              <div class="icon"> </div>
            </div>
            <div class="item">
              <div>
                <div class="number">0</div>
                <div class="text">결제완료</div>
              </div>
              <div class="icon"> </div>
            </div>
            <div class="item">
              <div>
                <div class="blue number">1</div>
                <div class="text">위탁중</div>
              </div>
              <div class="icon"> </div>
            </div>
            <div class="item">
              <div>
                <div class="blue number">3</div>
                <div class="text">구매확정</div>
              </div>
            </div>

          </div>

        </div>
        <div class="listContainer">
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">주문목록<span class="circle"></span></div>
            <div class="right"> </div>
          </a>
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">상품후기</div>
            <div class="right"> </div>

          </a>
          <a href="#" class="item">
            
            <div class="icon">ii</div>
            <div class="text">상품문의</div>
            <div class="right"> </div>
          </a>
 
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">찜한상품</div>
            <div class="right"> </div>
          </a>
        </div>
        <div class="listContainer">
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">
              <span>내지갑</span>
              <span class="smallLight">
                <span>|</span>
                <span>보유 적립금</span>
              </span>
            </div>
            <div class="right">
              <span class="blct">175 BLCT</span>

            </div>
          </a>
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">알림</div>
            <div class="right"> </div>
          </a>
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">설정</div>
            <div class="right"> </div>
          </a>
        </div>
        <div class="infoContainer">
          <a href="#" class="item">
            <div>icon</div>
            <div>공지사항</div>
          </a>
          <a href="#" class="item">
            <div>icos</div>
            <div>이용안내</div>
          </a>
          <a href="#" class="item">
            <div>icon</div>
            <div>고객센터</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mypage
