import {Link} from "react-router-dom";

const ChallengeItem = (props) => {
  return (
    <div className="challenges-offer-items">
      <b>
        {props.upText}
        <br />
        {props.bottomText}
      </b>
        <Link to="/#formAnchor">
      <button type="button">Join now</button>
        </Link>
    </div>
  );
};

export default ChallengeItem;
