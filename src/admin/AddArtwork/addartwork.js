import "./addartwork.css";
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

function Addartwork() {
  return (
    <div className="Addart_container">
      <div className="Addart_header">
        <div className="Addart_logo">
          <img src={logo} alt="Logo" className="Addart_muspic" />{" "}
          <h1>
            MUSEUM ADM<span className="Addart_gold">I</span>N
          </h1>
        </div>

        <div className='Addart_pnav'>
          <div className="Addart_bar">
            <input type="search" id="Addart_site-search" name="q"></input>
            <button className="Addart_serbut">
              <img src={serwhite} alt="search symbol" className="Addart_serwhite" />
              <img src={search} alt="search symbol" className="Addart_searchsym" />
            </button>
          </div>
          <div>
            <img src={mail} alt="mail" className="Addart_mail" />
            <img src={bell} alt="bell" className="Addart_bell" />
            <img src={exit} alt="logout" className="Addart_logout" />
            <img src={face} alt="proimage" className="Addart_proimage" />
          </div>
        </div>
      </div>


      <div className='Addart_body'>
        <div className="Addart_nav">
          <div className='Addart_navtop'>
            <h2 className="Addart_navimen">NAVIGATION MENU</h2>
            <a href="/" className="Addart_dash">
              <h3>Dashboard</h3>
            </a>
            <a href="/" className="Addart_dash Addart_add">
              <h3>Exhibits</h3>
              <img src={poly} alt="triangle" className="Addart_poly" />
            </a>
            <a href="/" className="Addart_dash">
              <h3>Admin Roles</h3>
            </a>
          </div>
          <div>
            <p className="Addart_P">
              Total No. Exhibits <span className="Addart_pink">46</span>
            </p>
            <p className="Addart_P">
              Total No. Questions <span className="Addart_pink">13</span>
            </p>
            <p className="Addart_P">
              {" "}
              Answered Questions <span className="Addart_pink">10</span>
            </p>
            <p className="Addart_unans Addart_P">
              Unanswered Questions <span className="Addart_pink">3</span>
            </p>
          </div>
        </div>

        <div className="Addartwork_main">
          <p id="Addartwork_mainp">Add Art Work</p>
          <div className="Addart_forms">
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
              <label className="Addartwork_mainlabelD">Description</label>
              <input type="text" className="Addartwork_empty1" />

              <textarea
                name="description"
                cols="40"
                rows="8"
                placeholder="Full Description:Maximum 5000 characters"
                maxlength="5000"
                className="Addartwork_maininput-3"
              />
            </form>

            <p className="Addartwork_emptyp">0/5000</p>

            <div className="Addartwork_buttoncontainer">
              <button className="Addartwork_button-1">
                Add Image{" "}
                <img src={pluscircle} className="Addart_pluscircle" alt="pluscircle" />
              </button>
              <button className="Addartwork_button-2">
                Add Image{" "}
                <img src={pluscircle} className="Addart_pluscircle" alt="pluscircle" />
              </button>
              <button className="Addartwork_button-3">
                Add Image{" "}
                <img src={pluscircle} className="Addart_pluscircle" alt="pluscircle" />
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
