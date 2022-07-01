import React from "react";
import RobotCard from "../components/RobotCard";
import ProjectsSingleProject from "../components/ProjectsSingleProject";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="allPagesDiv">
      <RobotCard nameOfPage={Projects} />
      <div>
        <div className="previous-next">
          <Link to={"/experiences"}>
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
          </Link>

          <Link to={"/skills"}>
            {" "}
            <i className="fas fa-chevron-right"></i>{" "}
          </Link>
        </div>

        <h2> Ironhack Projects: </h2>

        <ProjectsSingleProject
          link="https://doridoro.github.io/Ironhack-module-1-the-game/"
          title="Module 1"
          nameOfProject="Challenge Your Brain"
          contentTitle="Project 1: Front-End - Create a game with HTML, CSS and JavaScript"
          requirements="requirements: render a game in the browser - DOM manipulation -
            GitHub repo, use GitHub pages to deplay the game"
          contentProject="My goal for the game was to combine my german background with
            something usefull and funny. The player has to read and remember
            German names of an animal, after some seconds the user has to type
            in the correct German name insite of a textfield. The user can
            choose between two different levels for the game."
        />

        <ProjectsSingleProject
          link="https://xyz-labs.herokuapp.com"
          title="Module 2"
          nameOfProject="XYZ-labs"
          contentTitle="Project 2: Full-stack Web Application - create a full-stack Web Application"
          requirements="requirements: min 2 Modules - use Express - use Mongoose - signup, login, logout - 
            CRUD - GitHub repo - deploy at Heroku"
          contentProject="We created a website for a hospital. The patients are able to signup/login. The patient can choose between differents tests which he wants to perform and add them to there own list. 
          The user can add tests to the test-list of the hospital and can delete tests from his own user-test list.
          The models are: User, Tests and User-Tests"
        />

        <ProjectsSingleProject
          link="https://doro-connect.herokuapp.com/"
          title="Module 3"
          nameOfProject="DoroConnect"
          contentTitle="Project 3: Full-stack Web Application - create a full-stack Web Application with React and Express"
          requirements="requirements: min 2 Modules - use Express - use React - signup, login, logout - 
          CRUD - GitHub repo - deploy at Heroku"
          contentProject="Want to combine my job as a Customer Support Agent with the bootcamp. The registration require a vehicle identification number stored in the database to register the user on the website."
        />

        <h2 className="Projects"> Personal Projects: </h2>

        <ProjectsSingleProject
          link="https://github.com/DoriDoro/CV-react-english"
          title="Curriculum Vitae"
          nameOfProject="React"
          contentTitle="Front-End Web Application"
          requirements="requirements: React - GitHub - Heroku"
          contentProject="I wanted to create something unique, this idea is not unique but I wanted to 
            combine my knowledge of React with introducing myself (done in 2019 and updated in 2022)."
        />

        <ProjectsSingleProject
          link="https://github.com/DoriDoro/portfolio_dorothea-reher"
          title="Portfolio"
          nameOfProject="Python"
          contentTitle="Front-End Web Application"
          requirements="requirements: Python - GitHub - Heroku"
          contentProject="Collection of some of my projects."
        />

        <div className="div-btn">
          <Link to={"/contact-details"} className="btn btn-space">
            {" "}
            Contact Me{" "}
          </Link>
          <Link to={"/experiences"} className="btn">
            {" "}
            My Experiences{" "}
          </Link>
        </div>

        <div className="previous-next link-space">
          <Link to={"/experiences"}>
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
          </Link>

          <Link to={"/skills"}>
            {" "}
            <i className="fas fa-chevron-right"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
