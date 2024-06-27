import React, { useEffect, useState, useRef } from "react";
import './login.css';

function LoginPage(eventName, handler, element = window, props){
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
      }, [handler]);

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });   
    },[eventName, element]);

    return(
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal details</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hi There!</h1>
                        <p>Enter your personal details to open an account with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;