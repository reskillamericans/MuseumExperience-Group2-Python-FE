import './account.css';
import background from './background.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import search from './search.png';
import profileimg from './profileimg.png';
import addimage from './addimage.png';
import plus from './plus.png';
import check from './check.png';
import img4 from './img4.png';
import React from 'react'

function AccountPage() {
    return(
<div>
    <div className='searchbar'>
        <p className='searchheader'>MY ACCOUNT</p>
        <div className='searchform'>
        <form action="/action_page.php" className="search">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><img src={search}/></button>
        </form>
        </div>
    </div>
    <div className='background'>
        <img src={background} alt='hands'/>
    </div>
    <div className='profileimage'>
        <div className='man'><img src={profileimg} alt='profile'/>
        
    </div>
    </div>
        <div className="camera"><img src={addimage} alt='camera'/>
    </div>
    <div className='info'>
        <p className='name'>John Smith</p>
        <p className='mail'>john.smith@email.com</p>
        
    </div>
    <button className='add'>Add Exhibit</button>
    <div className='maincontainer'>
            <p id='subscribe'>Your Subscribed Exhibits</p>
            <p id='upcoming'>Upcoming Exhibits</p>
            <div className='imagecontainer'>
                <img src={img1} alt='portrait'/>
                <img src={img2} alt='monalisa'/>
                <img src={img3} alt='goldface'/>

            </div>
               
                <div className='questions'>
                 <p id='history'>Question History</p>
                <button class="accordion"><img src={check} className='check'/> Suspendisse luctus ornare iacullis <img src={plus}className='plus'/></button>
                <div class="panel">
                </div>

                <button class="accordion"><img src={check} className='check'/>Donec ut feugiat leo. Nullam at mauris eros<img src={plus}className='plus'/></button>
                <div class="panel">
                </div>

                <button class="accordion"><img src={check}className='check'/> Fusce ut consequat eros, eget vehicula ante<img src={plus} className='plus'/></button>
                <div class="panel">
                </div>  

            </div>
    </div>
    <div className='line'>
        <img src={img4} alt='linebreak'/>
    </div>
     <div className='footer'> 
         <div className='address'> 
             <p>VISIT US</p> 
             <p>Avenue of the Arts</p> 
             <p>465 Huntington Avenue</p> 
            <p>Boston, MA 02155</p> 
        </div> 
        <div className="contact"> 
            <p>SIGN UP FOR MUSEUM EXPERIENCE EMAIL</p> 
             <p>Get updates on what's happening at Museum Experience,
              from exhibitions and programs to special events and more</p>
             <div className='emailcontainer'>
                <form action="/action_page.php"> 
                <label for="emailaddress">Email Address</label> 
                <input type="email" name="email" id="email"/> 
                <button type="submit">Sign Up</button> 
                </form>
            </div> 
         </div> 
         <div className="links"> 
            <p>SUPPORT</p>
            <p>MEMBERSHIP</p> 
            <p>HOST AN EVENT</p> 
             <p>CORPORATE SUPPORTS</p> 
        </div> 
    </div> 














</div>
   )
}
 export default AccountPage;