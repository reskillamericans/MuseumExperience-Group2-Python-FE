import group10 from "./Group 10.png";
import image2 from "./image 2.png";
import "./AboutUs.css";


function AboutUs() {
    return (
      
      <div className="AboutUs">
        <style>
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@700&display=swap');
    </style>
    <div className="c1">
        <div className="container">
          <div className="main-image">
            <img src={image2} alt="main-pic" width="450px" height="494px"/>
          </div>
          <div className="content">
            <div className="box">
              <div className="icon">
              <img src={group10}  alt="icon" width="57px" height="60px"/>
              </div>
            <h1>The Mus<b>e</b>um</h1>
            <h2>Est.1986</h2>
            <div ClassName="content-holder">
              <div ClassName="Mission">
              <h3>Mission </h3>
              <div id="box-line"></div>
              <p>Through innovative partnerships, comprehensive collections, 
              and stimulating exhibits, The Museum strives to educate 
              and entertain vistors of all ages. </p>
              </div>
              <div ClassName="Vision">
              <h3>Vision</h3>
              <div id="box-line"></div>
              <p> The Museum aims to be an institution that serves as a catalyst for the cultural 
                and educational developement of not only this country but the world.</p>
              </div>
              <div ClassName="Vision">
              <h3>Values</h3>
              <div id="box-line"></div>
              <p> Here at The Museum we put the uptmost value on providing 
                our guests with the greatest educational, funfilled, and 
                insightful experience humanly possible.</p>
              </div>
            </div>
            
          </div>
</div>
        </div>
          
        </div>

      </div>
    );
  }
  
  export default AboutUs;