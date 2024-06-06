// import React from "react";

import "../styles/SkillBento.css";
import skillbento from "../assets/skillbento.svg";

function SkillBento() {
  return (
    <div className="skill-bento">
      <img loading="lazy" src={skillbento} alt="skill bento" />
    </div>
  );
}

export default SkillBento;
