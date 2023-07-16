import "./GroupsPage.css";
import FixedMenu from "../../Components/FixedMenu/FixedMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import React from "react";
import manUser from "../../Assets/images/man-user.png";
import videoCamera from "../../Assets/images/video-camera.png";
import photoCamera from "../../Assets/images/camera.png";
import searchImg from "../../Assets/images/search.png";
import groupOneImg from "../../Assets/images/group-1.webp";
import groupTwoImg from "../../Assets/images/group-2.webp";
import groupThreeImg from "../../Assets/images/group-3.webp";


const GroupsPage = () => {
    return (
        <div className="groups-wrapper">
            <FixedMenu/>
            <NavigationMenu/>
            <div className="groups-main-content">
                <div className="groups-colored-block">
                    <div className="groups-colored-text-container">
                        <b>JOIN THE
                            <i> UNDERARMOUR</i>
                            <br/>
                            COMMUNITY
                        </b>
                        <p>I'm a paragraph. Click here to add your own text
                            and edit me. Let your users get to know
                            you</p>
                    </div>
                </div>
                <div className="groups-feed-wrapper">
                    <b>Groups Feed</b>
                    <div className="feed-container">
                        <div className="feed-container-blocks">
                            <div className="feed-blocks-item">
                                <img src={manUser} alt="man-user"/>
                                <div className="feed-sharing-panel">
                                    <p>Share something...</p>
                                </div>
                                <button>Create a Post</button>
                            </div>
                            <div className="feed-blocks-item">
                                <div className="feed-img-text-item">
                                    <img src={photoCamera} alt="photo"/>
                                    <p>Photo</p>
                                </div>
                                <div className="feed-img-text-item">
                                    <img src={videoCamera} alt="video"/>
                                    <p>Video</p>
                                </div>
                                <div className="feed-img-text-item">
                                    <p>GIF</p>
                                </div>
                            </div>
                            <div className="feed-blocks-item">
                                <h2>No Posts to Show</h2>
                                <p>Check out the available groups for you to join and start posting.
                                </p>
                            </div>

                        </div>
                        <div className="feed-container-blocks">
                         <div className="suggested-groups-block">
                             <div className="groups-search-box-wrapper">
                             <div className="groups-search-box">
                                 <img src={searchImg} alt="search"/>
                                 <input type="text" placeholder="Search"/>
                             </div>
                             </div>
                             <div className="suggested-groups-list-block">
                                 <b>Suggested Groups</b>
                                 <div className="suggested-groups-item">
                                     <img src={groupOneImg} alt="group"/>
                                     <div className="group-name">
                                         <p>Stronger Together</p>
                                         <div className="group-info">
                                             <p>Public</p>
                                             <p>1 Member</p>
                                         </div>
                                     </div>

                                 </div>
                                 <div className="suggested-groups-item">
                                     <img src={groupTwoImg} alt="group"/>
                                     <div className="group-name">
                                         <p>Stronger Together</p>
                                         <div className="group-info">
                                             <p>Public</p>
                                             <p>1 Member</p>
                                         </div>
                                     </div>

                                 </div>
                                 <div className="suggested-groups-item">
                                     <img src={groupThreeImg} alt="group"/>
                                     <div className="group-name">
                                         <p>Stronger Together</p>
                                         <div className="group-info">
                                             <p>Public</p>
                                             <p>1 Member</p>
                                         </div>
                                     </div>

                                 </div>
                             </div>
                         </div>
                        </div>
                    </div>
                </div>

                <FooterComponent/>
            </div>
        </div>
    )
}

export default GroupsPage;