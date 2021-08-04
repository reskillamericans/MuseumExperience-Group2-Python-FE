import "./SignUp.css";

import React from "react";

export default function SignUp() {
  return (
    <>
      <div className="signup-header">
        Museum Adm<span className="signup-span">i</span>n
      </div>
      <div className="signup-purple_background">
        <div className="signup-container1">
          <div className="signup-Sign_up_box">
            <h1 className="signup-h1">Sign Up</h1>

            <form className="signup-form">
              <label>Email</label>
              <br />
              <input className="signup-input" type="text" />
              <br />

              <label>Password</label>
              <br />
              <input className="signup-input" type="text" />
              <br />

              <label>First Name</label>
              <br />
              <input className="signup-input" type="text" />
              <br />

              <label>Last Name</label>
              <br />
              <input className="signup-input" type="text" />
              <br />
            </form>
            <button className="signup-button">LOGIN</button>
          </div>
          <text className="signup-text">
            Already have an account?
            <span className="signup-span_2">Log in</span>
          </text>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
