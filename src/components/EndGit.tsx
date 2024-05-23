// import React from "react";
import "../styles/EndGit.css";

function EndGit() {
  const handleClick = () => {
    window.open("https://github.com/krmahi");
  };

  return (
    <div className="end-div">
      <div className="end">
        <div className="end-heading">
          <div className="end-h1">Your</div>
          <div className="end-h2">Journey</div>
        </div>
        <div className="end-heading2">Shouldn't End Here.</div>
      </div>
      <div className="end-content">
        Follow me on github to stay tuned on more projects.
      </div>
      <div className="contact-button" onClick={handleClick}>
        <a>GitHub</a>
      </div>
    </div>
  );
}

export default EndGit;
