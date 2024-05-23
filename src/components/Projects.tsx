// import React from "react";
import "../styles/Projects.css";
import voicegenix from "../assets/voicegenix.svg";

function Projects() {
  const handleCodeP1 = () => {
    window.open("https://github.com/krmahi/AutoNavSenseHD");
  };
  const handleViewP2 = () => {
    window.open("https://krmahi.github.io/portfolio-bento-ui");
  };
  const handleCodeP2 = () => {
    window.open("https://github.com/krmahi/portfolio-bento-ui");
  };
  const handleViewP3 = () => {
    window.open("https://krmahi.github.io/2d_ray_casting");
  };
  const handleCodeP3 = () => {
    window.open("https://github.com/krmahi/2d_ray_casting");
  };
  const handleViewP4 = () => {
    window.open(
      "https://github.com/krmahi/Gender-recognition-using-voice-GUI/releases"
    );
  };
  const handleCodeP4 = () => {
    window.open("https://github.com/krmahi/Gender-recognition-using-voice-GUI");
  };
  const handleViewP5 = () => {
    window.open("https://krmahi.github.io/INSTAGRAM_FRONTEND_CLONE");
  };
  const handleCodeP5 = () => {
    window.open("https://github.com/krmahi/INSTAGRAM_FRONTEND_CLONE");
  };
  const handleCodeP6 = () => {
    window.open("https://github.com/krmahi/Volume-control-using-hand-gestures");
  };

  return (
    <div className="project-hero">
      <div className="project-blocks">
        <div className="title p-title">Projects</div>
        <div className="block-1 project-block-color-1 a">
          <div className="block-title bold block-title-proj">
            Autonomous vehicle localization and navigation
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            AD Level 5
          </div>
          <div className="size-15px bold-content ">
            <span>
              Led dynamic simulation scenario creation with Lidar, INS, and
              camera sensors in Unreal Engine, achieving Level 5 autonomy, and
              developed real-time algorithms for traffic light recognition and
              decision-making planners
            </span>
            <div className="project-buttons">
              <div
                className="p1-button bold-content p1-button-color"
                onClick={handleCodeP1}
              >
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>Matlab</span>
            <span>C++</span>
            <span>Unreal engine</span>
            <span>Simulink</span>
            <span>Stateflow</span>
            <span>Point Cloud</span>
          </div>
        </div>
        <div className="block-1 project-block-color-2 b">
          <div className="block-title bold block-title-proj">
            Personal Portfolio
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            Bento-ui style | portfolio website
          </div>
          <div className="size-15px bold-content">
            <span>
              Designed and deployed a dynamic React portfolio with a Bento-style
              UI, showcasing skills, projects, and achievements through a clean
              and organized layout for a modern and scalable web presence
            </span>
            <div className="project-buttons">
              <div className="p1-button bold-content" onClick={handleViewP2}>
                <a>View Site</a>
              </div>
              <div className="p1-button bold-content" onClick={handleCodeP2}>
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>Figma</span>
            <span>Html</span>
            <span>Css</span>
            <span>React</span>
            <span>Js</span>
            <span>type scipt</span>
            <span>Wire frame</span>
            <span>Gsap</span>
            <span>Sass / Scss</span>
          </div>
        </div>
        <div className="block-1 project-block-color-3 white-text c">
          <div className="block-title bold block-title-proj">
            2D Ray tracing
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            ray casting
          </div>
          <div className="size-15px bold-content">
            <span>
              Implemented ray casting for realistic light simulation, utilizing
              vector math to calculate ray-object intersections, determine
              reflected ray directions, and calculate shadows by tracing rays
              from intersections towards light sources for occlusion checks
            </span>
            <div className="project-buttons ">
              <div
                className="p1-button bold-content p3-button-color"
                onClick={handleViewP3}
              >
                <a className="p3-a">View Site</a>
              </div>
              <div
                className="p1-button bold-content  p3-button-color"
                onClick={handleCodeP3}
              >
                <a className="p3-a">Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories normal-text">
            <span>Vectors</span>
            <span>Js</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </div>
        <div className="block-1 project-block-color-4 d">
          <div className="block-title bold block-title-proj">
            Gender recognition using Voice
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            VoiceGenix | Software - GUI
          </div>

          <div className="size-15px bold-content ">
            <span>
              Researched and implemented feature extraction techniques for
              gender classification from voice data, designed an intuitive GUI
              for VoiceGenix, and established a dynamic real-time data
              collection strategy for continuous system adaptation
            </span>

            <div className="project-buttons">
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleViewP4}
              >
                <a>Releases</a>
              </div>
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleCodeP4}
              >
                <a>Source Code</a>
              </div>
              <img src={voicegenix} alt="voicegenix_logo" />
            </div>
          </div>
          <div className="categories">
            <span>Machine learning</span>
            <span>Data collection</span>
            <span>Pyton</span>
            <span>Research & Development </span>
            <span>R</span>
            <span>Tkinter</span>
          </div>
        </div>
        <div className="block-1 project-block-color-5 e">
          <div className="block-title bold block-title-proj">
            Instagram Front-end Clone
          </div>
          <div className="last-project">
            <div className="block-sub-title bold-subheading size-15px last-2-subheading block-sub-title-proj">
              html | css | figma
            </div>
            <div className="size-15px">
              <div className="project-buttons margin-no-bottom">
                <div
                  className="p1-button bold-content p5-button-color"
                  onClick={handleViewP5}
                >
                  <a>View Site</a>
                </div>
                <div
                  className="p1-button bold-content p5-button-color"
                  onClick={handleCodeP5}
                >
                  <a>Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-1 project-block-color-5 f">
          <div className="block-title bold block-title-proj ">
            System volume control using hand Gestures
          </div>
          <div className="last-project">
            <div className="block-sub-title bold-subheading size-15px last-2-subheading block-sub-title-proj">
              computer vision | python | gesture recognition
            </div>
            <div className="size-15px">
              <div className="project-buttons margin-no-bottom">
                <div
                  className="p1-button bold-content p5-button-color"
                  onClick={handleCodeP6}
                >
                  <a>Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
