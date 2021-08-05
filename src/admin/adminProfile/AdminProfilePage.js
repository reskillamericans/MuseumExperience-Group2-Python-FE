import React from "react";
import "./AdminProfile.css"
import Image7 from "./Image7 84.png";
import Search from "./search.png";
import Mail from "./mail.png";
import Bell from "./bell.png";
import LogOut from "./logout.png";
import ProfileImage from "./Ellipse 7.png";
import ProfileImage1 from "./Ellipse 5.png";
import Image8 from "./Image8 83.png";
import Image9 from "./Image9 3.svg";
import LogoImage1 from "./LogoImage1 group 6.svg";
import LogoImage from "./LogoImage Museum.svg";
import Rectangle from "./Rectangle 48.svg";
import Image15 from "./Image15 1.png";
import Image3 from "./Image3 80.jpg";
import Image4 from "./Image4 81.png";
import Image5 from "./Image5 82.png";
import Image16 from "./Image16 1.png";

function AdminProfilePage () {
  return (
   <div className="adminprofile_body"> 
    <div className="adminprofile_Profile2">
      <div className="adminprofile_header">
        <div>
          <img src={LogoImage1} alt="logo" className="adminprofile_logo" />
          <img src={LogoImage} alt="museum" className="adminprofile_musad" />
        </div>

        <div className="adminprofile_nav">
          <div>
            <div className="adminprofile_bar">
              <img src={Rectangle} alt="museum" />
            </div>
            <div classname="adminprofile_search">
              <div className="adminprofile_magnifier">
                <img src={Search} alt="museum" />
              </div>
            </div>
          </div>
          <div>
            <div className="adminprofile_icons">
              <img src={Mail} alt="museum" />
              <img src={Bell} alt="museum" />
              <img src={LogOut} alt="museum" />
              <img src={ProfileImage1} alt="Tiffany" />
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="adminprofile_text-2">
        <h3>Profile</h3>
      </div>

      <div className="adminprofile_rectangle-container">
        <div className="adminprofile_rectangle2">
          <img src={Image7} alt="background" />
        </div>
      </div>

      <div className="adminprofile_side-bar">
        <div className="adminprofile_text">
          <h2>Sign Out</h2>
        </div>

        <img src={Image9} alt="small bar" />
        <div></div>
      </div>

      <div className="adminprofile_side-container">
        <img src={Image8} alt="small rectangle" />
      </div>

      <div className="adminprofile_text-3">
        <h4>
          Total No. Exhibits <span> 46</span>
        </h4>
        <h4>
          Total No. Questions<span> 1</span>
        </h4>
        <h4>
          Answered Questions <span> 10</span>
        </h4>
        <h4>
          Unanswered Questions<span> 3</span>
        </h4>
      </div>

      <div className="adminprofile_mid-container">
        <img src={ProfileImage} alt="pic" />
      </div>

      <div className="adminprofile_lower-container">
        <h3 className="adminprofile_tiff">Tiffany Farmboy</h3>
        <h4 className="adminprofile_tiffe">Tiffany.Farmboy@museum.com</h4>
        <h3 className="adminprofile_cur">Curator</h3>
      </div>

      <button>
        20
        <br /> Total Answered Questions
      </button>

      <div className="adminprofile_text-4">
        <h4>Recently edited exhibits</h4>
      </div>

      <div className="adminprofile_box-container">
        <div className="adminprofile_left-arrow">
          <img src={Image15} alt="left arrow" />
        </div>
        ``
        <div classname="adminprofile_box1">
          <img src={Image3} alt="flower" />
        </div>
        <div className="adminprofile_box2">
          <img src={Image4} alt="abstract" />
        </div>
        <div className="adminprofile_box3">
          <img src={Image5} alt="mod art" />
        </div>
        <div className="adminprofile_right-arrow">
          <img src={Image16} alt="right arrow" />
        </div>
      </div>
    </div>
   </div> 
  );
}

export default AdminProfilePage;
