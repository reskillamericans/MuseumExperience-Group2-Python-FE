import React from "react";
import logo from "./Group2logo.svg";
import "./login.css";

export default function AdminLogin() {
  return (
    <div className="adminlogin-container">
      <div className="adminlogin-adminL">
        <img className="adminlogin-logo" src={logo} alt="Logo" />
        <h1 className="adminlogin-adminlog">ADMIN LOGIN</h1>
        <h1 className="adminlogin-musad">
          MUSEUM ADM<span className="adminlogin-gold">I</span>N
        </h1>
        <form className="adminlogin-form">
          <label className="adminlogin-email" for="email">
            Email
          </label>{" "}
          <br />
          <input
            className="adminlogin-input1"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />{" "}
          <br />
          <label className="adminlogin-pass" for="password">
            Password
          </label>{" "}
          <br />
          <input
            className="adminlogin-input2"
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
          />{" "}
          <br />
          <button className="adminlogin-login">Login</button>
        </form>
        <div className="adminlogin-create">
          Don't have an account? <a href="/"> Create account</a>
        </div>
      </div>
      <div className="adminlogin-account">
        <span className="adminlogin-forgot">
          <a href="/">Forgot your password?</a>
        </span>
        <span>
          <a href="/" className="adminlogin-dont">
            Don't have an account?{" "}
            <span className="adminlogin-getst">Get Started</span>
          </a>
        </span>
      </div>
    </div>
  );
}
