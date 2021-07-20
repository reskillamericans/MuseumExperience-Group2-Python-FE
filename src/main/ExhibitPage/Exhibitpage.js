import "./Exhibitpage.css";
import Firstimage from "./img/image1.png";
import Secondimage from "./img/image2.png";
import Fourthimage from "./img/image4.png";
import Fifthimage from "./img/image5.png";
import Sixthimage from "./img/image6.png";

function ExhibitPage() {
  return (
    <>
      <div id="row1" className="rows">
        <div className="image-name">
          <img className="row1-pics" src={Firstimage} />

          <text>Van Gogh Exhibit</text>
        </div>

        <div className="image-name">
          <img src={Secondimage} />

          <text>DaVinci Exhibit</text>
        </div>

        <div className="image-name">
          <img id="image3" src={Secondimage} />

          <text>Degas Exhibit</text>
        </div>
      </div>

      <div id="row2" className="rows">
        <div className="image-name">
          <img src={Fourthimage} />
          <text>Egyptian Art Exhibit</text>
        </div>

        <div className="image-name">
          <img src={Fifthimage} />
          <text>Grecian Sculpture</text>
        </div>

        <div className="image-name">
          <img src={Sixthimage} />
          <text>Bronze Age</text>
        </div>
      </div>
    </>
  );
}

export default ExhibitPage;
