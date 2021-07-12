import './profile.css'
import face from './face1.png';
import flowers from './flowers.png';
import paint from './paint.png';
import impression from './impression.png';
import search from './search.png';
import mail from './mail.png';
import bell from './bell.png';
import exit from './logout.png';
import logo from './logo.png';
import name from './logo1.png';
import arrowright from './arrowright.png';
import arrowleft from './arrowleft.png';
function Profile() {
    return (
        <div id='grid'>
            <div className='header'>
                <div className='searchform'>
                    <form action="/action_page.php" className="search">
                        <input className='profileInput' type="text" name="search" />
                        <button type="submit" className='button'><img src={search} /></button>
                    </form>
                </div>
                <img src={mail} alt='email' id='mail' />
                <img src={bell} alt='notifications' id='bell' />
                <img src={exit} alt='logout' id='exit' />
                <img src={face} alt='face' id='profile' />
            
             </div>
        <div className='logo'>
            <img src={logo} alt='logo'/>
            <img src={name} alt='museum'/>
        </div>
        <div className='aside'>
            <button id='button1'>Sign Out</button>
            <p className='stats'>Total No. Exhibits</p> <p className='number'>46</p>
            <p className='stats'>Total No. Questions</p> <p className='number'>13</p>
            <p className='stats'>Answered Questions</p> <p className='number'>10</p>
            <p className='stats'>Unanswered Questions</p> <p className='number'>3</p>
        </div>
        <div className='mainbody'>
            <p id='p1'>Profile</p>
            <div className='container1'>
                <img src={face} alt='face' id='face'/>
                <div className='info'>
                    <p>Tiffany Fambry</p>
                    <p>Tiffany.Fambry@museum.com</p>
                    <p>Curator</p>
                </div>
                <p id='p2'>Recently Edited Exhibits</p>
                <div className='container2'>
                    <button className='b2'><img src={arrowleft} /></button>
                    <img src={flowers} alt='flowers' id='flowers' />
                    <img src={paint} alt='paint' id='paint' />
                    <img src={impression} alt='impression' id='impression' />
                    <button className='b2'><img src={arrowright} /></button>

                </div>

            </div>

        </div>
        </div>

    );
}

export default Profile;
