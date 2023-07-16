import "./PlansPage.css"
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import React from "react";

const PlansPage = () => {
    return (
        <div className="plans-wrapper">
            <FixedMenu />
            <NavigationMenu />
            <div className="plans-main-content">
                <div className="plans-main-content-container">
                    <h1>Our Memberships
                    </h1>
                    <div className="membership-block">
                    <div className="membership-containers">
                        <p>Monthly Plan</p>
                        <h2>59.99 $</h2>
                        <h4>Every month</h4>
                        <h4>One-time payment</h4>
                        <h4>30 day free trial</h4>
                        <button>Start Free Trial</button>
                        <div className="membership-benefit-container">
                            <h3>I am benefit</h3>
                            <h3>I am benefit</h3>
                            <h3>I am benefit</h3>
                        </div>
                    </div>
                    <div className="membership-containers">
                        <p>Monthly Plan</p>
                        <h2>59.99 $</h2>
                        <h4>Every month</h4>
                        <h4>One-time payment</h4>
                        <h4>30 day free trial</h4>
                        <button>Start Free Trial</button>
                        <div className="membership-benefit-container">
                            <h3>I am benefit</h3>
                            <h3>I am benefit</h3>
                            <h3>I am benefit</h3>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default PlansPage;