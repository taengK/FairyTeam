import React, { useEffect, useRef, useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

import "../../../css/Hold/01_SignIn_Login/SLOverlay.css";
import "../../../css/Hold/01_SignIn_Login/Signup.css";
import "../../../css/Hold/01_SignIn_Login/Login.css";

const SignUpLogin = () => {
    const overlayRef = useRef(null);
    const [activePanel, setActivePanel] = useState('sign-in');

    useEffect(() => {
        const overlay = overlayRef.current;

        const handleSignUpClick = () => {
            setActivePanel('sign-up');
        };

        const handleSignInClick = () => {
            setActivePanel('sign-in');
        };

        const signUpButton = overlay.querySelector('.overlay-panel.overlay-right #signUp');
        const signInButton = overlay.querySelector('.overlay-panel.overlay-left #signIn');


        if (signUpButton && signInButton) {
            signUpButton.addEventListener('click', handleSignUpClick);
            signInButton.addEventListener('click', handleSignInClick);
        }

  return (
    <div className='SLBody' style={{backgroundColor:"green"}}>
        <h2 className='SLH2'>Weekly Coding Challenge #1: Sign in/up Form</h2>
        <ul className='container' id="container">
            <li class="form-container sign-up-container">
                <SignUp/>
            </li>
            <li class="form-container sign-in-container">
                <Login/>
            </li>
            <li className='overlay-container' >
                <SLOverlay />
            </li>
        </ul>
    </div>
  )
}

export default SignUpLogin;
