
import "./PlansComponent.css";
import React from "react";
const PlansComponent = () => {
    return (
        <div className="plans-main-content">
            <div id="plansAnchor" className="plans-main-content-container">
                <h1>Our Memberships
                </h1>
                <div className="membership-block">
                    <div className="membership-containers" style={{
                        position: "relative"
                    }}>
                        <div className="yearly-plan-mark">
                            <p>Best Value</p>
                        </div>
                        <p>Yearly Plan - 40% off</p>
                        <h2>29.99 $</h2>
                        <h4>Every month</h4>
                        <h4>One-time payment</h4>
                        <h4>30 day free trial</h4>
                        <button>Start Free Trial</button>
                        <div className="membership-benefit-container">
                            <h3>Choose your training plan!</h3>
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
                            <h3>Affordable prices for you!</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlansComponent;