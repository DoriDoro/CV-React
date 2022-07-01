import React from "react";
import PageCard from "../components/PageCard";
import RobotCard from "../components/RobotCard"; 
import { Link } from 'react-router-dom';

export default function Experiences() {
  return (
    <div className="allPagesDiv">
        <RobotCard nameOfPage={Experiences} />
        <div>

        <div className="previous-next">
        <Link to={"/contact-details"}> <i className="fas fa-chevron-left"></i> </Link>
    
        <Link to={"/projects"}> <i className="fas fa-chevron-right"></i> </Link>
      </div>

        <h2> Formation in Paris, France </h2>
            <PageCard
            title="Full-Stack Web Development - Bootcamp"
            nameOfCompany="Ironhack, Paris"
            contentCompany="Ironhack is an international school with training in Web Development, Data Analytics  
            and UX/UI Design. Ironhack use a personalized approach to
            education by allowing students to shape their experience according to
            their personal goals."
            />

            <h2 className="Experiences__content"> Working Experience </h2>
            <PageCard
            title="Customer Support Agent - Helpdesk"
            nameOfCompany="Comdatagroup, Gennevilliers"
            contentCompany="Treating calls and emails, as well as working with technical
            departments on solving problems. I am specialization as telematics
            agent: responsible for initial troubleshooting of issues with
            infotainment systems built-into cars."
            />

            <PageCard
            title="Telemarketing Agent"
            nameOfCompany="Multiservices, Montreuil"
            contentCompany=" Having phone contact with dentists in different countries and have
            done all general tasks (administration, accounting and commercial)."
            />

            <PageCard
            title="Time of orientation, development and integration"
            nameOfCompany=""
            contentCompany="Spontaneously decided to move to France, took some time to find
            purpose in my life and integrate in this new country. Was working as a
            dog walker in the West of Paris Centre."
            />

            <PageCard
            title="Chemical Technical Assistent"
            nameOfCompany="Central Clinical Research Centre at University of Freiburg (Germany)"
            contentCompany="The main research was based on the basic epigenetic mechanisms in
            cellular assays and explorative mouse models, validation of epigenetic
            control in animal models of disease and epigenetics/histone
            modifications and inhibitors of histone code reader proteins."
            />
            
            
            <h2 className="Experiences__content"> Formation in Germany </h2>
            
            <PageCard
            title="Chemical Technical Assistent"
            nameOfCompany="Walther-Rathenau-Gewerbeschule in Freiburg (Germany)"
            contentCompany="Diplome as a Chemical Technical Assistent"
            />

            <div className="previous-next link-space">
              <Link to={"/contact-details"}> <i className="fas fa-chevron-left"></i> </Link>
          
              <Link to={"/projects"}> <i className="fas fa-chevron-right"></i> </Link>
            </div>

        </div>
        </div>
  );
}
