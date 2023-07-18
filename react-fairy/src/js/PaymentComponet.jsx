
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PaymentComponet = ({prod_name,prod_price}) => {

  // 장바구니
  

    // useEffect(() => {
    //     // const script1 = document.createElement('script');
    //     // script1.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    //     // script1.type = 'text/javascript';
    //     // document.head.appendChild(script1);
    
    //     // const script2 = document.createElement('script');
    //     // script2.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    //     // script2.type = 'text/javascript';
    //     // document.head.appendChild(script2);
    
    //   //   script2.onload = () => {
    //   //     const IMP = window.IMP;
    //   //     IMP.init("imp31853445");
    //   //   };
    //   // }, []);
    
      const RealPayment = (e) => {
        e.preventDefault()

        const IMP = window.IMP;
        IMP.init("imp31853445");

        
        IMP.request_pay(
          
          {
            
            pg: 'kcp',
            pay_method: 'card',
            merchant_uid: '57008833-33004',
            name: prod_name, ///
            amount: prod_price, ////
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

      // RealPayment({prod_name,prod_price})
      
  return (
  <div onClick={RealPayment } className='order'>
     결제하기🛒
  </div>





  )
}

export default PaymentComponet








