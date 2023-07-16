import  "./ChallengesPage.css";
import React from "react";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import runningImg from "../../Assets/images/running.jpg";


const ChallengesPage = () => {
    return (
        <div className="challenges-wrapper">
            <FixedMenu />
            <NavigationMenu />
            <div className="challenges-main-content">
            <div className="challenger-colored-block">
                <div className="colored-text-container">
                   <b>GET OUT THERE
                       <br/>
                       and <i>Run</i></b>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you</p>
                </div>
            </div>
                <img src={runningImg} alt="running" className="running-img"/>
                <div className="challenger-offer-block">
                    <div className="challenges-offer-items">
                        <b>Get Marathon
                        <br/>
                            Ready
                        </b>
                        <button type="button">Join now</button>
                    </div>
                    <div className="challenges-offer-items">
                        <b>Running for
                            <br/>
                            Begginers
                        </b>
                        <button type="button">Join now</button>
                    </div>
                    <div className="challenges-offer-items">
                        <b>5k Running
                            <br/>
                            Challenge
                        </b>
                        <button type="button">Join now</button>
                    </div>
                </div>
            </div>
            <FooterComponent />
            
        </div>
    )
}

export default ChallengesPage;