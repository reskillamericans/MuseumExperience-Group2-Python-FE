import "./profile.css";
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

function Profile() {
  return (
    <div id="Profile_grid">
      <div className="Profile_header">
        <div className="Profile_searchform">
          <form action="/action_page.php" className="Profile_search">
            <input className="profileInput" type="text" name="search" />
            <button type="submit" className="Profile_button">
              <img src={search} />
            </button>
          </form>
        </div>
        <img src={mail} alt="email" id="Profile_mail" />
        <img src={bell} alt="notifications" id="Profile_bell" />
        <img src={exit} alt="logout" id="Profile_exit" />
        <img src={face} alt="face" id="Profile_profile" />
      </div>
      <div className="Profile_logo">
        <img src={logo} alt="logo" />
        <img src={name} alt="museum" />
      </div>
      <div className="Profile_aside">
        <button id="Profile_button1">Sign Out</button>
        <p className="Profile_stats">Total No. Exhibits</p> <p className="Profile_number">46</p>
        <p className="Profile_stats">Total No. Questions</p>{" "}
        <p className="Profile_number">13</p>
        <p className="Profile_stats">Answered Questions</p> <p className="Profile_number">10</p>
        <p className="Profile_stats">Unanswered Questions</p>{" "}
        <p className="Profile_number">3</p>
      </div>
      <div className="Profile_mainbody">
        <p id="Profile_p1">Profile</p>
        <div className="Profile_container1">
          <img src={face} alt="face" id="Profile_face" />
          <div className="Profile_info">
            <p>Tiffany Fambry</p>
            <p>Tiffany.Fambry@museum.com</p>
            <p>Curator</p>
          </div>
          <p id="Profile_p2">Recently Edited Exhibits</p>
          <div className="Profile_container2">
            <button className="Profile_b2">
              <img src={arrowleft} />
            </button>
            <img src={flowers} alt="flowers" id="Profile_flowers" />
            <img src={paint} alt="paint" id="Profile_paint" />
            <img src={impression} alt="impression" id="Profile_impression" />
            <button className="Profile_b2">
              <img src={arrowright} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
