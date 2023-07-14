import "./FixedMenu.css";
import facebookImg from "../../Assets/images/facebook.png";
import youtubeImg from "../../Assets/images/youtube.png";
import tikTokImg from "../../Assets/images/tik-tok.png";
import instagramImg from "../../Assets/images/instagram.png";
import chatImg from "../../Assets/images/live-chat.png";

const FixedMenu = () => {
    return (
    <div className="fixed-menu">
        <div className="vertical-fixed-block">
            <img src={facebookImg} alt="facebook"/>
            <img src={youtubeImg} alt="youtube"/>
            <img src={tikTokImg} alt="tik-tok"/>
            <img src={instagramImg} alt="instagram"/>
        </div>
        <div className="horizontal-fixed-block">
            <img src={chatImg} alt="chat"/>
            <p>Support's Help!</p>
        </div>
    </div>
    )

}
export default FixedMenu;