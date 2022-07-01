import React from 'react';
import RobotCard from '../components/RobotCard';
import { Link } from 'react-router-dom';

export default function Skills() {
    return (
        <div className="allPagesDiv">
            <RobotCard nameOfPage={Skills} />
            <div className="Skills">

            <div className="previous">
                <Link to={"/projects"}> <i className="fas fa-chevron-left"></i> </Link>
            </div>

                <h2> Skills </h2>
                <div className="Skills__main-div">
                    <div className="Skills__div-content">
                        <div className="Skills__content"> HTML5 </div>
                        <div className="Skills__content"> CSS3 </div>
                        <div className="Skills__content"> React </div>
                        <div className="Skills__content"> Git/GitHub </div>
                        <div className="Skills__content"> Handlebars.js </div>
                        <div className="Skills__content"> Node.js </div>
                    </div>
                            
                    <div className="Skills__div-content">
                        <div className="Skills__content"> Express.js </div>
                        <div className="Skills__content"> JavaScript </div>
                        <div className="Skills__content"> MongoDB </div>
                        <div className="Skills__content"> AJAX </div>
                        <div className="Skills__content"> Axios </div>
                        <div className="Skills__content"> Python </div>
                    </div>
                </div>
                
                <div className="Skills__main-div">  
                    <div className="Skills__div-content">
                        <div className="Skills__content"> Postman </div>
                        <div className="Skills__content"> Bootstrap </div>
                        <div className="Skills__content"> Heroku </div>
                        <div className="Skills__content"> Figma </div>
                        <div className="Skills__content"> Salesforce </div>
                    </div>

                    <div className="Skills__div-content">
                        <div className="Skills__content"> German: C2 </div>
                        <div className="Skills__content"> English: C1 </div>
                        <div className="Skills__content"> French: B2 </div>
                    </div>

               
                </div>

                <div className="div-btn">
                    <Link to={"/contact-details"} className="btn btn-space"> Contact Me </Link> 
                    <Link to={"/projects"} className="btn"> My Projects </Link>
                </div>

                <div className="previous-next link-space">
                    <Link to={"/projects"}> <i className="fas fa-chevron-left"></i> </Link>
                </div>

            </div>
        </div>
    )
}
