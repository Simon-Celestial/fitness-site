import adsImgApple from "../../Assets/images/app-store.webp";
import adsImgGoogle from "../../Assets/images/google-market.webp";
import "./AdComponent.css";

const AdComponent = () => {
    return (

        <div className="ads-container">
            <div className="ads-items">
                <p>We're available on multiple devices</p>
                <h4>Download Our App</h4>
            </div>
            <div className="ads-items">
                <img src={adsImgApple} alt="apple-store"/>
                <img src={adsImgGoogle} alt="play-market"/>
            </div>
        </div>
    )
}
export default AdComponent;