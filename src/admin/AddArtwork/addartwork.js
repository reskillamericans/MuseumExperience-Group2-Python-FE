import './addartwork.css';
import bell from './bell.png';
import face from './face1.png';
import logo from './logo.png';
import museum from './logo1.png';
import exit from './logout.png';
import mail from './mail.png';
import search from './search.png';
import pluscircle from './plus-circle.png';
import plus from './plus.png';

function Addartwork() {
    return (
      <div className='grid'>
          <div className='header'>
          <div className='searchform'>
             <form action="/action_page.php" className="search">
            <input type="text" className='input' name="search"/>
            <button type="submit" className='button'><img src={search}/></button>
            </form>
            </div>
            <img src={mail} alt='email' id='mail'/>
            <img src={bell} alt='notifications' id='bell'/>
            <img src={exit} alt='logout' id='exit'/>
            <img src={face} alt='face' id='profile'/>
          </div>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <img src={museum} alt='museum'/>
            </div>
            <div className='aside'>
            <button className='nav'>NAVIGATION MENU</button>
            <button className='aside-b1'>Dashboard</button>
            <button className='aside-b2'>Exhibits</button>
            <button className='aside-b3'>Admin Roles</button>
            <p className='stats'>Total No. Exhibits</p> <p className='number'>46</p>
            <p className='stats'>Total No. Questions</p> <p className='number'>13</p>
            <p className='stats'>Answered Questions</p> <p className='number'>10</p>
            <p className='stats'>Unanswered Questions</p> <p className='number'>3</p>
            </div>
            <div className='main'>
                <p id='mainp'>Add Art Work</p>
                <div className='form2'>
                <form action="/action_page.php" className='form'>
                    <label className='mainlabel'>Title</label>
                    <input type='text' name='title' className='maininput-1'/>
                    <label className='mainlabel'>Artist's Name</label>
                    <input type='text' name='artist'className='maininput-2'/><br/>
                    <label className='mainlabel'>Description</label>
                    <textarea name='description' cols='40' rows='8' placeholder='Full Description:Maximum 5000 characters'maxlength='5000'className='maininput-3'/>
                </form>
                <div className='empty'><p className='emptyp'>0/5000</p></div>
                <div className='empty1'></div>
                </div>
                <div className='buttoncontainer'>
                <button className='button-1'>Add Image <img src={pluscircle} className='pluscircle'/></button>
                <button className='button-2'>Add Image <img src={pluscircle} className='pluscircle'/></button>
                <button className='button-3'>Add Image <img src={pluscircle} className='pluscircle'/></button>
                </div>
                <form action="/action_page.php">
                    <label className='mainlabel'>URL</label>
                    <input type='url' name='url'className='maininput-4'/>
                </form>
                <button className='plusart'><img src={plus}/> Add Additional Artwork</button>
                <div>
                <button id='save'>Save</button>
                <button id='cancel'>Cancel</button>
                </div>
            </div>
        
      
      </div>
    );
  }
  
  export default Addartwork;
  