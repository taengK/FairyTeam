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

        return () => {
            if (signUpButton && signInButton) {
                signUpButton.removeEventListener('click', handleSignUpClick);
                signInButton.removeEventListener('click', handleSignInClick);
            }
        };
    }, []);

    return (
        <div className='SLBody'>
            <h2 className='SLH2'>문구 생각해보자</h2>
            <ul className='container' id="container">
                <li className="form-container sign-up-container">
                    <SignUp />
                </li>
                <li className="form-container sign-in-container">
                    <Login />
                </li>
                <li className='overlay-container' style={{ display: "none" }}>
                    <div className="overlay" ref={overlayRef}>
                        <div className={`overlay-panel overlay-left ${activePanel === 'sign-in' ? 'active' : ''}`}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us, please login with your personal info.</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className={`overlay-panel overlay-right ${activePanel === 'sign-up' ? 'active' : ''}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us.</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SignUpLogin;
