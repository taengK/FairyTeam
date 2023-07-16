import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PaymentComponet from '../js/PaymentComponet';

import { useParams } from 'react-router-dom';

const Detaill = () => {


  
  // const {superC} = useContext(Context);
  
const params = useParams();
// console.log('params :', params.seq);



const [seq, setSeq] = useState(params.seq)

const [data, setData] = useState({})
  // console.log(seq);


useEffect(() => {
  
  // get방식으로도 만들어보기


  
  if (params.seq!== undefined) {
    axios.post('http://localhost:8888/db/Detaill', {    
      seq : seq
    })
      .then((res) => {

        // console.log('정보는 :', res.data.prodInfo);

        if (res.data.prodInfo !== 'none') {
          if (res.data.prodInfo[0].prod_status == 'N') {
            setData({
              prod_name: res.data.prodInfo[0].prod_name,
              prod_price: res.data.prodInfo[0].prod_price,
              prod_photo: res.data.prodInfo[0].prod_photo,
              prod_content: res.data.prodInfo[0].prod_content,
              prod_at: res.data.prodInfo[0].prod_at,
              prod_seq: res.data.prodInfo[0].prod_seq,
              user_id: res.data.prodInfo[0].user_id,
              prod_status: '새 상품'
          })
        } else {
            setData({
              prod_name: res.data.prodInfo[0].prod_name,
              prod_price: res.data.prodInfo[0].prod_price,
              prod_photo: res.data.prodInfo[0].prod_photo,
              prod_content: res.data.prodInfo[0].prod_content,
              prod_at: res.data.prodInfo[0].prod_at,
              prod_seq: res.data.prodInfo[0].prod_seq,
              user_id: res.data.prodInfo[0].user_id,
              prod_status: '중고 상품'
            })

        }
        } 
      })
  }
},[])







  // console.log(superC);  

  return (

    <div>
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
            <img src={data.prod_photo} alt="상품이미지" />
          </div>
          <div class="summary">
            <nav>
              <h1>아이디 ====== {data.user_id}</h1>
              <h2>
                상품번호 :
                <span>{data.prod_seq}</span>
              </h2>
            </nav>
            <nav>
              <h3>{data.prod_name}</h3>
              <p> prod_status로 새 상품 중고 상품 구분 ===== {data.prod_status} </p>
              <p> 물품 등록 시간인데 시간 방식이 자동으로 외국으로 적용됨 왜이럼===={data.prod_at} </p>
              <p>{data.prod_content}</p>
            </nav>
            <nav>

              <div class="dis_price">
                <ins>{data.prod_price}</ins>
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
              <span>{data.prod_price}</span>
              <em>총 상품금액</em>
            </div>
          </div>
        </article>
        <PaymentComponet />
      </div>
    </div>

  );
};


export default Detaill;
