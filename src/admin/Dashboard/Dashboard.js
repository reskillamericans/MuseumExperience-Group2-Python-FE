import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboardMobile">
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap")
      </style>

      <div className="dashboardTotalsMobile dashboardBoxstyle">
        <p className="dashboardTotalTextMobile">
          Total No. <br /> Members
        </p>
        <p className="dashboardCount">200</p>
      </div>
      <div className="dashboardTotalsMobile dashboardBoxstyle">
        <p className="dashboardTotalTextMobile">
          Total No. <br /> Exhibits
        </p>
        <p className="dashboardCount">46</p>
      </div>
      <div className="dashboardTotalsMobile dashboardBoxstyle">
        <p className="dashboardTotalTextMobile">
          Total No. <br /> Questions
        </p>
        <p className="dashboardCount">13</p>
      </div>
      <div className="dashboardTotalsMobile dashboardBoxstyle">
        <p className="dashboardTotalTextMobile">
          Total No. <br /> Answered Questions
        </p>
        <p className="dashboardCount">10</p>
      </div>
      <div className="dashboardTotalsMobile dashboardBoxstyle">
        <p className="dashboardTotalTextMobile">
          Total No. <br /> Unanswered Questions
        </p>
        <p className="dashboardCount">3</p>
      </div>

      <a
        className="dashboardVisit dashboardBoxstyle"
        target="blank"
        rel="noreferrer"
        href="#"
      >
        Visit Musuem Website
      </a>

      <div className="dashboardTotalContainer">
        <div className="dashboardTotals">
          <p className="dashboardCount dashboardTotalMargin">3</p>
          <p className="dashboardTotalText dashboardTotalMargin">
            Total Unanswered Questions
          </p>
        </div>
        <div className="dashboardTotals">
          <p className="dashboardCount dashboardTotalMargin">10</p>
          <p className="dashboardTotalText dashboardTotalMargin">
            Total Answered Questions
          </p>
        </div>
        <div className="dashboardTotals">
          <p className="dashboardCount dashboardTotalMargin">120</p>
          <p className="dashboardTotalText dashboardTotalMargin">
            Total Exhibit Clicks
          </p>
        </div>
      </div>

      <div className="dashboardTableContainer">
        <p className="dashboardTableLabel">Questions</p>
        <table className="dashboardTable">
          <tr className="dashboardRow1">
            <th>
              <input type="checkbox" name="" value="" />
            </th>
            <th className="dashboardDate">Date</th>
            <th className="dashboardTime">Time</th>
            <th className="dashboardAuthor">Author</th>
            <th className="">Question</th>
          </tr>
          <tr className="dashboardRows">
            <th>
              <input type="checkbox" name="" value="" />
            </th>
            <th>7-7-21</th>
            <th>2:00 PM</th>
            <th>M. Jay</th>
            <th>What are the featured events for the next upcoming......</th>
          </tr>
          <tr className="dashboardRows dashboardRowMid">
            <th>
              <input type="checkbox" name="" value="" />
            </th>
            <th>6-10-21</th>
            <th>5:20 PM</th>
            <th>T. Mambrey</th>
            <th>
              What time period did most Egyptian artifacts originate......
            </th>
          </tr>
          <tr className="dashboardRows">
            <th>
              <input type="checkbox" name="" value="" />
            </th>
            <th>4-16-21</th>
            <th>1:45 PM</th>
            <th>A. BlackBerry</th>
            <th>Do you have any Renaissance period special......</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
