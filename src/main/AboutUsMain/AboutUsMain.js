import vector1 from "./Vector 1.png";
import image2 from "./image 2.png";
import group10 from "./Group 10.png";
import rectangle81 from "./Rectangle 81.png";
import "./AboutUsMain.css";

function AboutUsMain() {
  return (
    <div className="AboutUsMain">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Hind:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap');
      </style>
      <div className="c1">
        <div className="container">
          <div className="main-image">
            <img src={image2} alt="main-pic" width="450px" height="494px" />
          </div>
          <div className="content">
            <div className="box">
              <div className="icon">
                <img
                  src={vector1}
                  id="web-icon"
                  alt="icon"
                  width="57px"
                  height="60px"
                />
                <img
                  src={group10}
                  id="mobile-icon"
                  alt="icon"
                  width="57px"
                  height="60px"
                />
              </div>
              <h1 id="m1">Museum Experience</h1>
              <h1 id="m2">The Museum</h1>
              <h2>Est.1986</h2>
              <div ClassName="content-holder">
                <div ClassName="Mission">
                  <h3>Mission </h3>
                  <div id="box-line"></div>
                  <p>
                    Through innovative partnerships, comprehensive collections,
                    and stimulating exhibits, The Museum strives to educate and
                    entertain vistors of all ages.{" "}
                  </p>
                </div>
                <div ClassName="Vision">
                  <h3>Vision</h3>
                  <div id="box-line"></div>
                  <p>
                    {" "}
                    The Museum aims to be an institution that serves as a
                    catalyst for the cultural and educational developement of
                    not only this country but the world.
                  </p>
                </div>
                <div ClassName="Values">
                  <h3>Values</h3>
                  <div id="box-line"></div>
                  <p>
                    {" "}
                    Here at The Museum we put the uptmost value on providing our
                    guests with the greatest educational, funfilled, and
                    insightful experience humanly possible.
                  </p>
                </div>
              </div>
              <div className="color-pic">
                <img
                  src={rectangle81}
                  id="color-pic"
                  alt="icon"
                  width="147px"
                  height="150px"
                />
                <h4 className="credit-1">Blue- Artist Unknown</h4>
                <h4 className="credit-2">1968</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
