import "./account.css";
import background from "./background.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import search from "./search.png";
import profileimg from "./profileimg.png";
import addimage from "./addimage.png";
import plus from "./plus.png";
import check from "./check.png";
import img4 from "./img4.png";
import React from "react";

function AccountPage() {
  return (
    <div>
      <div className="account-searchbar">
        <p className="account-searchheader">MY ACCOUNT</p>
        <div className="account-searchform">
          <form action="/action_page.php" className="account-search">
            <input
              type="text"
              className="account-input"
              placeholder="Search.."
              name="search"
            />
            <button type="submit">
              <img src={search} alt="search" />
            </button>
          </form>
        </div>
      </div>
      <div className="account-background">
        <img src={background} alt="hands" />
      </div>
      <div className="account-profileimage">
        <div className="account-man">
          <img src={profileimg} alt="profile" />
        </div>
      </div>
      <div className="account-camera">
        <img src={addimage} alt="camera" />
      </div>
      <div className="account-info">
        <p className="account-name">John Smith</p>
        <p className="account-mail">john.smith@email.com</p>
      </div>
      <button className="account-add">Add Exhibit</button>
      <div className="account-maincontainer">
        <p id="account-subscribe">Your Subscribed Exhibits</p>
        <p id="account-upcoming">Upcoming Exhibits</p>
        <div className="account-imagecontainer">
          <img src={img1} alt="portrait" />
          <img src={img2} alt="monalisa" />
          <img src={img3} alt="goldface" />
        </div>

        <div className="account-questions">
          <p id="account-history">Question History</p>
          <button class="account-accordion">
            <img src={check} className="account-check" alt="checkbox" />{" "}
            Suspendisse luctus ornare iacullis{" "}
            <img src={plus} className="account-plus" alt="plus icon" />
          </button>
          <div class="account-panel"></div>

          <button class="account-accordion">
            <img src={check} className="account-check" alt="checkbox" />
            Donec ut feugiat leo. Nullam at mauris eros
            <img src={plus} className="account-plus" alt="plus icon" />
          </button>
          <div class="account-panel"></div>

          <button class="account-accordion">
            <img src={check} className="account-check" alt="checkbox" /> Fusce
            ut consequat eros, eget vehicula ante
            <img src={plus} className="account-plus" alt="plus icon" />
          </button>
          <div class="account-panel"></div>
        </div>
      </div>
      <div className="account-line">
        <img src={img4} alt="linebreak" />
      </div>
     
      
    
    </div>
  );
}
export default AccountPage;
