// import React from "react";
import "../Styles/Projects.css";

function Projects() {
  return (
    <div className="project-hero">
      <div className="title">Projects</div>
      <div className="project-blocks">
        <div className="block-1 project-block-color-1">
          <div className="block-title bold">
            Autonomous vehicle localization and navigation
          </div>
          <div className="block-sub-title bold-subheading size-15px">
            AD Level 5
          </div>
          <div className="size-15px bold-content">
            <span>
              Led dynamic simulation scenario creation with Lidar, INS, and
              camera sensors in Unreal Engine, achieving Level 5 autonomy, and
              developed real-time algorithms for traffic light recognition and
              decision-making planners
            </span>
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
        <div className="block-1 project-block-color-2">
          <div className="block-title bold">Personal Portfolio</div>
          <div className="block-sub-title bold-subheading size-15px">
            Bento-ui style | portfolio website
          </div>
          <div className="size-15px bold-content">
            <span>
              Designed and deployed a dynamic React portfolio with a Bento-style
              UI, showcasing skills, projects, and achievements through a clean
              and organized layout for a modern and scalable web presence
            </span>
            <div className="project-buttons">
              <div className="p1-button bold-content">
                <a href="#">View Site</a>
              </div>
              <div className="p1-button bold-content">
                <a href="#">Source Code</a>
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
        <div className="block-1 project-block-color-3 white-text">
          <div className="block-title bold">2D Ray tracing</div>
          <div className="block-sub-title bold-subheading size-15px">
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
              <div className="p1-button bold-content p3-button-color">
                <a href="#" className="p3-a">
                  View Site
                </a>
              </div>
              <div className="p1-button bold-content  p3-button-color">
                <a href="#" className="p3-a">
                  Source Code
                </a>
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
        <div className="block-1 project-block-color-4">
          <div className="block-title bold">Gender recognition using Voice</div>
          <div className="block-sub-title bold-subheading size-15px">
            VoiceGenix | Software - GUI
          </div>
          <div className="size-15px bold-content">
            <span>
              Researched and implemented feature extraction techniques for
              gender classification from voice data, designed an intuitive GUI
              for VoiceGenix, and established a dynamic real-time data
              collection strategy for continuous system adaptation
            </span>
            <div className="project-buttons">
              <div className="p1-button bold-content p4-button-color">
                <a href="#">Source Code</a>
              </div>
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
        <div className="block-1 project-block-color-5">
          <div className="block-title bold">Instagram Front-end Clone</div>
          <div className="block-sub-title bold-subheading size-15px last-2-subheading">
            html | css | figma
          </div>
          <div className="size-15px">
            <div className="project-buttons">
              <div className="p1-button bold-content p5-button-color">
                <a href="#">View Site</a>
              </div>
              <div className="p1-button bold-content p5-button-color">
                <a href="#">Source Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="block-1 project-block-color-5">
          <div className="block-title bold">
            System volume control using hand Gestures
          </div>
          <div className="block-sub-title bold-subheading size-15px last-2-subheading">
            computer vision | python | gesture recognition
          </div>
          <div className="size-15px">
            <div className="project-buttons">
              <div className="p1-button bold-content p5-button-color">
                <a href="#">View Site</a>
              </div>
              <div className="p1-button bold-content p5-button-color">
                <a href="#">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
