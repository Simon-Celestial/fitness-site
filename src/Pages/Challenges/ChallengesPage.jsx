import  "./ChallengesPage.css";
import React from "react";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import runningImg from "../../Assets/images/running.jpg";
import ChallengeItem from "./ChallengeItem";

const ChallengesPage = () => {
    let myChallengesArray = [
        {
            upText: "Get Marathon",
            bottomText: "Ready"
        },
        {
            upText: "Running for",
            bottomText: "Begginers"
        },
        {
            upText: "5k Running",
            bottomText: "Challenge"
        }
    ] 
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
                   { myChallengesArray.map(item => {
                      return <ChallengeItem  upText={item.upText} bottomText={item.bottomText} />
                    })
                }
                </div>
            </div>
            <FooterComponent />
            
        </div>
    )
}

export default ChallengesPage;