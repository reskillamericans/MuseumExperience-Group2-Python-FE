import "./addartwork.css";
import bell from "./bell.png";
import face from "./face1.png";
import logo from "./logo.png";
import museum from "./logo1.png";
import exit from "./logout.png";
import mail from "./mail.png";
import search from "./search.png";
import pluscircle from "./plus-circle.png";
import plus from "./plus.png";

function Addartwork() {
  return (
    <div className="Addartwork_body">
      <div className="Addartwork_grid">
        <div className="Addartwork_header">
          <div className="Addartwork_searchform">
            <form action="/action_page.php" className="Addartwork_search">
              <input type="text" className="Addartwork_input" name="search" />
              <button type="submit" className="Addartwork_button">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
          <img src={mail} alt="email" id="Addartwork_mail" />
          <img src={bell} alt="notifications" id="Addartwork_bell" />
          <img src={exit} alt="logout" id="Addartwork_exit" />
          <img src={face} alt="face" id="Addartwork_profile" />
        </div>
        <div className="Addartwork_logo">
          <img src={logo} alt="logo" />
          <img src={museum} alt="museum" />
        </div>
        <div className="Addartwork_aside">
          <button className="Addartwork_nav">NAVIGATION MENU</button>
          <button className="Addartwork_aside-b1">Dashboard</button>
          <button className="Addartwork_aside-b2">Exhibits</button>
          <button className="Addartwork_aside-b3">Admin Roles</button>
          <p className="Addartwork_stats">Total No. Exhibits</p>{" "}
          <p className="Addartwork_number">46</p>
          <p className="Addartwork_stats">Total No. Questions</p>{" "}
          <p className="Addartwork_number">13</p>
          <p className="Addartwork_stats">Answered Questions</p>{" "}
          <p className="Addartwork_number">10</p>
          <p className="Addartwork_stats">Unanswered Questions</p>{" "}
          <p className="Addartwork_number">3</p>
        </div>
        <div className="Addartwork_main">
          <p id="Addartwork_mainp">Add Art Work</p>
          <div className="form2">
            <form action="/action_page.php" className="Addartwork_form">
              <label className="Addartwork_mainlabelT">Title</label>
              <input
                type="text"
                name="title"
                className="Addartwork_maininput-1"
              />
              <div className="Addartwork_artistname">
              <label className="Addartwork_mainlabelN">Artist's Name</label>
              <input
                type="text"
                name="artist"
                className="Addartwork_maininput-2"
              />
              </div>
              <br />
              <input type="text" className="Addartwork_empty1"/>
              <label className="Addartwork_mainlabelD">Description</label>
              <textarea
                name="description"
                cols="40"
                rows="8"
                placeholder="Full Description:Maximum 5000 characters"
                maxlength="5000"
                className="Addartwork_maininput-3"
              />
            </form>
            <div className="Addartwork_empty">
              <p className="Addartwork_emptyp">0/5000</p>
            </div>
            
          <div className="Addartwork_buttoncontainer">
            <button className="Addartwork_button-1">
              Add Image{" "}
              <img src={pluscircle} className="pluscircle" alt="pluscircle" />
            </button>
            <button className="Addartwork_button-2">
              Add Image{" "}
              <img src={pluscircle} className="pluscircle" alt="pluscircle" />
            </button>
            <button className="Addartwork_button-3">
              Add Image{" "}
              <img src={pluscircle} className="pluscircle" alt="pluscircle" />
            </button>
          </div>
          <form action="/action_page.php">
            <div className="Addartwork_URL">
            <label className="Addartwork_mainlabelU">URL</label>
            <input type="url" name="url" className="Addartwork_maininput-4" />
            </div>
          </form>
          <button className="Addartwork_plusart">
            <img src={plus} alt="pluscircle" /> Add Additional Artwork
          </button>
          <div className="Addartwork_savcan">
            <button id="Addartwork_save">Save</button>
            <button id="Addartwork_cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Addartwork;
