import "./createexhibit.css";
import bell from "./bell.png";
import face from "./face1.png";
import logo from "./logo.png";
import museum from "./logo1.png";
import exit from "./logout.png";
import mail from "./mail.png";
import search from "./search.png";
import pluscircle from "./plus-circle.png";
import plus from "./plus.png";

function CreateExhibit() {
  return (
    <div className="createExhibit_body">

    <div className="createExhibit_grid">
      <div className="createExhibit_header">
        <div className="searchform">
          <form action="/action_page.php" className="createExhibit_search">
            <input type="text" className="createExhibit_input" name="search" />
            <button type="submit" className="createExhibit_button">
              <img src={search} />
            </button>
          </form>
        </div>
        <img src={mail} alt="email" id="createExhibit_mail" />
        <img src={bell} alt="notifications" id="createExhibit_bell" />
        <img src={exit} alt="logout" id="createExhibit_exit" />
        <img src={face} alt="face" id="createExhibit_profile" />
      </div>
      <div className="createExhibit_logo">
        <img src={logo} alt="logo" />
        <img src={museum} alt="museum" />
      </div>
      <div className="createExhibit_aside">
        <button className="createExhibit_nav">NAVIGATION MENU</button>
        <button className="aside-b1">Dashboard</button>
        <button className="aside-b2">Exhibits</button>
        <button className="aside-b3">Admin Roles</button>
        <p className="createExhibit_stats">Total No. Exhibits</p> <p className="number">46</p>
        <p className="createExhibit_stats">Total No. Questions</p>{" "}
        <p className="createExhibit_number">13</p>
        <p className="createExhibit_stats">Answered Questions</p> <p className="number">10</p>
        <p className="createExhibit_stats">Unanswered Questions</p>{" "}
        <p className="createExhibit_number">3</p>
      </div>
      <div className="createExhibit_main">
        <p id="mainp">Create New Exhibit</p>
        <div className="form2">
          <form action="/action_page.php" className="createExhibit_form">
            <label className="mainlabel">Exhibit Name</label>
            <input type="text" name="title" className="maininput-1" />
            <br />
            <label className="mainlabel">Description</label>
            <textarea
              name="description"
              cols="40"
              rows="8"
              placeholder="Full Description:Maximum 5000 characters"
              maxlength="5000"
              className="maininput-3"
            />
          </form>
          <div className="empty">
            <p className="emptyp">0/5000</p>
          </div>
          <div className="empty1"></div>
        </div>
        <div className="createExhibit_buttoncontainer">
          <button className="button-1">
            Add Image <img src={pluscircle} className="pluscircle" />
          </button>
          <button className="button-2">
            Add Image <img src={pluscircle} className="pluscircle" />
          </button>
          <button className="button-3">
            Add Image <img src={pluscircle} className="pluscircle" />
          </button>
        </div>
        <form action="/action_page.php">
          <label className="mainlabel">URL</label>
          <input type="url" name="url" className="maininput-4" />
        </form>
        <button className="plusart">
          <img src={plus} /> Add Additional Artwork
        </button>
        <div>
          <button id="createExhibit_save">Save</button>
          <button id="createExhibit_cancel">Cancel</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateExhibit;
