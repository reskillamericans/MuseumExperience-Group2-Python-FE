import React from "react";
import logo from "./Group2logo.svg";
import "./login.css"

export default function AdminLogin() {
  return (
    <div className="container">
      <div className="adminL">
        <img src={logo} alt="Logo" />
        <h1 className="adminlog">ADMIN LOGIN</h1>
        <h1 className="musad">
          MUSEUM ADM<span className="gold">I</span>N
        </h1>
        <form>
          <label className="email" for="email">
            Email
          </label>{" "}
          <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />{" "}
          <br />
          <label className="pass" for="password">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
          />{" "}
          <br />
          <button className="login">Login</button>
        </form>
        <div className="create">
          Don't have an account? <a href=""> Create account</a>
        </div>
      </div>
      <div className="account">
        <span className="forgot">
          <a href="">Forgot your password?</a>
        </span>
        <span>
          <a href="" className="dont">
            Don't have an account? <span className="getst">Get Started</span>
          </a>
        </span>
      </div>
    </div>
  );
}
