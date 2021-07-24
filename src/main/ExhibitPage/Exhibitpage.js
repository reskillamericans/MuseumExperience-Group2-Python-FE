import "./Exhibitpage.css";
import Firstimage from "./img/image1.png";
import Secondimage from "./img/image2.png";
import Fourthimage from "./img/image4.png";
import Fifthimage from "./img/image5.png";
import Sixthimage from "./img/image6.png";

function ExhibitPage() {
  return (
    <>
      <div id="exhibit_page_row1" className="exhibit_page_rows">
        <div className="exhibit_page_image-name">
          <img className="exhibit_page_row1-pics" src={Firstimage} />

          <p>Van Gogh Exhibit</p>
        </div>

        <div className="exhibit_page_image-name">
          <img src={Secondimage} />

          <p>DaVinci Exhibit</p>
        </div>

        <div className="exhibit_page_image-name">
          <img id="exhibit_page_image3" src={Secondimage} />

          <p>Degas Exhibit</p>
        </div>
      </div>

      <div id="exhibit_page_row2" className="exhibit_page_rows">
        <div className="exhibit_page_image-name">
          <img src={Fourthimage} />
          <p>Egyptian Art Exhibit</p>
        </div>

        <div className="exhibit_page_image-name">
          <img src={Fifthimage} />
          <p>Grecian Sculpture</p>
        </div>

        <div className="exhibit_page_image-name">
          <img src={Sixthimage} />
          <p>Bronze Age</p>
        </div>
      </div>
    </>
  );
}

export default ExhibitPage;
