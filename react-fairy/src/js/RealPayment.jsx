import React from 'react'
import axios from 'axios';
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
  
  return (
    <div>
        <input class="order" value="결제하기🛒" onClick={RealPayment}/>
    </div>
  )
}

export default RealPayment