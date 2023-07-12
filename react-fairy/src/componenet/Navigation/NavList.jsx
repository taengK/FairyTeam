
import { useRef, useState } from 'react';


const NavList = () => {
  const hamElements = useRef(null);
  const [showHamNav, setShowHamNav] = useState(false);
  const handleClick = () => {
    console.log('마우스 클릭 이벤트가 발생했습니다.');
    setShowHamNav(!showHamNav);
    // 추가 작업 수행
  };

 //<ul className={`hamNav ${showHamNav ? 'show' : ''}`}>
  return (
    <div className='Navi'>
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>
        <div className='realHam'>
          <i class="fa-solid fa-bars"></i><p>카테고리</p>
            </div>
            <ul class="gnb">
              <li><a href="">여성의류</a>
                  <div class="subBox">
                    <ul>
                      <li>
                        <h4>아우터</h4>
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                      </li>
                      <li>
                      <h4>상의</h4>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <h4>하의</h4>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>
              <li><a href="">남성의류</a>
                  <div class="subBox">
                    <ul>
                      <li>
                        <h4>아우터</h4>
                        
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                        
                      </li>
                      <li>
                      <h4>상의</h4>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <h4>하의</h4>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>

              <li><a href="">신발</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>남성화</h4>
                        <p><a href="#">샌들/슬리퍼</a></p>
                        <p><a href="#">구두/로퍼</a></p>
                        <p><a href="#">워커/부츠</a></p>
                        <p><a href="#">기타 남성화</a></p>
                      </li>
                      <li>
                      <h4>여성화</h4>
                        <p><a href="#">샌들/슬리퍼</a></p>
                        <p><a href="#">구두</a></p>
                        <p><a href="#">단화/플랫슈즈</a></p>
                        <p><a href="#">워커/부츠</a></p>
                        <p><a href="#">기타 여성화</a></p>                      
                      </li>
                      <li>
                      <h4>스포츠화</h4>
                        <p><a href="#">축구/풋살화</a></p>
                        <p><a href="#">테니스화</a></p>
                        <p><a href="#">등산/트레킹화</a></p>
                        <p><a href="#">야구화</a></p>
                        <p><a href="#">기타 스포츠화</a></p>
                      </li>
                    </ul></div>
              </li>

              <li><a href="">가방/지갑</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>여성가방</h4>
                        <p><a href="#">클러치백</a></p>
                        <p><a href="#">숄더백</a></p>
                        <p><a href="#">크로스백</a></p>
                        <p><a href="#">토트백</a></p>
                        <p><a href="#">백팩</a></p>
                        <p><a href="#">기타여성가방</a></p>
                      </li>
                      <li>
                      <h4>남성가방</h4>
                        <p><a href="#">클러치백</a></p>
                        <p><a href="#">숄더백</a></p>
                        <p><a href="#">크로스백</a></p>
                        <p><a href="#">브리프케이스</a></p>
                        <p><a href="#">백팩</a></p>                      
                        <p><a href="#">기타남성가방</a></p>                      
                      </li>
                    </ul></div>
              </li>
              <li><a href="">디지털</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>휴대폰</h4>
                        <p><a href="#">스마트폰</a></p>
                        <p><a href="#">일반폰</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                        <p><a href="#">기타 휴대폰</a></p>
                      </li>
                      <li>
                      <h4>태블릿</h4>
                        <p><a href="#">태블릿</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>웨어러블</h4>
                        <p><a href="#">스마트워치/밴드</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>오디오/영상</h4>
                        <p><a href="#">이어폰</a></p>
                        <p><a href="#">헤드폰</a></p>
                        <p><a href="#">스피커/앰프</a></p>
                        <p><a href="#">오디오/홈시어터</a></p>
                   
                      </li>
                      <li>
                      <h4>PC/노트북</h4>
                        <p><a href="#">데스크탑</a></p>
                        <p><a href="#">노트북/넷북</a></p>
                        <p><a href="#">모니터</a></p>
                        <p><a href="#">키보드</a></p>
                        <p><a href="#">마우스</a></p>
                        <p><a href="#">기타 PC 주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>카메라/DSLR</h4>
                        <p><a href="#">필름카메라</a></p>
                        <p><a href="#">DSLR/미러리스</a></p>
                        <p><a href="#">렌즈/필터/컨버터</a></p>
                        <p><a href="#">일반디카/토이카메라</a></p>
                        <p><a href="#">삼각대/플래시/조명</a></p>
                        <p><a href="#">메모리/배터리/가방</a></p>
                   
                      </li>
                    </ul></div>
              </li>

              <li><a href="">가전제품</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>생활가전</h4>
                        <p><a href="#">가습기</a></p>
                        <p><a href="#">청소기</a></p>
                        <p><a href="#">공기청정기</a></p>
                        <p><a href="#">선풍기/냉풍기</a></p>
                        <p><a href="#">히터/온풍기</a></p>
                        <p><a href="#">전기매트/장판</a></p>
                      </li>
                      <li>
                      <h4>주방가전</h4>
                        <p><a href="#">인덕션/전기레인지</a></p>
                        <p><a href="#">전기밥솥</a></p>
                        <p><a href="#">커피머신</a></p>
                        <p><a href="#">에어프라이어</a></p>
                        <p><a href="#">토스터</a></p>                      
                        <p><a href="#">전자레인지</a></p>                      
                      </li>
                    </ul></div>
              </li>
              <li><a href="">스포츠/레저</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>골프</h4>
                        <p><a href="#">골프채</a></p>
                        <p><a href="#">골프 남성 의류</a></p>
                        <p><a href="#">골프 여성 의류</a></p>
                        <p><a href="#">골프백</a></p>
                        <p><a href="#">골프 공</a></p>
                      </li>
                      <li>
                      <h4>캠핑</h4>
                        <p><a href="#">캠핑 의자/테이블</a></p>
                        <p><a href="#">캠핑 취사용품</a></p>
                        <p><a href="#">캠핑 랜턴</a></p>
                        <p><a href="#">침낭/매트/해먹</a></p>
                        <p><a href="#">텐트/그늘막</a></p>                      
                        <p><a href="#">기타 캠핑 용품</a></p>                      
                      </li>
                      <li>
                      <h4>낚시</h4>
                        <p><a href="#">공통 낚시 장비</a></p>
                        <p><a href="#">바다 낚시</a></p>
                        <p><a href="#">민물 낚시</a></p>
                        <p><a href="#">낚시 의류 및 기타 용품</a></p>
                    
                      </li>
                      <li>
                      <h4>등산/클라이밍</h4>
                        <p><a href="#">남성 등산복</a></p>
                        <p><a href="#">여성 등산복</a></p>
                        <p><a href="#">등산 가방</a></p>
                        <p><a href="#">암벽/클라이밍</a></p>
                        <p><a href="#">기타 등산 용품</a></p>
                    
                      </li>
                    </ul></div>
              </li>

              <li><a href="">도서/티켓/문구</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>도서</h4>
                        <p><a href="#">시/소설</a></p>
                        <p><a href="#">자기계발</a></p>
                        <p><a href="#">교양/인문</a></p>
                        <p><a href="#">경제/경영</a></p>
                        <p><a href="#">예술/디자인</a></p>
                        <p><a href="#">여행/취미/레저/건강</a></p>
                        <p><a href="#">과학/IT</a></p>
                        <p><a href="#">기타</a></p>
                      </li>
                      <li>
                      <h4>상품권</h4>
                        <p><a href="#">문화/도서</a></p>
                        <p><a href="#">백화점</a></p>
                        <p><a href="#">기타 상품권</a></p>
                     
                      </li>
                    </ul></div>
              </li>

              <li><a href="">뷰티/미용</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>스킨케어</h4>
                        <p><a href="#">클렌징/스크럽</a></p>
                        <p><a href="#">스킨/토너/미스트</a></p>
                        <p><a href="#">로션/에멀젼</a></p>
                        <p><a href="#">에센스/크림</a></p>
                        <p><a href="#">팩/마스크</a></p>
                        <p><a href="#">썬케어</a></p>
                      </li>
                      <li>
                      <h4>색조 메이크업</h4>
                        <p><a href="#">아이라이너/브로우</a></p>
                        <p><a href="#">아이섀도우</a></p>
                        <p><a href="#">마스카라</a></p>
                        <p><a href="#">립틴트</a></p>
                        <p><a href="#">립밤/립글로즈</a></p>                      
                        <p><a href="#">립스틱</a></p>                      
                        <p><a href="#">치크/블러셔</a></p>                      
                        <p><a href="#">기타</a></p>                      
                      </li>
                      <li>
                      <h4>베이스 메이크업</h4>
                        <p><a href="#">메이크업베이스</a></p>
                        <p><a href="#">BB/CC크림</a></p>
                        <p><a href="#">쿠션팩트</a></p>
                        <p><a href="#">파운데이션</a></p>
                        <p><a href="#">파우더/팩트</a></p>                      
                        <p><a href="#">프라이머/컨실러</a></p>                                         
                        <p><a href="#">기타</a></p>                      
                      </li>
                      <li>
                      <h4>바디/헤어케어</h4>
                        <p><a href="#">샴푸/린스</a></p>
                        <p><a href="#">헤어에센스/트리트먼트</a></p>
                        <p><a href="#">헤어스타일링</a></p>
                        <p><a href="#">염색</a></p>
                        <p><a href="#">바디클렌저/로션</a></p>                      
                        <p><a href="#">핸드/풋케어</a></p>                                         
                   
                      </li>
                      <li>
                      <h4>네일아트</h4>
                        <p><a href="#">네일아트/스티커</a></p>
                        <p><a href="#">매니큐어/페디큐어</a></p>
                        <p><a href="#">네일케어도구</a></p>                                       
                   
                      </li>
                    </ul></div>
              </li>

              <li><a href="">가구/인테리어</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>가구</h4>
                        <p><a href="#">거실가구</a></p>
                        <p><a href="#">침실가구</a></p>
                        <p><a href="#">학생/서재/사무용가구</a></p>
                        <p><a href="#">선반/수납 가구</a></p>
                        <p><a href="#">주방가구</a></p>
                        
                      </li>
                      <li>
                      <h4>인테리어 소품</h4>
                        <p><a href="#">포스터/그림/액자</a></p>
                        <p><a href="#">디퓨저/캔들</a></p>
                        <p><a href="#">쿠션/방석</a></p>
                        <p><a href="#">탁상/벽시계</a></p>
                        <p><a href="#">거울</a></p>                      
                        <p><a href="#">기타 인테리어 소품</a></p>                      
                      </li>
                    </ul></div>
              </li>

              <li><a href="">생활/주방용품</a>
                  <div class="subBox"><ul>
                      <li>
                        <h4>주방용품</h4>
                        <p><a href="#">그릇/홈세트</a></p>
                        <p><a href="#">잔/컵</a></p>
                        <p><a href="#">텀블러/물병</a></p>
                        <p><a href="#">냄비/프라이팬</a></p>
                        <p><a href="#">조리도구</a></p>
                        <p><a href="#">보관/밀폐용기</a></p>
                        <p><a href="#">커피용품</a></p>
                      </li>
                      <li>
                      <h4>욕실용품</h4>
                        <p><a href="#">구강/면도용품</a></p>
                        <p><a href="#">샤워/목욕용품</a></p>
                        <p><a href="#">수건/타월</a></p>
                        <p><a href="#">욕실수납/정리</a></p>
                                           
                      </li>
                    </ul></div>
              </li>
            </ul>
      </div>
        <ul>
          <li><a href="#!"><p>이벤트</p></a></li>
          <li><a href="#!"><p>이달의행사</p></a></li>
          <li><a href="#!"><p>땡처리</p></a></li>
          <li><a href="#!"><p>출석체크</p></a></li>
        </ul>
    </div>
  )
}

export default NavList