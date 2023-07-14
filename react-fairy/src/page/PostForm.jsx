import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Await, useNavigate } from 'react-router-dom'
import Logo from '../Images/Logo.png'



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
  const statusRef = useRef()
  const photoRef = useRef()
  const categoryRef = useRef()


  const [userData, setUserData] = useState({})
  // const [userId, setUserId] = useState({})




   

  // ... 코드 아니고 함수 접은거임
  const handleJoin = (e) => {
    console.log('handle Join Function'
      , nameRef.current.value
      , contentRef.current.value
      , priceRef.current.value
      , statusRef.current.value
      , photoRef.current.value
      , categoryRef.current.value);

    // form이 submit 되지 못하도록 작업
    e.preventDefault();


    setUserData({
      name: nameRef.current.value,
      content: contentRef.current.value,
      price: priceRef.current.value,
      status: statusRef.current.value,
      photo: photoRef.current.value,
      category: categoryRef.current.value
    })


  }



  useEffect(() => {
    console.log('userData : ', userData.name)
    /*useEffect의 특성 상, 무조건 화면의 첫 갱신 때 함수가 호출될 수 밖에 없다.
    비어있는 값을 가지고 회원가입을 하면 안되니까 
    화면의 첫 갱신때는 회원가입 로직이 
    실행되지 않도록 조건을 걸어둔 것!*/


    if (userData.name !== undefined) {
      

        //  id 값이 초기상태인 undefined가 아니면서 pw, cpw가 일치할 때만 값을 전송함
        axios.post('http://localhost:8888/user/postForm', {
          userData: userData
        })

          .then((res) => {
            console.log('게시물 작성 res', res.data.result);
            if (res.data.result === 'success') {
              alert('게시물이 작성 되었습니다.')
              nav('/')
            } else if (res.data.result === 'duplicated') {
              alert('문제 발생') // 아이디 옆에 중복체크 버튼으로 다른 정보 입력 전에 아이디부터 확인해보기
              console.log('문제')

              // idRef.current.focus()
            }


          })
          .catch(() => {
            console.error('실패!')
          })
        // 최소 글자 수 조건 (아이디는 중복확인할 때 글자수 같이 검사)
      
    }
  }, [userData])




  return (
    <div className='PostFormBox'>

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
                  placeholder="구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요.(10자이상)"  ref={contentRef}></textarea>
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
                  <Form.Control className='PFPrice' type="number" placeholder="숫자만 입력하세요" ref={priceRef} />
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
                    <input type="radio" id="PFCheckbuy1" name="buy1"/>
                    <label for="PFCheckbuy1">새상품</label>
                    <input type="radio" id="PFCheckbuy2" name="buy1"/>
                    <label for="PFCheckbuy2">중고상품</label>
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
                <li className='PFImgBox'>
                  <input type="file" accept='image/jpg, image/jpeg, image/png' />
                </li>
                <li>
                  <p>
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
                  <Form.Control className='PFCtegory' type="textarea" placeholder="카테고리 이거 또 어떻게만드냐 이 멍멍이같은 자식같으니라구 멍청이같은 컴퓨터ㄹㄷㅁㄷㄻㄷㄹㅁㅜㄹ" ref={categoryRef} />
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
                <div className='PFMap'>
                  <ul className='PFMapCtt'>
                    <li><p>내위치</p></li>
                    <li><p>최근검색</p></li>
                    <li><p>주소검색</p></li>
                    <li><p>카카오맵설정이곳에다넣어야해</p></li>
                  </ul>
                  <input type="text" placeholder='거래장소를 입력하세요' />
                </div>
              </li>
              <li className=' PFL2Box'>
                <iframe className='PFIfram' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8484619486135!2d126.87518697644086!3d35.11049467277688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718b03033bfeef%3A0x9148e0a92fb527ab!2z7Iqk66eI7Yq47J247J6s6rCc67Cc7JuQ!5e0!3m2!1sko!2skr!4v1689157673616!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </li>
            </ul>


          </li>
        </ul>


        <Button className='row1 PFButton' variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;