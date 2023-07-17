const ChallengeItem = (props) => {
  return (
    <div className="challenges-offer-items">
      <b>
        {props.upText}
        <br />
        {props.bottomText}
      </b>
      <button type="button">Join now</button>
    </div>
  );
};

export default ChallengeItem;
