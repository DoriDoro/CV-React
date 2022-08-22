import React from "react";
import { withRouter } from "react-router";

function RobotCard( {nameOfPage, pathname} ) {
  return (
    <div className="RobotCard">
      <a href="https://robohash.org" target="_blank" rel="noopener noreferrer">
        <img
          alt="robots"
          src={`https://robohash.org/${nameOfPage?nameOfPage:pathname}`}
        />
      </a>
    </div>
  );
}

export default withRouter(RobotCard);
