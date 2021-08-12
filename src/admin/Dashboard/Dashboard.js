import "./Dashboard.css";
import design from "../Login/Group2logo.svg";
import proimage from "./proimage.svg";
import bell from "./bell.svg";
import logout from "./log-out.svg";
import mail from "./mail.svg";
import searchsym from "./searchsym.svg";
import poly from "./polygon.svg";
import serwhite from "./search.svg";
import footpro from "./footpro.svg";
import footdash from "./footdash.svg";
import footexhi from "./footexhi.svg";
import footmess from "./footmess.svg";

function Dashboard() {
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

      <div className='dash-body'>
        <div className="dash_nav">
          <div className='adex-navtop'>
            <h2 className="navimen">NAVIGATION MENU</h2>
            <a href="/dashboard" className="Exhibit_dash exhi">
              <h3>Dashboard</h3>
            </a>
            <a href="/admin-exhibit" className="Exhibit_dash">
              <h3>Exhibits</h3>
              <img src={poly} alt="triangle" className="dash-poly" />
            </a>
            <a href="/admin-role" className="Exhibit_dash">
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

        <div className="dashboardContainer">
          <div className='dashboardTotalContainer'>
            <div className="dashboardTotals">
              <p className="dashboardCount dashboardTotalMargin">3</p>
              <p className="dashboardTotalText dashboardTotalMargin">
                Total Unanswered Questions
              </p>
            </div>
            <div className="dashboardTotals">
              <p className="dashboardCount dashboardTotalMargin">10</p>
              <p className="dashboardTotalText dashboardTotalMargin">
                Total Answered Questions
              </p>
            </div>
            <div className="dashboardTotals">
              <p className="dashboardCount dashboardTotalMargin">120</p>
              <p className="dashboardTotalText dashboardTotalMargin">
                Total Exhibit Clicks
              </p>
            </div>
          </div>
          <div className="dashboardTableContainer">
            <p className="dashboardTableLabel">Questions</p>
            <table className="dashboardTable">
              <tr className="dashboardRow1">
                <th>
                  <input type="checkbox" name="" value="" />
                </th>
                <th className="dashboardDate">Date</th>
                <th className="dashboardTime">Time</th>
                <th className="dashboardAuthor">Author</th>
                <th className="">Question</th>
              </tr>
              <tr className="dashboardRows">
                <th>
                  <input type="checkbox" name="" value="" />
                </th>
                <th>7-7-21</th>
                <th>2:00 PM</th>
                <th>M. Jay</th>
                <th>What are the featured events for the next upcoming......</th>
              </tr>
              <tr className="dashboardRows dashboardRowMid">
                <th>
                  <input type="checkbox" name="" value="" />
                </th>
                <th>6-10-21</th>
                <th>5:20 PM</th>
                <th>T. Mambrey</th>
                <th>
                  What time period did most Egyptian artifacts originate......
                </th>
              </tr>
              <tr className="dashboardRows">
                <th>
                  <input type="checkbox" name="" value="" />
                </th>
                <th>4-16-21</th>
                <th>1:45 PM</th>
                <th>A. BlackBerry</th>
                <th>Do you have any Renaissance period special......</th>
              </tr>
            </table>
          </div>
        </div>
      </div>


      <div className="dashboardMobile">
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap")
        </style>

        <div className="dashboardTotalsMobile dashboardBoxstyle">
          <p className="dashboardTotalTextMobile">
            Total No. <br /> Members
          </p>
          <p className="dashboardCount">200</p>
        </div>
        <div className="dashboardTotalsMobile dashboardBoxstyle">
          <p className="dashboardTotalTextMobile">
            Total No. <br /> Exhibits
          </p>
          <p className="dashboardCount">46</p>
        </div>
        <div className="dashboardTotalsMobile dashboardBoxstyle">
          <p className="dashboardTotalTextMobile">
            Total No. <br /> Questions
          </p>
          <p className="dashboardCount">13</p>
        </div>
        <div className="dashboardTotalsMobile dashboardBoxstyle">
          <p className="dashboardTotalTextMobile">
            Total No. <br /> Answered Questions
          </p>
          <p className="dashboardCount">10</p>
        </div>
        <div className="dashboardTotalsMobile dashboardBoxstyle">
          <p className="dashboardTotalTextMobile">
            Total No. <br /> Unanswered Questions
          </p>
          <p className="dashboardCount">3</p>
        </div>

        <a
          className="dashboardVisit dashboardBoxstyle"
          target="blank"
          rel="noreferrer"
          href="/"
        >
          Visit Musuem Website
        </a>
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

export default Dashboard;
