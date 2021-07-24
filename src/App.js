import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./main/HomePage/HomePage";
import SearchPage from "./main/SearchPage/SearchPage";
import Register from "./main/Register/Register";
import Login from "./main/Login/Login";
import ExhibitPage from "./main/ExhibitPage/Exhibitpage";
import Exhibitinfo from "./main/Exhibitinfo/exhibitinfo";
import AccountPage from "./main/Account/AccountPage";
import AboutUsMain from "./main/AboutUsMain/AboutUsMain";

import Addartwork from "./admin/AddArtwork/addartwork";
import CreateExhibit from "./admin/CreateExhibit/createexhibit";
import Dashboard from "./admin/Dashboard/Dashboard";
import Exhibit from "./admin/Exhibit/exhibit";
import AdminLogin from "./admin/Login/AdminLogin";
import Profile from "./admin/Profile/profile";
import Roles from "./admin/Roles/Roles";
import SignUp from "./admin/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/exhibit" component={ExhibitPage} />
          <Route exact path="/info" component={Exhibitinfo} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/about" component={AboutUsMain} />

          {/* admin page switch route */}

          <Route exact path="/admin-addart" component={Addartwork} />
          <Route exact path="/admin-create" component={CreateExhibit} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin-exhibit" component={Exhibit} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin-profile" component={Profile} />
          <Route exact path="/admin-role" component={Roles} />
          <Route exact path="/admin-signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
