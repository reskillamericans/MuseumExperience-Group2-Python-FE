import "./Roles.css";
import profile from "./imgs/profile.png";
import users from "./imgs/users.png";
import ellipse1 from "./imgs/Ellipse1.png";
import ellipse2 from "./imgs/Ellipse2.png";
import ellipse3 from "./imgs/Ellipse3.png";
import ellipse4 from "./imgs/Ellipse4.png";
import ellipse5 from "./imgs/Ellipse5.png";
import ellipse6 from "./imgs/Ellipse6.png";
import ellipse7 from "./imgs/Ellipse7.png";
import arrow from "./imgs/arrow.png";
import dots from "./imgs/dots.png";
import fadedDots from "./imgs/fadedDots.png";



function Roles() {
    return (

        <div className="rolesBackground">
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap")
            </style>

            <div className='rolesContainer'>
                <img className='rolesProfile' src={profile} alt="" />

                <div className='rolesPeopleMobile'>
                    <img className='rolesPeopleVector' src={users} alt="" />
                    <p className='rolesCount'>6 People</p>
                </div>

                <div className='rolesPeople'>
                    <img className='rolesPeopleVector' src={users} alt="" />
                    <p className=''>People</p>
                </div>

                <div className='rolesGrey rolesAdd'>
                    <i class="fas fa-user-plus"></i>
                    <p>Invite people</p>
                </div>
                <div className='rolesGrey rolesLabel'>
                    <p className='rolesNameLabel'>Name</p>
                    <p className='rolesEmailLabel'>Email</p>
                    <p>Role</p>
                </div>

                <div className='rolesMember'>
                    <img className='rolesUserImg' src={ellipse1} alt="" />
                    <p className='rolesName rolesNameRole'>Tiffany Farmbry </p>
                    <p className='rolesEmail'>Tiffany.Farmbry@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Curator </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>
                <div className='rolesMember'>
                    <img className='rolesUserImg' src={ellipse2} alt="" />
                    <p className='rolesName rolesNameRole'>Mika Collins</p>
                    <p className='rolesEmail'>Mika.Collins@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Staff </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>
                <div className='rolesMember'>
                    <img className='rolesUserImg' src={ellipse3} alt="" />
                    <p className='rolesName rolesNameRole'>Anna Silverspoon </p>
                    <p className='rolesEmail'>Anna.Silverspoon@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Staff </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>
                <div className='rolesMember'>
                    <img className='rolesUserImg' src={ellipse4} alt="" />
                    <p className='rolesName rolesNameRole'>Georges James </p>
                    <p className='rolesEmail'>George.James@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Curator </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>
                <div className='rolesMember'>
                    <img className='rolesUserImg' src={ellipse5} alt="" />
                    <p className='rolesName rolesNameRole'>Dominique Lovely </p>
                    <p className='rolesEmail'>Domonique.Lovely@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Staff </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>

                <div className='rolesMember rolesButtonMobile'>
                    <img className='rolesUserImg' src={ellipse6} alt="" />
                    <p className='rolesName rolesNameRole'>Eden Summers </p>
                    <p className='rolesRole rolesNameRole'>Curator </p>
                    <img className='' src={arrow} alt="" />
                    <img className='fadedDots' src={fadedDots} alt="" />
                    <button><span className='rolesPlus'>+</span> Add new member</button>
                </div>

                <div className='rolesMember rolesLastUser'>
                    <img className='rolesUserImg' src={ellipse7} alt="" />
                    <p className='rolesName rolesNameRole'>Eden Summers </p>
                    <p className='rolesEmail'>Eden.Summers@museum.com </p>
                    <p className='rolesRole rolesNameRole'>Curator </p>
                    <img className='rolesArrow' src={arrow} alt="" />
                    <img className='' src={dots} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Roles;