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
              Developed smartwatch and mobile apps using <b>Kotlin</b>,{" "}
              <b>Swift</b>, and <b>React Native</b>, improving device
              compatibility across iOS and Android platforms
            </span>
            <span>
              Designed intuitive UI using <b>LVGL</b> and{" "}
              <b>Squareline Studio</b>, reducing frame lag and{" "}
              <b>enhancing interface responsiveness by 25%</b> on low-resource
              devices
            </span>
            <span>
              Optimized <b>UI</b> rendering bottlenecks and animation load,
              <b>improving load time efficiency</b> under memory-constrained
              environments
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
              Managed AWS <b>virtual machines</b> and optimized S3 storage using
              CLI and lifecycle policies,{" "}
              <b>reducing monthly cloud storage cost by 18%</b>
            </span>
            <span>
              Visualized large datasets using <b>BigQuery</b> and <b>Looker</b>,
              automating reporting pipelines and{" "}
              <b>reducing manual analysis time by 40%</b>
            </span>
            <span>
              Executed <b>Automated integration</b> and <b>regression tests</b>{" "}
              for cloud-deployed applications, identifying configuration-level
              issues
            </span>
          </div>
        </div>

        <div className="block-1 block-color work-col-span-desktop">
          <div className="block-title">Google Cloud</div>
          <div className="block-sub-title">Cloud Operations Trainee</div>
          <div className="block-content line-height-content">
            <span>
              Drove a <b>25% improvement in decision-making</b> by delivering
              actionable insights from BigQuery analysis.
            </span>
            <span>
              Led comprehensive <b>data exploration with Looker</b>, resulting
              in a <b>30% increase</b> in data gathering efficiency.
            </span>
            <span>
              Achieved a <b>15% reduction</b> in resource costs by optimizing
              Virtual Machine usage and managing <b>SMB workloads</b>{" "}
              strategically.
            </span>
          </div>
        </div>

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
              <b> Adobe Illustrator</b>, <b>Photoshop</b>, and{" "}
              <b>Clip Studio Paint</b>.
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
              Contributed actively to the development of an{" "}
              <b> open-source project</b>, enhancing features and resolving
              issues.
            </span>
            <span>
              Demonstrated proficiency in <b>Git</b> for <b>version control</b>,
              ensuring smooth collaboration and efficient project management.
            </span>
            <span>
              Played a key role in fostering a <b>collaborative</b> and
              innovative environment, driving team success throughout the{" "}
              <b>SSOC program</b>.
            </span>
          </div>
        </div>

        <div className="block-1 block-color end-block work-col-span-laptop">
          <div className="block-title">DevTown</div>
          <div className="block-sub-title">campus ambassador</div>
          <div className="block-content line-height-content-3">
            <span>
              Boosted DevTown’s visibility on campus by <b>25%</b> through
              student engagement and awareness initiatives.
            </span>
            <span>
              Orchestrated a diverse array of events, resulting in a noteworthy
              <b>30% surge in overall participation</b> among students
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
