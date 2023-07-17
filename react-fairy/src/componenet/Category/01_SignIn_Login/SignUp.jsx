import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Await, useNavigate } from 'react-router-dom'


// html로 회원정보 관리하는거 가능 (nunjucks) node Ex08DB
// 아이디 중복체크 기능 ( 버튼식 또는 텍스트창 벗어나면 자동으로 체크 )
//    >> DB에서 아이디를 PK? 로 등록해놔서 중복 알아서 걸러지긴 함..
// 비밀번호 재확인 기능

// const crypto = require('crypto')

// db에 not null 로 되어있는데 빈칸 쓰면 null로 입력되버림 어떡하냐...



function Join() {

  const nav = useNavigate()

  const idRef = useRef()
  const pwRef = useRef()
  const cpwRef = useRef()
  const nameRef = useRef()
  const nickRef = useRef()
  const addRef = useRef()





  const [userData, setUserData] = useState({})
  const [userId, setUserId] = useState({})




  // ID 중복체크
  const idCheck1 = (e) => {
    e.preventDefault();

    setUserId({ id: idRef.current.value })

  }

  useEffect(() => {   // 중복체크
    console.log('userId : ', userId.id)

    // console.log('중복체크 idCheck 값 : ', idCheck)
    // 초기 id 가 undefined가 아닐 때 글자 수가 5 이상이면 전송함
    if (userId.id !== undefined) {
      if (userId.id.length >= 5) {
        axios.post('http://localhost:8888/user/idcheck', {
          userId: userId
        })
          .then((res) => {

            console.log('아이디 중복 검사 :', res.data.idCheck);
            if (res.data.idCheck === 'existed') {
              alert('이미 등록된 아이디입니다',)
              idRef.current.value = ''
              idRef.current.focus()

            } else if (res.data.idCheck === 'none') {
              alert('가입이 가능한 아이디입니다')
              pwRef.current.focus()
              console.log('가입 가능, res.data.idCheck :', res.data.idCheck);
              console.log('회원가입 가능? res.data.result :', res.data.result)

            }
          })
        // undefined가 아니더라도 짧으면 전송하지 않음
      } else if (userId.id.length < 5) {
        alert('아이디가 너무 짧습니다')
        idRef.current.focus()
      }
    }
  }, [userId])

  // ... 코드 아니고 함수 접은거임
  const handleJoin = (e) => {
    console.log('handle Join Function'
      , idRef.current.value
      , pwRef.current.value
      , nameRef.current.value
      , nickRef.current.value
      , addRef.current.value);

    // form이 submit 되지 못하도록 작업
    e.preventDefault();


    setUserData({
      id: idRef.current.value,
      pw: pwRef.current.value,
      cpw: cpwRef.current.value,
      name: nameRef.current.value,
      nick: nickRef.current.value,
      add: addRef.current.value
    })


  }



  useEffect(() => {
    console.log('userData : ', userData.id)
    /*useEffect의 특성 상, 무조건 화면의 첫 갱신 때 함수가 호출될 수 밖에 없다.
    비어있는 값을 가지고 회원가입을 하면 안되니까 
    화면의 첫 갱신때는 회원가입 로직이 
    실행되지 않도록 조건을 걸어둔 것!*/


    if (userData.id !== undefined && userData.pw === userData.cpw) {
      if (userData.id.length >= 5
        && userData.id.length <= 20 && userData.pw.length >= 6
        && userData.name.length >= 2 && userData.nick.length >= 2 && userData.add.length >= 5) {

        //  id 값이 초기상태인 undefined가 아니면서 pw, cpw가 일치할 때만 값을 전송함
        axios.post('http://localhost:8888/user/signup', {
          userData: userData
        })

          .then((res) => {
            console.log('회원가입 res', res.data.result);
            if (res.data.result == 'success') {
              alert('회원가입을 축하드립니다')
              nav('/')
            } else if (res.data.result === 'duplicated') {
              alert('문제 발생') // 아이디 옆에 중복체크 버튼으로 다른 정보 입력 전에 아이디부터 확인해보기
              console.log('아이디 중복 확인')

              idRef.current.focus()
            }


          })
          .catch(() => {
            console.error('실패!')
          })
        // 최소 글자 수 조건 (아이디는 중복확인할 때 글자수 같이 검사)
      } else if (userData.id.length < 5) {
        alert('아이디가 너무 짧아요!')
        idRef.current.focus()
      } else if (userData.pw.length < 6) {
        alert('비밀번호가 너무 짧아요!')
        pwRef.current.value = ''
        cpwRef.current.value = ''
        pwRef.current.focus()
      } else if (userData.name.length < 2) {
        alert('이름이 너무 짧아요!')
        nameRef.current.focus()
      } else if (userData.nick.length < 2) {
        alert('닉네임이 너무 짧아요!')
        nickRef.current.focus()
      } else if (userData.add.length < 5) {
        alert('이메일이 잘못됐음')
        addRef.current.focus()
      }
    } else if (userData.id !== undefined && userData.pw !== userData.cpw) {
      // id가 초기상태가 아니면서 pw, cpw가 일치하지 않으면 비밀번호를 다시 입력하게
      alert('비밀번호가 일치하지 않습니다')
      pwRef.current.value = ''
      cpwRef.current.value = ''
      pwRef.current.focus()
    }
  }, [userData])






  return (
    <div>
      <Form onSubmit={handleJoin} className='SignUpForm'>
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="https://www.facebook.com/" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.google.com/" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="https://www.instagram.com/" class="social"><i class="fab fa-square-instagram"></i></a>
        </div>

        <Row className='row1' >
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label><p>ID</p></Form.Label>
            <Form.Control className='SLinput' type="text" placeholder="아이디를 입력하세요 (5자 이상)" ref={idRef} />
            <Button onClick={idCheck1} className='idOverlap ' variant="primary" type="button" >아이디 중복 확인</Button>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label><p>Password</p></Form.Label>
            <Form.Control className='SLinput' type="password" placeholder="비밀번호를 입력하세요 (6자 이상)" ref={pwRef} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPasswordck">
            <Form.Label><p>Double Check</p></Form.Label>
            <Form.Control className='SLinput' type="password" placeholder="비밀번호를 다시 입력하세요" ref={cpwRef} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label><p>NAME</p></Form.Label>
            <Form.Control className='SLinput' type="text" placeholder="이름을 입력하세요" ref={nameRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label><p>e-mail</p></Form.Label>
            <Form.Control className='SLinput' placeholder="" ref={addRef} />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="개인정보 수집 및 이용에 동의합니다." />
          </Form.Group>

          <Button variant="primary" type="submit" className='idOverlap SLBtn'>
            Submit
          </Button>
        </Row>

      </Form>

    </div>

  );
}

export default Join;
/*<Row className='row1' >
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><p>비밀번호 입력</p></Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요 (6자 이상)" ref={pwRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridPasswordck">
          <Form.Label><p>비밀번호 확인</p></Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 다시 입력하세요" ref={cpwRef}/>
        </Form.Group>
      </Row>
      
      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label><p>이름</p></Form.Label>
          <Form.Control type="text" placeholder="이름을 입력하세요" ref={nameRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridNick">
          <Form.Label><p>닉네임</p></Form.Label>
          <Form.Control type="text" placeholder="닉네임을 입력하세요" ref={nickRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label><p>e-mail</p></Form.Label>
        <Form.Control placeholder="" ref={addRef}/>
      </Form.Group>
      </Row>* */

/*<div className='main-box info-box'>
    <Form onSubmit={handleJoin}>
      <div className='SignUpImgBox'>
        <img src={Logo} alt="" className='SignUpImg'/>이미지바꿔야함.svg파일로 찾아야해,누군가찾겠지
      </div>
      <Row className='row1 rowch' >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" placeholder="아이디를 입력하세요 (5자 이상)" ref={idRef}/>
          <Button onClick= {idCheck1} className='idOverlap' variant="primary" type="button" >아이디 중복 확인</Button>      
        </Form.Group>
      </Row>

      <Row className='row1' >
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><p>비밀번호 입력</p></Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요 (6자 이상)" ref={pwRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridPasswordck">
          <Form.Label><p>비밀번호 확인</p></Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 다시 입력하세요" ref={cpwRef}/>
        </Form.Group>
      </Row>
      
      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label><p>이름</p></Form.Label>
          <Form.Control type="text" placeholder="이름을 입력하세요" ref={nameRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridNick">
          <Form.Label><p>닉네임</p></Form.Label>
          <Form.Control type="text" placeholder="닉네임을 입력하세요" ref={nickRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label><p>e-mail</p></Form.Label>
        <Form.Control placeholder="" ref={addRef}/>
      </Form.Group>
      </Row>

      <Form.Group className='row1' id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className='row1' variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>*/