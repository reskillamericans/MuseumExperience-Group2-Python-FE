import './App.css';
import Register from './main/Register/Register.js'
import SearchPage from './main/SearchPage/SearchPage';
import Account from './Account/AccountPage';
import Navbar from './main/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Register />
       <Account/>
        {/*<HomePage />
        <SearchPage /> */}
    </div>
  );
}

export default App;
