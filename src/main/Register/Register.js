import image from "./Registerimages/registerpic.png";
import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register__body">
      <img src={image} alt="portraitimage" class="image" />

      <div class="register_container" id="container">
        <div class="reg_login">
          <button class="loginbtn">Log In</button>
        </div>
        <div class="register">
          <h3>Register</h3>
        </div>
        <div class="registerfor">
          <h1>Register for special updates</h1>
        </div>

        <div class="form1">
          <form action="#" className="reg_form">
            <input type="fullname" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </form>
        </div>
        <div class="form2">
          <form action="#">
            <input type="phone" placeholder="Phone Number" />
            <input type="dateofbirth" placeholder="Date of birth mm/dd/yy" />
            <input type="confirmpassword" placeholder=" Confirm Password" />
          </form>
        </div>
        <div class="contbutton">
          <button class="contbtn">Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Register;
