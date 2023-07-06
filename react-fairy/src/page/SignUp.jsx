import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef,useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Logo from '../Images/Logo.png'

// html로 회원정보 관리하는거 가능 (nunjucks) node Ex08DB
// 아이디 중복체크 기능 ( 버튼식 또는 텍스트창 벗어나면 자동으로 체크 )
//    >> DB에서 아이디를 PK? 로 등록해놔서 중복 알아서 걸러지긴 함..
// 비밀번호 재확인 기능




function Join() {

  const nav = useNavigate()
  
  const idRef =useRef()
  const pwRef =useRef()
  const cpwRef = useRef()
  const nameRef=useRef()
  const nickRef=useRef()
  const addRef=useRef()

  const [userData,setUserData]=useState({})

  // ... 코드 아니고 함수 접은거임
  const handleJoin =(e)=>{
    console.log('handle Join Function'
    ,idRef.current.value
    ,pwRef.current.value
    ,nameRef.current.value
    ,nickRef.current.value
    ,addRef.current.value);
      

    // form이 submit 되지 못하도록 작업
    e.preventDefault();


    setUserData({
      id : idRef.current.value, 
      pw : pwRef.current.value,
      cpw : cpwRef.current.value,
      name : nameRef.current.value,
      nick : nickRef.current.value,
      add : addRef.current.value,      
    })
  }

  useEffect(()=>{
    console.log('userData : ',userData.id)
    /*useEffect의 특성 상, 무조건 화면의 첫 갱신 때 함수가 호출될 수 밖에 없다.
    비어있는 값을 가지고 회원가입을 하면 안되니까 
    화면의 첫 갱신때는 회원가입 로직이 
    실행되지 않도록 조건을 걸어둔 것!*/
    if(userData.id !== undefined && userData.pw === userData.cpw){
      //  id 값이 초기상태인 undefined가 아니면서 pw, cpw가 일치할 때만 값을 전송함
    axios.post('http://localhost:8888/user/signup',{
      userData : userData
    })

    .then((res)=>{
      console.log(res.data.result);
      if (res.data.result == 'success'){
        alert('회원가입을 축하드립니다')
        nav('/')
      }else if(res.data.result == 'duplicated'){
        alert('이미 등록된 아이디입니다. 다시 입력하세요') // 아이디 옆에 중복체크 버튼으로 다른 정보 입력 전에 아이디부터 확인해보기
        idRef.current.value=''
        pwRef.current.value=''
        cpwRef.current.value=''
        nameRef.current.value=''
        nickRef.current.value=''
        addRef.current.value=''
        idRef.current.focus()
      }

    })
    .catch(()=>{
      console.error('실패!')
    })
  }else if(userData.id !== undefined && userData.pw !== userData.cpw){
        // id가 초기상태가 아니면서 pw, cpw가 일치하지 않으면 비밀번호를 다시 입력하게
    alert('비밀번호가 일치하지 않습니다')
    pwRef.current.value=''
    cpwRef.current.value=''
    pwRef.current.focus()
  }
  },[userData])

  // const id_check = ()=> {
  //   alert('')
  // }




  return (
    <div className='main-box info-box'>
    <Form onSubmit={handleJoin}>
      <div className='SignUpImgBox'>
        <img src={Logo} alt="" className='SignUpImg'/>이미지바꿔야함.svg파일로 찾아야해,누군가찾겠지
      </div>
      <Row className='row1 rowch' >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter id" ref={idRef}/>
          <button className='idOverLap' style={{width:"150px",height:"37px",marginTop:"10px",padding:"5px", borderRadius:'25px', backgroundColor:"red", color:'white',border:"none" }}>아이디 중복 체크</button>
          <Button className='idOverlap' variant="primary" type="submit" >아이디 중복 확인</Button>      
        </Form.Group>
      </Row>

      <Row className='row1' >
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><p>비밀번호입력</p></Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" ref={pwRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridCheckPassword">
          <Form.Label>Check pw</Form.Label>
          <Form.Control type="password" placeholder="Check Pw" ref={cpwRef}/>
        </Form.Group>
      </Row>
      
      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label><p>이름</p></Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" ref={nameRef}/>
        </Form.Group>
      </Row>

      <Row className='row1'>
        <Form.Group as={Col} controlId="formGridNick">
          <Form.Label><p>닉네임</p></Form.Label>
          <Form.Control type="text" placeholder="닉네임을 입력해주세요" ref={nickRef}/>
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
    </div>
  );
}

export default Join;