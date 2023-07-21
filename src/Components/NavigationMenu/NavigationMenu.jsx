import "./NavigationMenu.css";
import brandLogo from "../../Assets/images/siteLogo.png";
import user from "../../Assets/images/user.png";
import {Link, useNavigate} from "react-router-dom";

import {useEffect, useMemo, useRef, useState} from "react";


const NavigationMenu = () => {
    const ref = useRef(null);
    const burgerRef = useRef(null);
    const navigate = useNavigate();
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth > 850 && burgerOpen) setBurgerOpen(false)
    }, [windowWidth, burgerOpen]);

    useEffect(() => {
        if (burgerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [burgerOpen]);
    const handleClick = () => {
        if (ref?.current) {
            navigate('/');
            ref?.current?.click();
        }
    }
    const rotateMenu = () => {
        setBurgerOpen(prev => !prev);
    }
    const opaqueStyle = useMemo(() => ({
        opacity: burgerOpen ? 0 : 1,
    }), [burgerOpen])
    return (
        <>
            <header className="nav-menu">
                <div className="nav-container" style={opaqueStyle}>
                    <Link to="/">
                        <img src={brandLogo} alt="site-logo"/>
                    </Link>
                </div>
                <div className="nav-container burger-wrapper">
                    <div className="transformer-menu-wrapper" onClick={() => rotateMenu()}>
                        <div ref={burgerRef}
                             className={['transformer-menu', burgerOpen ? 'rotated' : ''].join(' ')}>
                            <div className="menu-stick first-stick"></div>
                            <div className="menu-stick second-stick"></div>
                            <div className="menu-stick third-stick"></div>
                        </div>
                    </div>
                </div>
                <div className="nav-container">
                    <Link to="/services#servicesAnchor">
                        <p>Services</p>
                    </Link>
                    <Link to="/challenges">
                        <p>Challenges</p>
                    </Link>
                    <Link to="/plans">
                        <p>Plans</p>
                    </Link>
                    <Link to="/trainers">
                        <p>Trainers</p>
                    </Link>
                    <Link to="/groups">
                        <p>Groups</p>
                    </Link>
                    <div onClick={handleClick}>
                        <a ref={ref} href="#formAnchor">
                            <p>Contact</p>
                        </a>
                    </div>
                </div>
                <div className="nav-container" style={opaqueStyle}>
                    <div className="nav-log-block">
                        <div className="nav-log-item">
                            <img src={user} alt="user-logo"/>

                            <p>Log In</p>
                        </div>
                    <Link to="/plans">
                        <button type="button">Join Now</button>
                    </Link>
                    </div>
                </div>
            </header>

            <div className={["nav-container-mobile", burgerOpen ? 'open' : ''].join(' ')} style={{
                top: burgerRef?.current?.getBoundingClientRect()?.bottom + 15,
            }}>
                <div className="nav-log-item menu-log-in">
                    <img src={user} alt="user-logo"/>
                    <p style={{
                        fontSize: "15px"
                    }}>Log In</p>
                </div>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/challenges">
                    <p>Challenges</p>
                </Link>
                <Link to="/plans">
                    <p>Plans</p>
                </Link>
                <Link to="/trainers">
                    <p>Trainers</p>
                </Link>
                <Link to="/groups">
                    <p>Groups</p>
                </Link>
                <div onClick={handleClick}>
                    <a ref={ref} href="#formAnchor">
                        <p>Contact</p>
                    </a>
                </div>
            </div>

        </>
    )
}

export default NavigationMenu;