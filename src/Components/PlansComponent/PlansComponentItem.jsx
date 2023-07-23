import React from "react";
import {Link} from "react-router-dom";

const PlansItem = ({name,price,description}) => {
    return (
        <div className="membership-containers">
            <p>{name}</p>
            <h2>{price}</h2>
            <h4>Every month</h4>
            <h4>One-time payment</h4>
            <h4>30 day free trial</h4>
            <Link to="/#formAnchor">
            <button>Start Free Trial</button>
            </Link>
            <div className="membership-benefit-container">
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default PlansItem;
