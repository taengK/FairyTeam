
import React, { useEffect } from 'react';
import axios from 'axios';

const PaymentComponet = () => {
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
    
      const requestPay = () => {
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
  return ( <div>
    <div className='view'>
<nav>
  <h1>상품보기</h1>
  <p>
    HOME 
    <span>패션·의류·뷰티</span>
    <strong>남성의류</strong>
  </p>
</nav>
<article class="info">
  <div class="image">
    <img src="https://via.placeholder.com/460x460" alt="상품이미지"/>
  </div>
  <div class="summary">
    <nav>
      <h1>(주)판매자명</h1>
      <h2>
        상품번호 : 
        <span>11111111111</span>
      </h2>
    </nav>
    <nav>
      <h3>상품명</h3>
      <p>상품설명 출력</p>
      <p>내용내용내용</p>
    </nav>
    <nav>
      
      <div class="dis_price">
        <ins>27,000</ins>
      </div>
    </nav>
    <nav>
      <span class="delivery">내용</span>
      <span class="arrival">모레(금) 7/8 거래예정</span>
      <span class="desc">본 상품은 국내배송만 가능합니다.</span>
    </nav>
    <nav>
      
      <span class="card cardadd">
        <i>아이콘</i>&nbsp;&nbsp;카드추가혜택
      </span>
    </nav>
    <nav>
      <span class="origin">원산지-상세설명 참조</span>
    </nav>
    <img src="../img/vip_plcc_banner.png" alt="광고이미지" class="banner" />
    <div class="count">
      <button class="decrease">-</button>
      <input type="text" name="num" value="1" readonly />
      <button class="increase">+</button>
    </div>
    <div class="total">
      <span>35,000</span>
      <em>총 상품금액</em>
    </div>
    <div class="button">
      <input type="button" class="cart" value="장바구니" />
      <input type="button" class="order" value="결제하기" onClick={requestPay}/>

    </div>
  </div>


</article>
</div>
</div>
  )
}

export default PaymentComponet








