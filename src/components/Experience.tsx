// import React from "react";
import "../styles/Experience.css";
import googlecloud from "../assets/googlecloud-logo.svg";
import socialscript from "../assets/socialscript.svg";
import devtown from "../assets/devtown.svg";
import TW from "../assets/TW_white.png";
import AWS from "../assets/aws-logo.svg";

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
  const handleAwsArchitechture = () => {
    window.open(
      "https://drive.google.com/file/d/1tWxJdD9MyAMsCwKeLqNTLs_ZZUfG3yhp/view?usp=sharing"
    );
  };
  const handleAwsFundamentals = () => {
    window.open(
      "https://drive.google.com/file/d/1m0Nt1QSuQxPvTW26Agg4DDaMmElFXbko/view?usp=sharing"
    );
  };
  const handleAICTE = () => {
    window.open(
      "https://drive.google.com/file/d/1q2mJb3nnE_CLPVkCWtYBdO90NZpQzhYb/view?usp=sharing"
    );
  };
  const handleTW = () => {
    window.open(
      "https://drive.google.com/file/d/18q8JFHMXv1LtVgdef59fj0kTqMAM3S1i/view?usp=sharing"
    );
  };
  return (
    <div className="experience-hero">
      <div className="title">Work Experience</div>
      <div className="work-blocks ">
        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Trusted wearables</div>
          <div className="block-sub-title">Software Developer Intern</div>
          <div className="block-content line-height-content">
            <span>
              Contributed to cross-platform mobile and smartwatch app
              development using Kotlin, Swift, and React Native (Expo & CLI).
            </span>
            <span>
              Designed and implemented intuitive UI/UX interfaces with
              Squareline Studio and LVGL
            </span>
            <span>
              Tackled UI rendering challenges and optimized responsiveness for
              smartwatch interfaces under resource constraints.
            </span>
          </div>
        </div>

        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Amazon Web Service</div>
          <div className="block-sub-title">
            Cloud Architecture Intern (AICTE)
          </div>
          <div className="block-content line-height-content">
            <span>
              Managed cloud VMs, SMB workloads, and optimized storage using CLI
              and bucket configurations.
            </span>
            <span>
              Used BigQuery and Looker to extract insights and visualize data;
              integrated ML APIs for smarter workflows.
            </span>
            <span>
              Improved poisoned data extraction by 20% in the capstone project,
              enhancing data processing accuracy.
            </span>
          </div>
        </div>

        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Google Cloud</div>
          <div className="block-sub-title">cloud arcade facilitator</div>
          <div className="block-content line-height-content">
            <span>
              Drove a 25% improvement in decision-making by delivering
              actionable insights from BigQuery analysis.
            </span>
            <span>
              Led comprehensive data exploration with Looker, resulting in a 30%
              increase in data gathering efficiency.
            </span>
            <span>
              Achieved a 15% reduction in resource costs by optimizing Virtual
              Machine usage and managing SMB workloads strategically.
            </span>
          </div>
        </div>

        {/* <div className="block-1 block-color work-col-span-desktop">
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
        </div> */}
        <div className="block-1 block-color end-block work-col-span-desktop">
          <div className="block-title">Freelancer</div>
          <div className="block-sub-title">Designer & Developer</div>
          <div className="block-content line-height-content">
            <span>
              Designed and developed custom websites and apps, ensuring a
              seamless user experience and mobile responsiveness.
            </span>
            <span>
              Created engaging visuals, UI components, and illustrations using
              Adobe Illustrator, Photoshop, and Clip Studio Paint.
            </span>
            <span>
              Collaborated with clients to ensure designs aligned with their
              brand vision, delivering high-quality, on-time projects that
              boosted client satisfaction.
            </span>
          </div>
        </div>

        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Social (Script foundation)</div>
          <div className="block-sub-title">social summer of code season 2</div>
          <div className="block-content line-height-content">
            <span>
              Contributed actively to the development of an open-source project,
              enhancing features and resolving issues.
            </span>
            <span>
              Demonstrated proficiency in Git for version control, ensuring
              smooth collaboration and efficient project management.
            </span>
            <span>
              Played a key role in fostering a collaborative and innovative
              environment, driving team success throughout the SSOC program.
            </span>
          </div>
        </div>

        <div className="block-1 block-color end-block work-col-span-laptop">
          <div className="block-title">DevTown</div>
          <div className="block-sub-title">campus ambassador</div>
          <div className="block-content line-height-content-3">
            <span>
              Boosted DevTown’s visibility on campus by 25% through student
              engagement and awareness initiatives.
            </span>
            <span>
              Orchestrated a diverse array of events, resulting in a noteworthy
              30% surge in overall participation among students
            </span>
            {/* <span>
              Fostered a strong sense of community and collaboration among
              students, enhancing brand presence and involvement.
            </span> */}
          </div>
        </div>

        <div className="work-badges">
          <a>
            <div className="badge-1 block-color " onClick={handleTW}>
              <img src={TW} alt="Trusted Wearables" />
            </div>
          </a>
          <a>
            <div
              className="badge-1 block-color "
              onClick={handleAwsArchitechture}
            >
              <img src={AWS} alt="AWS" />
            </div>
          </a>
          <a>
            <div
              className="badge-1 block-color "
              onClick={handleAwsFundamentals}
            >
              <img src={AWS} alt="AWS" />
            </div>
          </a>
          <a>
            <div className="badge-1 block-color " onClick={handleAICTE}>
              <img src={AWS} alt="AWS" />
            </div>
          </a>
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
          {/* <a>
            <div className="badge-1 block-color " onClick={handleDevtown}>
              <img src={devtown} alt="devtown" />
            </div>
          </a> */}
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
