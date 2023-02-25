import React from "react";
function Activity({
  activity,
  type,
  participants,
  price,
  resource,
  accessibility,
  fetchCall,
}) {
  return (
    <div>
      <div className="main">
        <div className="header">
          <h1 className="tx-primary tx-r tx-l ls md-text  ">
            New Activity
            <div />
            <div className="dash"></div>
          </h1>
        </div>
        <div className="listUI">
          <ul className="tx-primary tx-m tx-s">
            <li>Activity: {activity}</li>
            <li>Type: {type}</li>
            <li>Participants: {participants}</li>
            <li>Price: {price * 100}</li>
            <li>Accessibility: {accessibility * 100}</li>
          </ul>
        </div>
        <div className="btn">
          <button className="tx-secondary tx-b tx-sx" onClick={fetchCall}>
            Press here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
