import React, {useEffect, useRef } from 'react';

const SLOverlay = () => {
  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    if (container && signUpButton && signInButton) {
      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);

      return () => {
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      };
    }
  }, []);

  const handleSignUpClick = () => {
    containerRef.current.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    containerRef.current.classList.remove("right-panel-active");
  };

  return (
    <div>
      <div className="overlay" ref={containerRef}>
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button ref={signInButtonRef} className="ghost" id="signIn" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button ref={signUpButtonRef} className="ghost" id="signUp" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SLOverlay;
