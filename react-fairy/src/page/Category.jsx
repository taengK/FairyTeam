import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'


function Category() {

    const nav = useNavigate()
    
    const idRef =useRef()
    const pwRef =useRef()
    const cpwRef = useRef()
    const nameRef=useRef()
    const nickRef=useRef()
    const addRef=useRef()
}