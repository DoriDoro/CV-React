import React from "react";
import RobotCard from "../components/RobotCard";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="allPagesDiv">
      <RobotCard nameOfPage={AboutMe} />
      <div className="AboutMe">
        <div className="previous-next">
          <Link to={"/"}>
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
          </Link>

          <Link to={"/contact-details"}>
            {" "}
            <i className="fas fa-chevron-right"></i>{" "}
          </Link>
        </div>

        <h2>About Me</h2>

        <div className="Skills__main-div">
          <div className="Skills__div-content">
            <div className="Skills__content"> Problem solving </div>
            <div className="Skills__content"> quality </div>
            <div className="Skills__content"> calmness </div>
          </div>
          <div className="Skills__div-content">
            <div className="Skills__content"> conscience </div>
            <div className="Skills__content"> responsible </div>
            <div className="Skills__content"> inquisitive </div>
          </div>
          <div className="Skills__div-content">            
            <div className="Skills__content"> improve </div>
            <div className="Skills__content"> grow constantly </div>
            <div className="Skills__content"> reliable </div>
          </div>
        </div>

        <p className="allPagesDiv__content">
          Where to start... Since I was a child I was fascinated by dogs. I have 
          always understood them. Of course, dogs have less to do with programming, 
          however, dogs have a lot to do with me. In my life there were many dogs. 
          Through dogs I learned a lot about myself and I still do. My son has taken 
          this place of teaching. Through my son, I can see the world through 
          completely different eyes. Dogs have made me more patient, determined and 
          have increased my assertiveness. You can't be a good dog handler without 
          these qualities. A calm and assertive demeanor is the key to success.
          <br/>
          <br/>
          What qualities do I like a lot about myself? In my previous job in customer 
          service, I had the task of finding a direct solution to customers' problems 
          every day. "Working with my head" is something I particularly enjoy. What 
          do we have such a powerful brain for? I had to work solution-oriented and 
          at the same time customer-oritenitiert and process and document all 
          processes in the Salseforce CRM system. I liked my "cases" filled out in 
          detail, conscientiously processed and reliably completed. Even when I left 
          for parental leave, I made a point of ensuring that my colleagues were 
          able to follow up on the individual cases and continue processing them 
          without difficulty.
          <br/>
          <br/>
          Now that my son is older and I am slowly getting "wings", as we call it in 
          German, I am spending every free minute refining and expanding my basic 
          programming skills. I describe my basics as broad, I have already gained 
          various insights into different programming languages. 
        </p>

      </div>
    </div>
  );
}
