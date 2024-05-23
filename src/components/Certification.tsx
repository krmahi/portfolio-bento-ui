// import React from "react";
import "../styles/Certification.css";
import codingninja from "../assets/codingninja-logo.svg";
import googlelogo from "../assets/google-logo.svg";
import microsoftlogo from "../assets/microsoft-logo.svg";
import awslogo from "../assets/aws-logo.svg";
import googlecloud from "../assets/googlecloud-logo.svg";
import googledev from "../assets/googledeveloper-logo.svg";
import hackerrank from "../assets/hackerrank-logo.svg";
import timespark from "../assets/timespark-logo.svg";
import infosys from "../assets/infosys-logo.svg";

function Certification() {
  return (
    <div className="achicerti">
      <div className="certi-blocks">
        <div id="cert-compi-title" className="title certi-title">
          achivements & <br />
          certifications
        </div>
        {/* 1st */}
        <div className="block-1 orange ca">
          <div className="block-title bold-achi-heading ">
            C++ Certification <span> coding ninja</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>c++ beginner</span>
              <span>c++ advanced</span>
            </div>
            <img src={codingninja} alt="coding ninja" />
          </div>
        </div>
        {/* 2nd */}
        <div className="block-1 yellow cb">
          <div className="block-title bold-achi-heading ">
            DSA in python <span> google</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>data structures</span>
              <span>algorithms</span>
            </div>
            <img src={googlelogo} alt="google logo" />
          </div>
        </div>
        {/* 3rd */}
        <div className="block-1 green cc">
          <div className="block-title bold-achi-heading ">
            Problem solving <span> hackerrank</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>programming</span>
              <span>thinking</span>
            </div>
            <img src={hackerrank} alt="hackerrank logo" />
          </div>
        </div>
        {/* 4th */}
        <div className="block-1 yellow cl">
          <div className="block-title bold-achi-heading ">
            Javascript <span>hackerrank</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>scripting</span>
              <span>web technology</span>
            </div>
            <img src={hackerrank} alt="hackerrank logo" />
          </div>
        </div>
        {/* 5th */}
        <div className="block-1 purple cerit-block-span cd">
          <div className="block-title bold-achi-heading ">
            Google developer student club <span>google</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>project management</span>
              <span>html css bootcamp</span>
            </div>
            <img src={googledev} alt="googledev logo" />
          </div>
        </div>
        {/* 6th */}
        <div className="block-1 purple cerit-block-span ce">
          <div className="block-title bold-achi-heading ">
            Microsoft learn Student Ambassador
            <span>microsoft</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>project management</span>
              <span>html css bootcamp</span>
            </div>
            <img src={microsoftlogo} alt="microsoft logo" />
          </div>
        </div>
        {/* 7th */}

        <div className="block-1 grey cf">
          <div className="block-title bold-achi-heading ">
            Cloud fundamentals <span> amazon</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>cloud concepts</span>
              <span>networking</span>
            </div>
            <img src={awslogo} alt="aws logo" />
          </div>
        </div>
        {/* 8th */}
        <div className="block-1 grey ch">
          <div className="block-title bold-achi-heading ">
            Cloud architechture <span> amazon</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>cloud database</span>
              <span>automation</span>
            </div>
            <img src={awslogo} alt="aws logo" />
          </div>
        </div>
        {/* 9th */}
        <div className="block-1 purple cerit-block-span ci">
          <div className="block-title bold-achi-heading ">
            Google cloud badges <span> google cloud</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>api gateway</span>
              <span>data warehouses with bigQuery</span>
            </div>
            <img src={googlecloud} alt="googlecloud logo" />
          </div>
        </div>
        {/* 10th */}
        <div className="block-1 purple cerit-block-span cj">
          <div className="block-title bold-achi-heading ">
            Google cloud badges <span> google cloud</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>exploring data with looker </span>
              <span>streaming analytics into bigQuery</span>
            </div>
            <img src={googlecloud} alt="googlecloud logo" />
          </div>
        </div>
        {/* 11th */}
        <div className="block-1 orange ck">
          <div className="block-title bold-achi-heading ">
            Clearance to 2nd round of Times Spark
            <span> times of india</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>comprehension</span>
              <span>literature</span>
            </div>
            <img src={timespark} alt="timespark logo" />
          </div>
        </div>
        {/* 12th */}
        <div className="block-1 green cm">
          <div className="block-title bold-achi-heading ">
            Intro to data science <span> infosys</span>
          </div>
          <div className="achi-content">
            <div className="achi-sub-content">
              <span>data analytics</span>
              <span>research & dev.</span>
            </div>
            <img src={infosys} alt="infosys logo" />
          </div>
        </div>
        {/* side blocks */}
        <div className="side-block">
          <div className="side-block-text">certificates and badges</div>
        </div>
        <div className="side-block rotated">
          <div className="side-block-text">certificates and badges</div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
