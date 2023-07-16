import "./NavigationMenu.css";
import brandLogo from "../../Assets/images/siteLogo.png";
import user from "../../Assets/images/user.png";
import {Link} from "react-router-dom";


const NavigationMenu = () => {
    return (
        <header className="nav-menu">
            <div className="nav-container">
                <Link to ="/">
                    <img src={brandLogo} alt="site-logo"/>
                </Link>
            </div>
            <div className="nav-container">
                <div className="dropdown">
                <p className="dropdown-hover">Book a Class</p>
                    <div className="dropdown-block">
                        <p>In person Classes</p>
                        <p>Online Classes</p>
                    </div>
                </div>
                 <Link to="/challenges">
                <p>Challenges</p>
                     </Link>
                <Link to="/plans">
                <p>Plans</p>
                </Link>
                <Link to="/trainers">
                <p>Trainers</p>
                </Link>
                <Link to ="/groups">
                <p>Groups</p>
                </Link>
                <a href="#formAnchor">
                    <p>Contact</p>
                </a>
            </div>
            <div className="nav-container">
                <div className="nav-log-block">
                    <div className="nav-log-item">
                        <img src={user} alt="user-logo"/>
                        <p>Log In</p>
                    </div>
                    <button type="button">Join Now</button>

                </div>
            </div>
        </header>
    )
}

export default NavigationMenu;