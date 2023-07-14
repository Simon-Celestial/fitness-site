import "./NavigationMenu.css";
import logo from "../../Assets/images/siteLogo.png";
import user from "../../Assets/images/user.png";

const NavigationMenu = () => {
    return (
        <header className="nav-menu">
            <div className="nav-container">
                <img src={logo} alt="site-logo"/>
            </div>
            <div className="nav-container">
                <p>Book a Class</p>
                <p>Challenges</p>
                <p>Plans</p>
                <p>Trainers</p>
                <p>Groups</p>
                <p>Contact</p>
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