import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Await, useNavigate } from 'react-router-dom'
import Logo from '../Images/Logo.png'

import Kakaomap from '../js/Kakaomap'




// html로 회원정보 관리하는거 가능 (nunjucks) node Ex08DB
// 아이디 중복체크 기능 ( 버튼식 또는 텍스트창 벗어나면 자동으로 체크 )
//    >> DB에서 아이디를 PK? 로 등록해놔서 중복 알아서 걸러지긴 함..
// 비밀번호 재확인 기능

// const crypto = require('crypto')

// db에 not null 로 되어있는데 빈칸 쓰면 null로 입력되버림 어떡하냐...



function PostForm() {

  const nav = useNavigate()

  const nameRef = useRef()
  const contentRef = useRef()
  const priceRef = useRef()
  const photoRef = useRef()
  const imgUrlRef = useRef()


  const [category, setCategory] = useState()



  // 사진 주소 업로드 ----------------

  const [showPhoto, setShowPhoto] = useState()

  const photoUpload = (e) => {
    e.preventDefault();
    setShowPhoto(imgUrlRef.current.value)

    imgUrlRef.current.value = ''
  }

  // 사진 주소 업로드 ---------------- 



  // 카테고리 대 중 소 분류 ----------------------------------------

  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();
  const [select3, setSelect3] = useState();

  const handelChangeSelect1 = (e) => {
    setSelect1(e.target.value)
    setSelect2()
    setSelect3()

  }

  const handelChangeSelect2 = (e) => {
    setSelect2(e.target.value)
    setSelect3();
  }

  const handelChangeSelect3 = (e) => {
    setSelect3(e.target.value);
    setCategory(e.target.value);
  }

  // 카테고리 대 중 소 분류 ----------------------------------------




  // 물품 상태 설정 --------------------------------

  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // 물품 상태 설정 --------------------------------


  // 바코드 등록 체크 -----------------------------------------------------
  const [barcodeTime, setBarcodeTime] = useState(new Date().getTime());
  // 바코드 등록 체크 -----------------------------------------------------


  // 가격 입력 시 , 입력 -------------------------------
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState();
  const [price2, setPrice2] = useState();

  const handleNumberChange = (e) => {

    setNumber(e.target.value);
    // setPrice(parseInt(number).toLocaleString())
  };


  console.log(parseInt(number).toLocaleString() + '원');



  // 정보 입력시 모든 값들 저장할 데이터

  const [userData, setUserData] = useState({})

  // 작성 완료시 데이터 저장 작업
  const handleJoin = (e) => {


    e.preventDefault();




    setUserData({
      name: nameRef.current.value,
      content: contentRef.current.value,
      price: (parseInt(number).toLocaleString() + '원'),
      category: category,
      status: selectedOption,
      photo: showPhoto,
      barcode: barcodeTime,
      id: sessionStorage.getItem('id')
    })


  }



  useEffect(() => {
    console.log('userData : ', userData)
    /*useEffect의 특성 상, 무조건 화면의 첫 갱신 때 함수가 호출될 수 밖에 없다.
    비어있는 값을 가지고 회원가입을 하면 안되니까 
    화면의 첫 갱신때는 회원가입 로직이 
    실행되지 않도록 조건을 걸어둔 것!*/


    if (userData.name !== undefined) {
      if (userData.content, userData.price, userData.price, userData.category, userData.status, userData.photo, userData.time,
        userData.barcode !== undefined) {

        //  id 값이 초기상태인 undefined가 아니면서 pw, cpw가 일치할 때만 값을 전송함
        axios.post('http://localhost:8888/user/postForm', {
          userData: userData
        })
          .then((res) => {
            console.log('게시물 작성 res', res.data.result);
            if (res.data.result === 'success') {
              alert('게시물이 등록 되었습니다.')
              nav('/')
            } else if (res.data.result === 'duplicated') {
              alert('내용을 정확히 입력해주세요')
              console.log('문제')


            }


          })
          .catch(() => {
            console.error('실패!')
          })



      }
    }
  }, [userData])










  return (
    <div className='PostFormBox'>
      {/* <p>{new Date(currentTime).toLocaleString()}</p> */}
      {/* <p>{currentTime.toLocaleTimeString()}</p> */}
      <Form onSubmit={handleJoin}>
        <h1 className='fad'>게시물작성</h1>

        <ul className='PFInnerBox'>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>제목</h5>
            </div>
            <div className='PostFormLabel2'>
              <Row className='row1 rowch' >
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="상품 이름을 입력해주세요" ref={nameRef} />
                </Form.Group>
              </Row>
            </div>
          </li>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>설명</h5>
            </div>
            <div className='PostFormLabel2'>
              <Row className='row1'>
                <Form.Group as={Col} controlId="formGridNick">
                  <textarea className='PFTextArea'
                    placeholder="구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요.(10자이상)" ref={contentRef}></textarea>
                </Form.Group>
              </Row>
            </div>
          </li>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>가격</h5>
            </div>
            <div className='PostFormLabel2'>
              <Row className='row1'>
                <Form.Group as={Col} controlId="formGridName">

                  <Form.Control className='PFPrice' type="text" placeholder="숫자만 입력하세요" value={number} onChange={handleNumberChange} />
                </Form.Group>
              </Row>
            </div>
          </li>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>상태</h5>
            </div>
            <div className='PostFormLabel2'>
              <ul class="PFCheck">
                <li>



                  {/* <input type="radio" id="PFCheckbuy1" name="buy1" ref={statusRef}/> */}
                  <input type="radio" value="N" checked={selectedOption === 'N'} onChange={handleOptionChange} />
                  <label for="PFCheckbuy1" >새상품</label>
                  <input type="radio" value="O" checked={selectedOption === 'O'} onChange={handleOptionChange} />
                  {/* <input type="radio" id="PFCheckbuy2" name="buy1" ref={statusRef}/> */}
                  <label for="PFCheckbuy2" >중고상품</label>
                </li>

              </ul>
            </div>
          </li>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>상품이미지</h5>
            </div>
            <div className='PostFormLabel2 PFL2Box'>
              <ul className='df'>
                <img src={showPhoto}></img>
                <li>
                  <p>
                    {/* <input type="file" accept='image/jpg, image/jpeg, image/png' /> */}
                    <input type="text" ref={imgUrlRef} placeholder='URL 주소를 입력하세요' onClick={photoUpload} />
                    <button >업로드</button><br /><br />
                    <b>* 상품 이미지는 640x640에 최적화 되어 있습니다.</b><br />
                    - 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.<br />
                    - 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.<br />
                    - 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.<br />
                    - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.<br />
                    - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.<br />
                    최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>카테고리</h5>
            </div>
            <div className='PostFormLabel2'>
              <Row className='row1' >
                <Form.Group as={Col} controlId="formGridPassword">
                  <ul className='PFCBox'>
                    <li>
                      <select value={select1} name="category1" onChange={handelChangeSelect1} className='PostFC'>
                        <option value="">대분류</option>
                        <option value="100">여성의류</option>
                        <option value="200">남성의류</option>
                        <option value="300">신발</option>
                        <option value="400">가방/지갑</option>
                        <option value="500">디지털</option>
                        <option value="600">가전제품</option>
                        <option value="700">스포츠/레저</option>
                        <option value="800">도서/티켓/문구</option>
                        <option value="900">뷰티/미용</option>
                        <option value="1000">가구/인테리어</option>
                        <option value="1100">생활/주방용품</option>
                      </select>
                    </li>
                    <li>
                      <select value={select2} name="category2" onChange={handelChangeSelect2} className='PostFC'>
                        <option value="">중분류</option>
                        {select1 === '100' && <option value="110">아우터</option>}
                        {select1 === '100' && <option value="120">상의</option>}
                        {select1 === '100' && <option value="130">하의</option>}
                        {select1 === '200' && <option value="210">아우터</option>}
                        {select1 === '200' && <option value="220">상의</option>}
                        {select1 === '200' && <option value="230">하의</option>}
                        {select1 === '300' && <option value="310">남성화</option>}
                        {select1 === '300' && <option value="320">여성화</option>}
                        {select1 === '300' && <option value="330">스포츠화</option>}
                        {select1 === '400' && <option value="410">여성가방</option>}
                        {select1 === '400' && <option value="420">남성가방</option>}
                        {select1 === '500' && <option value="510">휴대폰</option>}
                        {select1 === '500' && <option value="520">태블릭</option>}
                        {select1 === '500' && <option value="530">웨어러블</option>}
                        {select1 === '500' && <option value="540">오디오/영상</option>}
                        {select1 === '500' && <option value="550">PC/노트북</option>}
                        {select1 === '500' && <option value="560">카메라/DSLR</option>}
                        {select1 === '600' && <option value="610">생활가전</option>}
                        {select1 === '600' && <option value="620">주방가전</option>}
                        {select1 === '700' && <option value="710">골프</option>}
                        {select1 === '700' && <option value="720">캠핑</option>}
                        {select1 === '700' && <option value="730">낚시</option>}
                        {select1 === '700' && <option value="750">등산/클라이밍</option>}
                        {select1 === '800' && <option value="810">도서</option>}
                        {select1 === '800' && <option value="830">상품권</option>}
                        {select1 === '900' && <option value="910">스킨케어</option>}
                        {select1 === '900' && <option value="920">색조 메이크업</option>}
                        {select1 === '900' && <option value="930">베이스 메이크업</option>}
                        {select1 === '900' && <option value="940">바디/헤어케어</option>}
                        {select1 === '900' && <option value="960">네일아트</option>}
                        {select1 === '1000' && <option value="1010">가구</option>}
                        {select1 === '1000' && <option value="1030">인테리어소품</option>}
                        {select1 === '1100' && <option value="1110">주방용품</option>}
                        {select1 === '1100' && <option value="1120">욕실용품</option>}
                      </select>
                    </li>
                    <li>
                      <select value={select3} name="category3" onChange={handelChangeSelect3} className='PostFC'>
                        <option value="">소분류</option>
                        {select2 === '110' && <option value="111">패딩</option>}
                        {select2 === '110' && <option value="112">점퍼</option>}
                        {select2 === '110' && <option value="113">코트</option>}
                        {select2 === '110' && <option value="114">자켓</option>}
                        {select2 === '110' && <option value="115">가디건</option>}
                        {select2 === '110' && <option value="116">조끼</option>}

                        {select2 === '120' && <option value="121">니트/스웨터</option>}
                        {select2 === '120' && <option value="122">후드티/후드집업</option>}
                        {select2 === '120' && <option value="123">맨투맨</option>}
                        {select2 === '120' && <option value="124">블라우스</option>}
                        {select2 === '120' && <option value="125">셔츠</option>}
                        {select2 === '120' && <option value="126">반팔 티셔츠</option>}
                        {select2 === '120' && <option value="127">긴팔 티셔츠</option>}

                        {select2 === '130' && <option value="131">청바지</option>}
                        {select2 === '130' && <option value="132">슬랙스</option>}
                        {select2 === '130' && <option value="133">면바지</option>}
                        {select2 === '130' && <option value="134">반바지</option>}
                        {select2 === '130' && <option value="135">트레이닝</option>}
                        {select2 === '130' && <option value="136">레깅스</option>}

                        {select2 === '210' && <option value="211">패딩</option>}
                        {select2 === '210' && <option value="212">점퍼</option>}
                        {select2 === '210' && <option value="213">코트</option>}
                        {select2 === '210' && <option value="214">자켓</option>}
                        {select2 === '210' && <option value="215">가디건</option>}
                        {select2 === '210' && <option value="216">조끼</option>}

                        {select2 === '220' && <option value="221">니트/스웨터</option>}
                        {select2 === '220' && <option value="222">후드티/후드집업</option>}
                        {select2 === '220' && <option value="223">맨투맨</option>}
                        {select2 === '220' && <option value="224">셔츠</option>}
                        {select2 === '220' && <option value="225">반팔 티셔츠</option>}
                        {select2 === '220' && <option value="226">긴팔 티셔츠</option>}

                        {select2 === '230' && <option value="231">청바지</option>}
                        {select2 === '230' && <option value="232">슬랙스</option>}
                        {select2 === '230' && <option value="233">면바지</option>}
                        {select2 === '230' && <option value="234">반바지</option>}
                        {select2 === '230' && <option value="235">트레이닝</option>}

                        {select2 === '310' && <option value="311">샌들/슬리퍼</option>}
                        {select2 === '310' && <option value="312">구두/로퍼</option>}
                        {select2 === '310' && <option value="313">워커/부츠</option>}

                        {select2 === '320' && <option value="321">샌들/슬리퍼</option>}
                        {select2 === '320' && <option value="322">구두</option>}
                        {select2 === '320' && <option value="323">단화/플랫슈즈</option>}
                        {select2 === '320' && <option value="324">워커/부츠</option>}
                        {select2 === '320' && <option value="325">기타 여성화</option>}

                        {select2 === '330' && <option value="331">축구/풋살화</option>}
                        {select2 === '330' && <option value="333">등산/트래킹화</option>}
                        {select2 === '330' && <option value="335">기타 스포츠화</option>}

                        {select2 === '410' && <option value="411">클러치백</option>}
                        {select2 === '410' && <option value="412">숄더백</option>}
                        {select2 === '410' && <option value="413">크로스백</option>}
                        {select2 === '410' && <option value="414">토트백</option>}
                        {select2 === '410' && <option value="415">백팩</option>}

                        {select2 === '420' && <option value="421">클러치백</option>}
                        {select2 === '420' && <option value="422">숄더백</option>}
                        {select2 === '420' && <option value="423">크로스백</option>}
                        {select2 === '420' && <option value="425">백팩</option>}

                        {select2 === '510' && <option value="511">스마트폰</option>}
                        {select2 === '510' && <option value="512">일반폰</option>}
                        {select2 === '510' && <option value="513">케이스/보호필름/액세서리</option>}
                        {select2 === '510' && <option value="514">케이블/충전기/주변기기</option>}

                        {select2 === '520' && <option value="521">태블릿</option>}
                        {select2 === '520' && <option value="522">케이스/보호필름/액세서리</option>}
                        {select2 === '520' && <option value="523">케이블/충전기/주변기기</option>}

                        {select2 === '530' && <option value="531">스마트워치/밴드</option>}
                        {select2 === '530' && <option value="532">케이스/보호필름/액세서리</option>}
                        {select2 === '530' && <option value="533">케이블/충전기/주변기기</option>}

                        {select2 === '540' && <option value="541">이어폰</option>}
                        {select2 === '540' && <option value="542">헤드폰</option>}
                        {select2 === '540' && <option value="543">스피커/앰프</option>}
                        {select2 === '540' && <option value="544">오디오/홈시어터</option>}

                        {select2 === '550' && <option value="551">데스크탑</option>}
                        {select2 === '550' && <option value="552">노트북/넷북</option>}
                        {select2 === '550' && <option value="553">모니터</option>}
                        {select2 === '550' && <option value="554">키보드</option>}
                        {select2 === '550' && <option value="555">마우스</option>}
                        {select2 === '550' && <option value="556">기타 PC 주변기기</option>}

                        {select2 === '560' && <option value="561">필름카메라</option>}
                        {select2 === '560' && <option value="562">DSLR/미러리스</option>}
                        {select2 === '560' && <option value="563">렌즈/필터/컨버터</option>}
                        {select2 === '560' && <option value="564">일반디카/토이카메라</option>}
                        {select2 === '560' && <option value="565">삼각대/플래시/조명</option>}

                        {select2 === '610' && <option value="611">가습기</option>}
                        {select2 === '610' && <option value="612">청소기</option>}
                        {select2 === '610' && <option value="613">공기청정기</option>}
                        {select2 === '610' && <option value="614">선풍기/냉풍기</option>}
                        {select2 === '610' && <option value="615">히터/온풍기</option>}
                        {select2 === '610' && <option value="616">전기매트/장판</option>}

                        {select2 === '620' && <option value="621">인덕션/전기레인지</option>}
                        {select2 === '620' && <option value="622">전기밥솥</option>}
                        {select2 === '620' && <option value="623">커피머신</option>}
                        {select2 === '620' && <option value="624">에어프라이어</option>}
                        {select2 === '620' && <option value="625">토스터</option>}
                        {select2 === '620' && <option value="626">전자레인지</option>}

                        {select2 === '710' && <option value="711">골프채</option>}
                        {select2 === '710' && <option value="712">골프 남성 의류</option>}
                        {select2 === '710' && <option value="713">골프 여성 의류</option>}
                        {select2 === '710' && <option value="714">골프백</option>}
                        {select2 === '710' && <option value="715">골프 공</option>}

                        {select2 === '720' && <option value="721">캠핑 의자/테이블</option>}
                        {select2 === '720' && <option value="722">캠핑 취사용품</option>}
                        {select2 === '720' && <option value="723">캠핑 랜턴</option>}
                        {select2 === '720' && <option value="724">침낭/매트/해먹</option>}
                        {select2 === '720' && <option value="725">텐트/그늘막</option>}
                        {select2 === '720' && <option value="726">기타 캠핑 용품</option>}

                        {select2 === '730' && <option value="731">공통 낚시 장비</option>}
                        {select2 === '730' && <option value="732">바다 낚시</option>}
                        {select2 === '730' && <option value="733">민물 낚시</option>}
                        {select2 === '730' && <option value="734">낚시 의류 및 기타 용품</option>}

                        {select2 === '750' && <option value="751">남성 등산복</option>}
                        {select2 === '750' && <option value="752">여성 등산복</option>}
                        {select2 === '750' && <option value="753">등산 가방</option>}
                        {select2 === '750' && <option value="754">암벽/클라이밍</option>}
                        {select2 === '750' && <option value="755">기타 등산 용품</option>}

                        {select2 === '810' && <option value="811">시/소설</option>}
                        {select2 === '810' && <option value="812">자기계발</option>}
                        {select2 === '810' && <option value="813">교양/인문</option>}
                        {select2 === '810' && <option value="814">경제/경영</option>}

                        {select2 === '820' && <option value="821">문화/도서</option>}
                        {select2 === '820' && <option value="821">백화점</option>}

                        {select2 === '910' && <option value="911">클렌징/스크럽</option>}
                        {select2 === '910' && <option value="912">스킨/토너/미스트</option>}
                        {select2 === '910' && <option value="913">로션/에멀젼</option>}
                        {select2 === '910' && <option value="914">에센스/크림</option>}
                        {select2 === '910' && <option value="915">팩/마스크</option>}
                        {select2 === '910' && <option value="916">썬케어</option>}

                        {select2 === '920' && <option value="921">아이라이너/브로우</option>}
                        {select2 === '920' && <option value="922">아이섀도우</option>}
                        {select2 === '920' && <option value="923">마스카라</option>}
                        {select2 === '920' && <option value="924">립틴트</option>}
                        {select2 === '920' && <option value="925">립밤/립글로즈</option>}
                        {select2 === '920' && <option value="926">립스틱</option>}
                        {select2 === '920' && <option value="927">치크/블러셔</option>}

                        {select2 === '930' && <option value="931">메이크업베이스</option>}
                        {select2 === '930' && <option value="932">BB/CC크림</option>}
                        {select2 === '930' && <option value="933">쿠션팩트</option>}
                        {select2 === '930' && <option value="934">파운데이션</option>}
                        {select2 === '930' && <option value="935">파우더/팩트</option>}
                        {select2 === '930' && <option value="936">프라이머/컨실러</option>}

                        {select2 === '940' && <option value="941">샴푸/린스</option>}
                        {select2 === '940' && <option value="942">헤어에센스/트리트먼트</option>}
                        {select2 === '940' && <option value="943">헤어스타일링</option>}
                        {select2 === '940' && <option value="946">핸드/풋케어</option>}

                        {select2 === '960' && <option value="961">네일아트/스티커</option>}
                        {select2 === '960' && <option value="963">네일케어도구</option>}

                        {select2 === '1010' && <option value="1011">거실가구</option>}
                        {select2 === '1010' && <option value="1012">침실가구</option>}
                        {select2 === '1010' && <option value="1013">학생/서재/사무용가구</option>}
                        {select2 === '1010' && <option value="1014">선반/수납 가구</option>}
                        {select2 === '1010' && <option value="1015">주방가구</option>}

                        {select2 === '1030' && <option value="1031">포스터/그림/액자</option>}
                        {select2 === '1030' && <option value="1032">디퓨저/캔들</option>}
                        {select2 === '1030' && <option value="1033">쿠션/방석</option>}
                        {select2 === '1030' && <option value="1034">탁상/벽시계</option>}
                        {select2 === '1030' && <option value="1035">거울</option>}
                        {select2 === '1030' && <option value="1036">기타 인테리어 소품</option>}

                        {select2 === '1110' && <option value="1111">그릇/홈세트</option>}
                        {select2 === '1110' && <option value="1112">잔/컵</option>}
                        {select2 === '1110' && <option value="1113">텀블러/물병</option>}
                        {select2 === '1110' && <option value="1114">냄비/프라이팬</option>}
                        {select2 === '1110' && <option value="1115">조리도구</option>}
                        {select2 === '1110' && <option value="1116">보관/밀폐용기</option>}
                        {select2 === '1110' && <option value="1117">커피용품</option>}

                        {select2 === '1120' && <option value="1121">구강/면도용품</option>}
                        {select2 === '1120' && <option value="1122">샤워/목욕용품</option>}
                        {select2 === '1120' && <option value="1123">수건/타월</option>}
                        {select2 === '1120' && <option value="1124">욕실수납/정리</option>}

                      </select>
                    </li>
                  </ul>


                </Form.Group>
              </Row>
            </div>
          </li>




          <li className='df'>
            <div className='PostFormLabel1'>
              <h5>거래지역</h5>
            </div>
            <ul className='PostFormLabel2 PFMapBox'>
              <li>
                <Kakaomap />
              </li>
            </ul>
          </li>
        </ul>
        <div className='PFBtnBoxx'>
          <Button className=' PFButton' variant="primary" onClick={handleJoin}><p>게시물 등록</p></Button>
        </div>
      </Form>
    </div>
  );
}

export default PostForm;