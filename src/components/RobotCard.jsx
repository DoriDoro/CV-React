import React from "react";
import { withRouter } from "react-router";

function RobotCard(props) {
  return (
    <div className="RobotCard">
      <a href="https://robohash.org" target="_blank" rel="noopener noreferrer">
        <img
          alt="robots"
          src={`https://robohash.org/${props.location.pathname}`}
        />
      </a>
    </div>
  );
}

export default withRouter(RobotCard);
