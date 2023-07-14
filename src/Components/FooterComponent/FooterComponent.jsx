import adsImgGoogle from "../../Assets/images/google-market.webp";
import adsImgApple from "../../Assets/images/app-store.webp";
import React from "react";
import "../FooterComponent/FooterComponent.css";


const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-block">
                    <div className="footer-block-item">
                        <h2>Join us on mobile!</h2>
                        <p>The Spaces by Wix app lets you easily stay in touch and updated with us on the go. Just
                            add your phone number and we’ll text you a link to download the app.</p>
                        <form action="#" encType="multipart/form-data">
                            <label htmlFor="numberPrefix" className="prefix-label">
                                <input type="tel" name="numberPrefix" placeholder="+994" className="ph-prefix"/>
                            </label>
                            <label htmlFor="phoneNumber" className="phone-label">
                                <input type="tel" name="phoneNumber" placeholder="Phone" className="ph-number"/>
                            </label>
                            <button type="submit">Send</button>
                        </form>
                        <div className="footer-images-block">
                            <img src={adsImgGoogle} alt="googleAds"/>
                            <img src={adsImgApple} alt="appleAds"/>
                        </div>
                    </div>
                </div>
                <div className="footer-block">
                    <div className="footer-selection-container">
                        <div className="footer-selection-block">
                            <b>SOCIAL</b>
                            <div className="footer-selection-items">
                                <p>Facebook</p>
                                <p>Youtube</p>
                                <p>TikTok</p>
                                <p>Instagram</p>
                            </div>
                            <button type="button">Become a Member</button>
                        </div>
                        <div className="footer-selection-block">
                            <b>MENU</b>
                            <div className="footer-selection-items">
                                <p>Home</p>
                                <p>Book a Class</p>
                                <p>Online Classes</p>
                                <p>Challenges</p>
                                <p>Plans</p>
                                <p>Trainers</p>
                                <p>Groups</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2023 by UNDERARMOUR. Powered and secured by <i>Ziya Gasimly</i></p>
            </div>
        </footer>
    )
}

export default FooterComponent;