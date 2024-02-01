import React from "react";
import "../Styles/Experience.css";
import googlecloud from "../assets/googlecloud-logo.svg";
import socialscript from "../assets/socialscript.svg";
import devtown from "../assets/devtown.svg";

function Experience() {
  return (
    <div className="experience-hero">
      <div className="title">Work Experience</div>
      <div className="work-blocks">
        <div className="block-1 block-color">
          <div className="block-title">Google Cloud</div>
          <div className="block-sub-title">cloud arcade facilitator</div>
          <div className="block-content">
            <span>
              25% improvement in decision-making with actionable insights
              derived from BigQuery analysis
            </span>
            <span>
              comprehensive data exploration using Looker accountable for 30%
              increased data gathering
            </span>
            <span>
              15% reduction in resource costs through strategic management of
              Virtual Machines and SMB workloads
            </span>
          </div>
        </div>

        <div className="block-1 block-color">
          <div className="block-title">Social (Script foun.)</div>
          <div className="block-sub-title">social summer of code season 2</div>
          <div className="block-content">
            <span>
              Actively contributed to the development of an open-source project
              during SSOC
            </span>
            <span>
              compreheproficiency in Git for version control, ensuring seamless
              collaboration and efficient project management
            </span>
            <span>
              Played a key role in fostering a collaborative and innovative
              environment within the SSOC
            </span>
          </div>
        </div>
        <div className="block-1 block-color end-block">
          <div className="block-title">DevTown</div>
          <div className="block-sub-title">campus ambassador</div>
          <div className="block-content">
            <span>
              Elevated awareness of DevTown by engaging fellow students,
              resulting in a 25% increase in organizational visibility on campus
            </span>
            <span>
              Orchestrated a diverse array of events, resulting in a noteworthy
              30% surge in overall participation among students
            </span>
          </div>
        </div>
        <div className="work-badges ">
          <a href="#">
            <div className="badge-1 block-color ">
              <img src={googlecloud} alt="google cloud" />
            </div>
          </a>
          <a href="#1">
            <div className="badge-1 block-color ">
              <img src={socialscript} alt="social script" />
            </div>
          </a>
          <a href="#2">
            <div className="badge-1 block-color ">
              <img src={devtown} alt="devtown" />
            </div>
          </a>
          <div id="grey-block" className=" grey-block-color ">
            <p>
              certificates <br />
              and <br /> badges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
