// import React from "react";
import "../styles/Experience.css";
import googlecloud from "../assets/googlecloud-logo.svg";
import socialscript from "../assets/socialscript.svg";
import devtown from "../assets/devtown.svg";

function Experience() {
  const handleGoogle = () => {
    window.open(
      "https://www.cloudskillsboost.google/public_profiles/f2043e33-b718-400a-9f00-2317e28a0dbd"
    );
  };
  const handleSocial = () => {
    window.open(
      "https://certificate.givemycertificate.com/c/43dbaa8a-40bb-42af-bf97-8d90042920be"
    );
  };
  const handleDevtown = () => {
    window.open("https://www.cert.devtown.in/verify/gxBHL");
  };
  return (
    <div className="experience-hero">
      <div className="title">Work Experience</div>
      <div className="work-blocks ">
        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Google Cloud</div>
          <div className="block-sub-title">cloud arcade facilitator</div>
          <div className="block-content line-height-content">
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

        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Social (Script foun.)</div>
          <div className="block-sub-title">social summer of code season 2</div>
          <div className="block-content line-height-content">
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
        <div className="block-1 block-color end-block work-col-span-laptop">
          <div className="block-title">DevTown</div>
          <div className="block-sub-title">campus ambassador</div>
          <div className="block-content line-height-content-3">
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
        <div className="work-badges">
          <a>
            <div className="badge-1 block-color" onClick={handleGoogle}>
              <img src={googlecloud} alt="google cloud" />
            </div>
          </a>
          <a>
            <div className="badge-1 block-color " onClick={handleSocial}>
              <img src={socialscript} alt="social script" />
            </div>
          </a>
          <a>
            <div className="badge-1 block-color " onClick={handleDevtown}>
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
