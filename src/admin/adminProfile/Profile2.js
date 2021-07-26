import React from'react' ;
import Profile2 from './Profile2.css';
import Image7 from "./Image7 84.png";
import Search from "./Search.png";
import Mail from "./Mail.png";
import Bell from "./Bell.png";
import LogOut from "./LogOut.png";
import ProfileImage from "./Ellipse 7.png"; 
import ProfileImage1 from "./Ellipse 5.png";
import Image from "./Image 47.svg";
import Image8 from "./Image8 83.png";
import Image9 from "./Image9 3.svg";
import LogoImage1 from "./LogoImage1 group 6.svg";
import LogoImage from "./LogoImage Museum.svg";
import Rectangle from "./Rectangle 48.svg";
import Image15 from "./Image15 1.png";
import Image3 from"./Image3 80.jpg";
import Image4 from"./Image4 81.png";
import Image5 from"./Image5 82.png"
import Image16 from "./Image16 1.png";

function Profile() {

    return(
        <div className='Profile2'>
        <div className='header'>  
        <div>
            <img src={LogoImage1} alt='logo'/>
            <img src={LogoImage} alt='museum'/>
         </div> 
            
            <div className='nav'>
                <div>
                       
        <div className='bar'>
                <img src={Rectangle} alt='museum'/>
                    </div>
        <div classname='search'>
                <div className='magnifier'>
                <img src={Search} alt='museum'/>
                </div>
            </div>
        </div>
    <div> 
                    
            <div className='icons'>
                <img src={Mail} alt='museum'/>
                <img src={Bell} alt='museum'/>
                <img src={LogOut} alt='museum'/>
                <img src={ProfileImage1} alt='Tiffany'/>
                </div>
            </div>
        </div> 
    </div>  


{/* main */}
        <div className='text-2' >
               <h3>Profile</h3>
        </div>    

            <div className='rectangle-container'> 
            <div className='rectangle2'>
                <img src={Image7} alt='background'/>           
            </div>
        </div>

        <div className='side-bar'>
            <div className='text'>
                <h2>Sign Out</h2> 
        </div>  
        
                <img src={Image9} alt='small bar'/>
            <div> 
        </div>
    </div>

        <div className='side-container'>
                <img src={Image8} alt='small rectangle'/> 
        </div> 

        <div className='text-3'>
            <h4>Total No. Exhibits <span> 46</span></h4>
            <h4>Total No. Questions<span> 1</span></h4>
            <h4>Answered Questions <span> 10</span></h4>
            <h4>Unanswered Questions<span> 3</span></h4>
        </div>

        <div className='mid-container'>
            <img src={ProfileImage} alt='pic'/>
        </div>

        <div className='lower-container'>
            <h3>Tiffany Farmboy</h3> 
            <h4>Tiffany.Farmboy@museum.com</h4>
            <h3>Curator</h3>
        </div>

        <button>20<br/> Total Answered Questions</button>

        
        <div className='text-4'>
            <h4>Recently edited exhibits</h4>
        </div>
        
        <div className='box-container'> 
        <div className='left-arrow'>
            <img src={Image15} alt='left arrow'/>
        </div>``

         <div classname="box1" >  
            <img src={Image3} alt='flower'/>
        </div>
                                     
        <div className='box2'>
            <img src={Image4} alt='abstract'/>
        </div>

        <div className='box3'>
            <img src={Image5} alt='mod art'/>   
        </div> 

        <div className='right-arrow'>
            <img src={Image16} alt='right arrow'/>
        </div>
    </div> 
    </div>
              
         
  
        
    
    
        
     
        
         
         

    )



}

export default Profile;

