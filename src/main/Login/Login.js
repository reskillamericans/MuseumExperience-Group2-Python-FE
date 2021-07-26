import image from "./Loginimages/loginpic.png";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <img src={image} alt="portraitimage" class="image" />

      <div class="Login_container" id="Login_container">
        <div class="Login_main">
          <div class="login">
            <h3>Log In</h3>
          </div>
          <div class="Login_form">
            <p>Welcome back</p>
            <h1>Login to access your personal account.</h1>
            <form action="#">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <div class="Login_link">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="loginbutton">
            <button class="loginbtn">Login</button>
          </div>
        </div>
        <div class="Login_header">
          <button class="registerbtn">Register</button>
        </div>
      </div>
    </>
  );
}
export default Login;
