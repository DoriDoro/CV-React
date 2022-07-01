import React from "react";
import RobotCard from "../components/RobotCard";
import { Link } from 'react-router-dom';

export default function ContactDetails() {
  return (
    <div className="allPagesDiv">
      <RobotCard nameOfPage={ContactDetails} />

      <div className="ContactDetails">

      <div className="previous-next">
        <Link to={"/about"}> <i className="fas fa-chevron-left"></i> </Link>
    
        <Link to={"/experiences"}> <i className="fas fa-chevron-right"></i> </Link>
      </div>

        <h2> Contact Details </h2>
        <p>
          <a href="tel:07 68 13 21 47"> <i className="fas fa-mobile"></i> Call me </a>
        </p>
        <p>
         <a href="mailto:dorothea.reher@gmail.com">  <i className="fas fa-at"></i> Mail me </a>
        </p>
        <p>
          <i className="fas fa-home"></i> 92390, France
        </p>
        <p>
          <a href="https://github.com/DoriDoro" target="_blanck"> <i className="fab fa-github"></i> DoriDoro</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/dorothea-reher/" target="_blanck"> <i className="fab fa-linkedin"></i> Dorothea Reher</a>
        </p>
      </div>
    </div>
  );
}
