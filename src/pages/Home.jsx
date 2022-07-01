import React from "react";
import RobotCard from "../components/RobotCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="allPagesDiv">
      <RobotCard nameOfPage={Home} />
      <div>
        <div className="next">
          <Link to={"/about"}>
            {" "}
            <i className="fas fa-chevron-right"></i>{" "}
          </Link>
        </div>
        <h2>
          <br /> Dorothea REHER{" "}
        </h2>
        <h4> - Web Developer - </h4>
        <p className="allPagesDiv__content">
          "The goal is to feel a part of something, not just play a part in anything."
          <br/>
          <br/>

          I am searching for a vision I can be part of. I want to share a vision
          of someone/a company and live this vision. I want to find passion in
          that vision, find my competence in that vision and be accountable to
          the vision. I want to be a part of a team. I want to create something
          useful.          
        </p>

        <div className="div-btn Home_btn">
          <Link to={"/projects"} className="btn">
            {" "}
            Learn More{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
