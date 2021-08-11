import "./createexhibit.css";
import bell from "./bell.png";
import face from "./proimage.svg";
import logo from "./logo.png";
import exit from "./logout.png";
import mail from "./mail.png";
import search from "./search.png";
import pluscircle from "./plus-circle.png";
import plus from "./plus.png";
import serwhite from "./search.svg";
import poly from "./polygon.svg";

function CreateExhibit() {
  return (
    <div className="crex_container">
      <div className="crex_header">
        <div className="crex_logo">
          <img src={logo} alt="Logo" className="crex_muspic" />{" "}
          <h1>
            MUSEUM ADM<span className="crex_gold">I</span>N
          </h1>
        </div>

        <div className='crex_pnav'>
          <div className="crex_bar">
            <input type="search" id="crex_site-search" name="q"></input>
            <button className="crex_serbut">
              <img src={serwhite} alt="search symbol" className="crex_serwhite" />
              <img src={search} alt="search symbol" className="crex_searchsym" />
            </button>
          </div>
          <div>
            <img src={mail} alt="mail" className="crex_mail" />
            <img src={bell} alt="bell" className="crex_bell" />
            <img src={exit} alt="logout" className="crex_logout" />
            <img src={face} alt="proimage" className="crex_proimage" />
          </div>
        </div>
      </div>


      <div className='crex_body'>
        <div className="crex_nav">
          <div className='crex_navtop'>
            <h2 className="crex_navimen">NAVIGATION MENU</h2>
            <a href="/" className="crex_dash">
              <h3>Dashboard</h3>
            </a>
            <a href="/" className="crex_dash crex_add">
              <h3>Exhibits</h3>
              <img src={poly} alt="triangle" className="crex_poly" />
            </a>
            <a href="/" className="Addart_dash">
              <h3>Admin Roles</h3>
            </a>
          </div>
          <div>
            <p className="crex_P">
              Total No. Exhibits <span className="crex_pink">46</span>
            </p>
            <p className="Addart_P">
              Total No. Questions <span className="crex_pink">13</span>
            </p>
            <p className="crex_P">
              {" "}
              Answered Questions <span className="crex_pink">10</span>
            </p>
            <p className="crex_unans crex_P">
              Unanswered Questions <span className="crex_pink">3</span>
            </p>
          </div>
        </div>

        <div className="crex_main">
          <p id="crex_mainp">Create New Exhibit</p>
          <div className="crex_forms">
            <form action="/action_page.php" className="crex_form">
              <label className="crex_mainlabelT">Exhibit Name</label>
              <input
                type="text"
                name="title"
                className="crex_maininput-1"
              />

              <br />
              <label className="crex_mainlabelD">Description</label>
              <input type="text" className="crex_empty1" />

              <textarea
                name="description"
                cols="40"
                rows="8"
                placeholder="Full Description:Maximum 5000 characters"
                maxlength="5000"
                className="crex_maininput-3"
              />
            </form>

            <p className="crex_emptyp">0/5000</p>

            <div className="crex_buttoncontainer">
              <button className="crex_button-1">
                Add Image{" "}
                <img src={pluscircle} className="crex_pluscircle" alt="pluscircle" />
              </button>
              <button className="crex_button-2">
                Add Image{" "}
                <img src={pluscircle} className="crex_pluscircle" alt="pluscircle" />
              </button>
              <button className="Addartwork_button-3">
                Add Image{" "}
                <img src={pluscircle} className="crex_pluscircle" alt="pluscircle" />
              </button>
            </div>
            <form action="/action_page.php">
              <div className="crex_URL">
                <label className="crex_mainlabelU">URL</label>
                <input type="url" name="url" className="crex_maininput-4" />
              </div>
            </form>
            <button className="crex_plusart">
              <img src={plus} alt="pluscircle" /> Add Additional Artwork
            </button>
            <div className="crex_savcan">
              <button id="crex_save">Save</button>
              <button id="crex_cancel">Cancel</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CreateExhibit;
