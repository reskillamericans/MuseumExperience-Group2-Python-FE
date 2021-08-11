import "./AdminProfile.css";
import face from "./face1.png";
import flowers from "./flowers.png";
import paint from "./paint.png";
import impression from "./impression.png";
import search from "./search.png";
import mail from "./mail.png";
import bell from "./bell.png";
import exit from "./logout.png";
import logo from "./logo.png";
import name from "./logo1.png";
import arrowright from "./arrowright.png";
import arrowleft from "./arrowleft.png";

function AdminProfilePage() {
  return (
    <div className="adminProfile_body">
      <div id="adminProfile_grid">
        <div className="adminProfile_header">
          <div className="adminProfile_searchform">
            <form action="/action_page.php" className="adminProfile_search">
              <input className="adminprofileInput" type="text" name="search" />
              <button type="submit" className="adminProfile_button">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
          <img src={mail} alt="email" id="adminProfile_mail" />
          <img src={bell} alt="notifications" id="adminProfile_bell" />
          <img src={exit} alt="logout" id="adminProfile_exit" />
          <img src={face} alt="face" id="adminProfile_profile" />
        </div>
        <div className="adminProfile_logo">
          <img src={logo} alt="logo" />
          <img src={name} alt="museum" />
        </div>
        <div className="adminProfile_aside">
          <button id="adminProfile_button1">Sign Out</button>
          <p className="adminProfile_stats">Total No. Exhibits</p>{" "}
          <p className="adminProfile_number">46</p>
          <p className="adminProfile_stats">Total No. Questions</p>{" "}
          <p className="adminProfile_number">13</p>
          <p className="adminProfile_stats">Answered Questions</p>{" "}
          <p className="adminProfile_number">10</p>
          <p className="adminProfile_stats Profile_last-stat">Unanswered Questions</p>{" "}
          <p className="adminProfile_number">3</p>
        </div>
        <div className="adminProfile_mainbody">
          <p id="adminProfile_p1">Profile</p>
          <div className="adminProfile_container1">
            <img src={face} alt="face" id="adminProfile_face" />
            <div className="adminProfile_info">
              <p>Tiffany Fambry</p>
              <p>Tiffany.Fambry@museum.com</p>
              <p>Curator</p>
            </div>

            <button className='adminProfile_total'>
              <span className='adminProfile_num'>20</span>
              <br /> Total Answered Questions
            </button>
          </div>
          <p id="adminProfile_p2">Recently Edited Exhibits</p>
          <div className="adminProfile_container2">
            <button className="adminProfile_b2">
              <img src={arrowleft} alt="arrow" />
            </button>
            <img src={flowers} alt="flowers" id="adminProfile_flowers" />
            <img src={paint} alt="paint" id="adminProfile_paint" />
            <img src={impression} alt="impression" id="adminProfile_impression" />
            <button className="adminProfile_b2">
              <img src={arrowright} alt="arrow" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminProfilePage;
