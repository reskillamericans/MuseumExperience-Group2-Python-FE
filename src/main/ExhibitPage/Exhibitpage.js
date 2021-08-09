import "./Exhibitpage.css";
import Firstimage from "./img/image1.png";
import Secondimage from "./img/image2.png";
import Thirdimage from "./img/image3.png";
import Fourthimage from "./img/image4.png";
import Fifthimage from "./img/image5.png";
import Sixthimage from "./img/image6.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

function ExhibitPage() {
  return (
    <>
      <Navbar />
      <div className='exhibit_page-container'>
        <div id="exhibit_page_row1" className="exhibit_page_rows">
          <div className="exhibit_page_image-name">
            <img
              className="exhibit_page_row1-pics"
              src={Firstimage}
              alt="first"
            />

            <p>Van Gogh Exhibit</p>
          </div>

          <div className="exhibit_page_image-name">
            <img src={Secondimage} alt="second" />

            <p>DaVinci Exhibit</p>
          </div>

          <div className="exhibit_page_image-name">
            <img id="exhibit_page_image3" src={Thirdimage} alt="second" />

            <p>Degas Exhibit</p>
          </div>
        </div>

        <div id="exhibit_page_row2" className="exhibit_page_rows">
          <div className="exhibit_page_image-name">
            <img src={Fourthimage} alt="fourth" />
            <p>Egyptian Art Exhibit</p>
          </div>

          <div className="exhibit_page_image-name">
            <img src={Fifthimage} alt="fifth" />
            <p>Grecian Sculpture</p>
          </div>

          <div className="exhibit_page_image-name">
            <img src={Sixthimage} alt="sixth" />
            <p>Bronze Age</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExhibitPage;
