import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'


const Login = () => {

  const nav = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();
  
  const [userData,setUserData] = useState({})

  const handleLogin = (e)=>{
    e.preventDefault();

    console.log(idRef.current.value,pwRef.current.value);
    
    setUserData({
      id : idRef.current.value,
      pw : pwRef.current.value
    })
  }
  useEffect(()=>{
    userData.id !==undefined &&
    axios.post('http://localhost:8888/user/login',{userData : userData})
    .then((res)=>{
      console.log(res.data.result);
      if(res.data.result == 'success'){
        alert(res.data.id+' 님 , 환영합니다!')


        sessionStorage.setItem('id',res.data.id)

        sessionStorage.getItem('id')
        nav('/')

      }
    })
  },[userData])




  return (
  
    <div className='LoginBox'><Form onSubmit={handleLogin}>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Id" ref={idRef} className='LoginId' />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={pwRef} className='LoginPw'/>
    </Form.Group>
  <Button variant="primary" type="submit" className='LoginSubmit'>
    Submit
  </Button>
</Form>
</div>
  )
}

export default Login