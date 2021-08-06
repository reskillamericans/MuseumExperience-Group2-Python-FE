import React from "react";
import "./exhibit.css";
import design from "../Login/Group2logo.svg";
import proimage from "./proimage.svg";
import bell from "./bell.svg";
import logout from "./log-out.svg";
import mail from "./mail.svg";
import searchsym from "./searchsym.svg";
import poly from "./polygon.svg";
import component1 from "./Component 1.svg";
import serwhite from "./search.svg";
import footpro from "./footpro.svg";
import footdash from "./footdash.svg";
import footexhi from "./footexhi.svg";
import footmess from "./footmess.svg";

export default function Exhibit() {
  return (
    <div className="Exhibit_container">

      <div className="Exhibit_header">
        <div className="Exhibit_logo">
          <img src={design} alt="Logo" className="muspic" />{" "}
          <h1>
            MUSEUM ADM<span className="gold">I</span>N
          </h1>
        </div>

        <div className='adex-pnav'>
          <div className="Exhibit_bar">
            <input type="search" id="site-search" name="q"></input>
            <button className="serbut">
              <img src={serwhite} alt="search symbol" className="serwhite" />
              <img src={searchsym} alt="search symbol" className="searchsym" />
            </button>
          </div>
          <div>
            <img src={mail} alt="mail" className="Exhibit_mail" />
            <img src={bell} alt="bell" className="Exhibit_bell" />
            <img src={logout} alt="logout" className="Exhibit_logout" />
            <img src={proimage} alt="proimage" className="proimage" />
          </div>
        </div>
      </div>

      <div className='adEx-body'>
        <div className="Exhibit_nav">
          <div className='adex-navtop'>
            <h2 className="navimen">NAVIGATION MENU</h2>
            <a href="/" className="Exhibit_dash">
              <h3>Dashboard</h3>
            </a>
            <a href="/" className="Exhibit_dash exhi">
              <h3>Exhibits</h3>
              <img src={poly} alt="triangle" className="poly" />
            </a>
            <a href="/" className="Exhibit_dash">
              <h3>Admin Roles</h3>
            </a>
          </div>
          <div>
            <p className="total exhibitP">
              Total No. Exhibits <span className="Exhibit_pink">46</span>
            </p>
            <p className="exhibitP">
              Total No. Questions <span className="Exhibit_pink">13</span>
            </p>
            <p className="exhibitP">
              {" "}
              Answered Questions <span className="Exhibit_pink">10</span>
            </p>
            <p className="unans exhibitP">
              Unanswered Questions <span className="Exhibit_pink">3</span>
            </p>
          </div>
        </div>


        <div className="Exhibit_cards">
          <div class="column">
            <button class="createcard">
              <div>
                <i class="fas fa-plus-circle"></i>
              </div>
              <h3 className="Exhibit_create">Create Exhibit</h3>
            </button>
          </div>

          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 1</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 2</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 3</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 4</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 5</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 6</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 7</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 8</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 9</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 10</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 11</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 12</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 13</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 className="exhibit">Exhibit 14</h3>
              <div>
                <img
                  src={component1}
                  alt="edit content"
                  className="Exhibit_component"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobilefoot">
        <button className="footpro">
          <img src={footpro} alt="profile" />
        </button>
        <button className="footdash">
          <img src={footdash} alt="dashboard" />
        </button>
        <button className="footmess">
          <img src={footmess} alt="messages" />
        </button>
        <button className="footexhi">
          <img src={footexhi} alt="exhibits" />
        </button>
      </div>
    </div>
  );
}
