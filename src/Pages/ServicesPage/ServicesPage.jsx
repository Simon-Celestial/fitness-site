import "./ServicesPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import PlansComponent from "../../Components/PlansComponent/PlansComponent";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const ServicesPage = () => {
    const location = useLocation();

    useEffect(() => {

        if (location.hash === "#servicesAnchor") {
            const element = document.getElementById("servicesAnchor");
            if (element) {
                element.scrollIntoView();
            }
        }

    }, [location]);
    return (
        <div className="services-wrapper" id="servicesAnchor">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="services-main-content">
                <div className="services-main-text-container">
                    <div className="text-container-block">
                    <b>CHECK OUT <br/>
                        ALL<i>  Services</i></b>
                    <p>I'm a paragraph. Click here to add <br/>
                        your own text and edit me. Let your <br/>
                        users get to know you
                    </p>
                    </div>
                </div>
                <b>Classes</b>
                <div className="services-classes-container">
                <div className="classes-block">
                    <div className="classes-block-item">
                        <b>Strength</b>
                        <p>Use this area to describe one of your services.</p>
                    </div>
                    <div className="classes-block-item">
                        <p>Mon, Wed, Thu, Fri</p>
                        <p>2hr</p>
                        <b>20$</b>
                    </div>
                </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Hiit</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Wed, Thu</p>
                            <p>1hr</p>
                            <b>20$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Yoga</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Thu, Fri</p>
                            <p>1hr</p>
                            <b>30$</b>

                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Meditation</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Wed, Thu</p>
                            <p>3hr</p>
                            <b>40$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Cardio</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Wed, Thu, Fri</p>
                            <p>45min</p>
                            <b>20$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Online Strength</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <b>15$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Online Hiit</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Wed, Thu, Fri</p>
                            <p>1hr</p>
                            <b>15$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Online Yoga</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Thu, Fri</p>
                            <p>1hr</p>
                            <b>10$</b>
                        </div>
                    </div>
                    <div className="classes-block">
                        <div className="classes-block-item">
                            <b>Online Meditation</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Thu, Fri</p>
                            <p>3hr</p>
                            <b>30$</b>
                        </div>
                    </div>
                    <div className="classes-block classes-block-last-item">
                        <div className="classes-block-item">
                            <b>Online Cardio</b>
                            <p>Use this area to describe one of your services.</p>
                        </div>
                        <div className="classes-block-item">
                            <p>Mon, Fri</p>
                            <p>45min</p>
                            <b>10$</b>
                        </div>
                    </div>
                </div>
                <PlansComponent />
            </div>
            <FooterComponent/>
        </div>
    )
}

export default ServicesPage;