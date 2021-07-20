import image from "./Loginimages/loginpic.png";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <img src={image} alt="portraitimage" class="image" />

      <div class="container" id="container">
        <div class="main">
          <div class="login">
            <h3>Log In</h3>
          </div>
          <div class="form">
            <p>Welcome back</p>
            <h1>Login to access your personal account.</h1>
            <form action="#">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <div class="link">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="loginbutton">
            <button class="loginbtn">Login</button>
          </div>
        </div>
        <div class="header">
          <button class="registerbtn">Register</button>
        </div>
      </div>
    </>
  );
}
export default Login;
