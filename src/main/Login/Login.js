import image from "./Loginimages/loginpic.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login__body">
      <img src={image} alt="portraitimage" className="image" />

      <div className="Login_container" id="Login_container">
        <div className="Login_main">
          <div className="login">
            <h3>Log In</h3>
          </div>
          <div className="Login_form">
            <p>Welcome back</p>
            <h1>Login to access your personal account.</h1>
            <form action="#" className="myForm">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <div className="Login_link">
            <Link className="a">Forgot Password?</Link>
          </div>
          <div className="loginbutton">
            <button className="loginbtn">Login</button>
          </div>
        </div>
        <div className="Login_header">
          <button className="registerbtn">Register</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
