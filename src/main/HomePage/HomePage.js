import image24 from "./images/image 24.png";
import image25 from "./images/image 25.png";
import image26 from "./images/image 26.png";
import image27 from "./images/image 27.png";
import image31 from "./images/image 31.png";
import image34 from "./images/image 34.png";
import image50 from "./images/image 50.png";
import vector from "./images/Vector.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home_HomePage">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Hind:wght@400;700&family=Open+Sans&display=swap');
      </style>

      <div className="home_hero">
        <div id="home_bar">
          <div id="home_search">
            Search
            <img src={vector} id="home_magnifier" alt="head" />
          </div>

          <div className="home_welcomebody">
            <h1 className="home_h1">Welcome to the Museum Experience!</h1>
            <p class="home_explore">
              Explore the exhibition gallery, videos, articles, and more
            </p>
            <button class="home_continue">Click to continue</button>
          </div>
        </div>
      </div>

      <div className="home_container">
        <div className="home_exhibit-listing">
          <img src={image25} alt="head" width="194px" height="199px" />
          <img src={image24} alt="head" width="194px" height="199px" />
          <img src={image27} alt="head" width="194px" height="199px" />
          <img src={image26} alt="head" width="194px" height="199px" />
        </div>
      </div>

      <div className="home_container2">
        <div className="home_exhibit-buttons">
          <button class="home_b1">Exhibits on View</button>
          <button class="home_b2">Ask a Curator</button>
          <button class="home_b3">Subscribe to Exhibits</button>
          <button class="home_b4">Connect with Us</button>
        </div>
      </div>

      <div class="home_sections">
        <h2>Previous Collections</h2>
        <img src={image31} id="home_c1" alt="c1" width="845px" />
        <h2>Fundraising</h2>
        <img src={image50} id="home_c2" alt="c1" width="845px" />
        <h2>Children's Events</h2>
        <img src={image34} id="home_c3" alt="c1" width="845px" />
      </div>
    </div>
  );
}

export default HomePage;
