
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';



// 

const Mypage = () => {


  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    script1.type = 'text/javascript';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    script2.type = 'text/javascript';
    document.head.appendChild(script2);

    script2.onload = () => {
      const IMP = window.IMP;
      IMP.init("imp31853445");
    };
  }, []);

  const RealPayment = () => {
    const IMP = window.IMP;
    IMP.request_pay(
      {
        pg: 'kcp',
        pay_method: 'card',
        merchant_uid: '57008833-33004',
        name: '당근 10kg',
        amount: 1004,
        buyer_email: 'Iamport@chai.finance',
        buyer_name: '포트원 기술지원팀',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456'
      }, function(rsp) {
        if (rsp.success) {   
          // axios로 HTTP 요청
          axios({
            url: "3000/Detaill",
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: {
              imp_uid: rsp.imp_uid,
              merchant_uid: rsp.merchant_uid
            }
          }).then((data) => {
            // 서버 결제 API 성공시 로직
          })
        } else {
          alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
        }
      }
    );
  };

  return (
    <div className='myPage' style={{backgroundColor:"#f00"}} >
      <div class="wrap">


        <div class="blueContainer">
            <i class="fa-solid fa-circle-user"></i>
          <ul className='myPageIden'>
            <li class="grade">GOLD</li>
            <li class="name">ID</li>
            <li className='MPtoMO'><Link to='/Modification'><button>수정하기</button></Link></li>
          </ul>
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



        <ul class="listContainer listContainer1">
          <li> <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text" onClick={RealPayment}>주문목록<span class="circle"></span></div>
            <div class="right"> </div>
          </a>
          </li>

          <li>
          <a href="#" class="item">
            <div class="icon">ii</div>
            <div class="text">상품후기</div>
            <div class="right"> </div>
          </a>
          </li>

          <li>
          <a href="#" class="item">
            
            <div class="icon">ii</div>
            <div class="text">상품문의</div>
            <div class="right"> </div>
          </a>
          </li>
 

          <li>
          <a href="#" class="item">
            <div class="icon">ii</div>
            <Link to ='/Cart'><div class="text">찜한상품</div></Link>
            <div class="right"> </div>
          </a>
          </li>
        </ul>





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
          
        </div>
      </div>
    </div>
  )
}

export default Mypage
