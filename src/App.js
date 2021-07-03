import SearchPage from './main/SearchPage/SearchPage';
import Account from './Account/AccountPage';
import Navbar from './main/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       </header>
       <Account/>
        {/*<HomePage />
        <SearchPage /> */}
    </div>
  );
}

export default App;
