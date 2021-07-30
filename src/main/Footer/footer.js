import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer1() {
  return (
    <div classNAme="background">
      <div className="footerContainer">

        <div className="footCol-1">
          <h1 className="foot-headings">VISIT US</h1>
          <p className='foot_address'>
            Avenue of the Arts
            <br />
            465 Huntington Avenue
            <br />
            Boston, MA 02155
          </p>
        </div>

        <div className="footCol-2">
          <h1 className="foot-headings">
            SIGN UP FOR MUSEUM EXPERIENCE MAIL
          </h1>
          <p className='foot_updates'>
            Get updates on what's happening at Museum Experience, from
            exhibitions and programs to special events and more
          </p>
          <label className="foot_address" for="email">
            Email Address
          </label>
          <div className='foot_formContainer'>
            <form className="foot_email-form">
              <input type="email" id="email" name="email" />
            </form>
            <button>Sign Up</button>
          </div>
        </div>

        <div className="footCol-3">
          <Link className="foot_a">SUPPORT</Link> <br />
          <Link className="foot_a">MEMBERSHIP</Link> <br />
          <Link className="foot_a">HOST AN EVENT</Link> <br />
          <Link className="foot_a">CORPORATE SUPPORT</Link>
        </div>
      </div>
    </div >
  );
}
export default Footer1;
