import "./Roles.css";
import profile from "./imgs/profile.png";
import users from "./imgs/users.png";
import ellipse1 from "./imgs/Ellipse1.png";
import ellipse2 from "./imgs/Ellipse2.png";
import ellipse3 from "./imgs/Ellipse3.png";
import ellipse4 from "./imgs/Ellipse4.png";
import ellipse5 from "./imgs/Ellipse5.png";
import ellipse6 from "./imgs/Ellipse6.png";
import ellipse7 from "./imgs/Ellipse7.png";
import arrow from "./imgs/arrow.png";
import dots from "./imgs/dots.png";
import fadedDots from "./imgs/fadedDots.png";
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

function Roles() {
  return (
    <div className="rolesBackground">
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap")
      </style>

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

      <div className='adrol-body'>
        <div className="roles_nav">
          <div className='adex-navtop'>
            <h2 className="navimen">NAVIGATION MENU</h2>
            <a href="/dashboard" className="Exhibit_dash">
              <h3>Dashboard</h3>
            </a>
            <a href="/admin-exhibit" className="Exhibit_dash">
              <h3>Exhibits</h3>

            </a>
            <a href="/admin-role" className="Exhibit_dash exhi">
              <h3>Admin Roles</h3>
              <img src={poly} alt="triangle" className="roles-poly" />
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
            <p className="exhibitP">
              Unanswered Questions <span className="Exhibit_pink">3</span>
            </p>
          </div>
        </div>




        <div className="rolesContainer">
          <img className="rolesProfile" src={profile} alt="" />

          <div className="rolesPeopleMobile">
            <img className="rolesPeopleVector" src={users} alt="" />
            <p className="rolesCount">6 People</p>
          </div>

          <div className="rolesPeople">
            <img className="rolesPeopleVector" src={users} alt="" />
            <p className="">People</p>
          </div>

          <div className="rolesGrey rolesAdd">
            <i class="fas fa-user-plus"></i>
            <p>Invite people</p>
          </div>
          <div className="rolesGrey rolesLabel">
            <p className="rolesNameLabel">Name</p>
            <p className="rolesEmailLabel">Email</p>
            <p>Role</p>
          </div>

          <div className="rolesMember">
            <img className="rolesUserImg" src={ellipse1} alt="" />
            <p className="rolesName rolesNameRole">Tiffany Farmbry </p>
            <p className="rolesEmail">Tiffany.Farmbry@museum.com </p>
            <p className="rolesRole rolesNameRole">Curator </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
          </div>
          <div className="rolesMember">
            <img className="rolesUserImg" src={ellipse2} alt="" />
            <p className="rolesName rolesNameRole">Mika Collins</p>
            <p className="rolesEmail">Mika.Collins@museum.com </p>
            <p className="rolesRole rolesNameRole">Staff </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
          </div>
          <div className="rolesMember">
            <img className="rolesUserImg" src={ellipse3} alt="" />
            <p className="rolesName rolesNameRole">Anna Silverspoon </p>
            <p className="rolesEmail">Anna.Silverspoon@museum.com </p>
            <p className="rolesRole rolesNameRole">Staff </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
          </div>
          <div className="rolesMember">
            <img className="rolesUserImg" src={ellipse4} alt="" />
            <p className="rolesName rolesNameRole">Georges James </p>
            <p className="rolesEmail">George.James@museum.com </p>
            <p className="rolesRole rolesNameRole">Curator </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
          </div>
          <div className="rolesMember">
            <img className="rolesUserImg" src={ellipse5} alt="" />
            <p className="rolesName rolesNameRole">Dominique Lovely </p>
            <p className="rolesEmail">Domonique.Lovely@museum.com </p>
            <p className="rolesRole rolesNameRole">Staff </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
          </div>

          <div className="rolesMember rolesButtonMobile">
            <img className="rolesUserImg" src={ellipse6} alt="" />
            <p className="rolesName rolesNameRole">Eden Summers </p>
            <p className="rolesRole rolesNameRole">Curator </p>
            <img className="" src={arrow} alt="" />
            <img className="fadedDots" src={fadedDots} alt="" />
            <button>
              <span className="rolesPlus">+</span> Add new member
            </button>
          </div>

          <div className="rolesMember rolesLastUser">
            <img className="rolesUserImg" src={ellipse7} alt="" />
            <p className="rolesName rolesNameRole">Eden Summers </p>
            <p className="rolesEmail">Eden.Summers@museum.com </p>
            <p className="rolesRole rolesNameRole">Curator </p>
            <img className="rolesArrow" src={arrow} alt="" />
            <img className="" src={dots} alt="" />
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
      </div>

    </div>


  );
}

export default Roles;
