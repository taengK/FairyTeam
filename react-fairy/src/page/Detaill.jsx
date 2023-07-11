import React, { useEffect } from 'react';
import axios from 'axios';
import PaymentComponet from '../js/PaymentComponet';

const Detaill = () => {
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
    </div>
    </article>
      <PaymentComponet/>
    </div>
    </div>
     
  );
};

export default Detaill;
