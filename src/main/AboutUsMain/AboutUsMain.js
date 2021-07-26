import vector1 from "./Vector 1.png";
import image2 from "./image 2.png";
import group10 from "./Group 10.png";
import rectangle81 from "./Rectangle 81.png";
import "./AboutUsMain.css";

function AboutUsMain() {
  return (
    <div className="aboutus_AboutUsMain">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Hind:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap');
      </style>
      <div className="aboutus_c1">
        <div className="aboutus_container">
          <div className="aboutus_main-image">
            <img src={image2} alt="main-pic" width="450px" height="494px" />
          </div>
          <div className="aboutus_content">
            <div className="aboutus_box">
              <div className="aboutus_icon">
                <img
                  src={vector1}
                  id="aboutus_web-icon"
                  alt="icon"
                  width="57px"
                  height="60px"
                />
                <img
                  src={group10}
                  id="aboutus_mobile-icon"
                  alt="icon"
                  width="57px"
                  height="60px"
                />
              </div>
              <h1 className="aboutus_h1" id="aboutus_m1">Museum Experience</h1>
              <h1 className="aboutus_h1" id="aboutus_m2">The Museum</h1>
              <h2 className="aboutus_h2">Est.1986</h2>
              <div ClassName="aboutus_content-holder">
                <div ClassName="aboutus_Mission">
                  <h3 className="aboutus_h3">Mission </h3>
                  <div id="aboutus_box-line"></div>
                  <p className="aboutus_p">
                    Through innovative partnerships, comprehensive collections,
                    and stimulating exhibits, The Museum strives to educate and
                    entertain vistors of all ages.{" "}
                  </p>
                </div>
                <div ClassName="aboutus_Vision">
                  <h3 className="aboutus_h3">Vision</h3>
                  <div id="aboutus_box-line"></div>
                  <p className="aboutus_p">
                    {" "}
                    The Museum aims to be an institution that serves as a
                    catalyst for the cultural and educational developement of
                    not only this country but the world.
                  </p>
                </div>
                <div className="aboutus_Values">
                  <h3 className="aboutus_h3">Values</h3>
                  <div id="aboutus_box-line"></div>
                  <p className="aboutus_p">
                    {" "}
                    Here at The Museum we put the uptmost value on providing our
                    guests with the greatest educational, funfilled, and
                    insightful experience humanly possible.
                  </p>
                </div>
              </div>
              <div className="aboutus_color-pic">
                <img
                  src={rectangle81}
                  id="aboutus_color-pic"
                  alt="icon"
                  width="147px"
                  height="150px"
                />
                <h4 className="aboutus_credit-1">Blue- Artist Unknown</h4>
                <h4 className="aboutus_credit-2">1968</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
