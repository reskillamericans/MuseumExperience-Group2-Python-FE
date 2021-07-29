import React from "react";
import { Link } from "react-router-dom";

function footer1() {
  return (
    <div classNAme="background">
      <body className="footerContainer">
        <div className="footCol-1">
          <h1 className="foot-headings">VISIT US</h1>
          <p>
            Avenue of the Arts
            <br />
            465 Huntington Avenue
            <br />
            Boston, MA 02155
          </p>
        </div>

        <div className="footCol-2">
          <p>
            <h1 className="foot-headings">
              SIGN UP FOR MUSEUM EXPERIENCE MAIL
            </h1>
            Get updates on what's happening at Museum Experience, from
            exhibitions and programs to special events and more
          </p>
          <label className="address" for="email">
            Email Address
          </label>
          <form className="email-form">
            <input type="email" id="email" name="email" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="footCol-3">
          <Link className="a">SUPPORT</Link> <br />
          <Link className="a">MEMBERSHIP</Link> <br />
          <Link className="a">HOST AN EVENT</Link> <br />
          <Link className="a">CORPORATE SUPPORT</Link>
        </div>
      </body>
    </div>
  );
}
export default footer1;
