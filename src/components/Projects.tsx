// import React from "react";
import "../styles/Projects.css";

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
  // const handleViewP3 = () => {
  //   window.open("");
  // };
  const handleCodeP3 = () => {
    window.open(
      "https://github.com/krmahi/AI-powered-practical-situation-solver"
    );
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
    window.open("https://krmahi.github.io/2d_ray_casting/");
  };
  const handleCodeP5 = () => {
    window.open("https://github.com/krmahi/2d_ray_casting");
  };
  const handleCodeP6 = () => {
    window.open("https://github.com/krmahi/SecondLife");
  };
  const handleCodeP7 = () => {
    window.open("https://github.com/krmahi/Volume-control-using-hand-gestures");
  };
  const handleViewP8 = () => {
    window.open("https://31currencies-converter.vercel.app/");
  };
  const handleCodeP8 = () => {
    window.open("https://github.com/krmahi/currency-converter");
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
              Led the creation of dynamic simulation scenarios using Lidar, INS,
              and camera sensors in Unreal Engine, achieving Level 5 autonomy.
              Developed real-time algorithms for traffic light recognition and
              decision-making planners, enabling the vehicle to navigate complex
              environments with full autonomy
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
              Designed and deployed a dynamic React portfolio with a sleek
              Bento-style UI, effectively showcasing skills, projects, and
              achievements in a clean, organized layout. The responsive design
              ensures a modern and scalable web presence, offering an engaging
              user experience across devices
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
        <div className="block-1 project-block-color-3 c">
          <div className="block-title bold block-title-proj">
            AI Problem solver
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            AI - Drawing Calculator
          </div>
          <div className="size-15px bold-content">
            <span>
              An interactive calculator app designed to solve complex math and
              real-world situation-based problems using natural language input.
              Users can write descriptive queries or draw problem scenarios
              directly within the app. It intelligently interprets inputs and
              delivers accurate, step-by-step solutions in real time the app
              offers an intuitive and seamless problem-solving experience
            </span>
            <div className="project-buttons ">
              <div
                className="p1-button bold-content p3-button-color"
                // onClick={handleViewP3}
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
            <span>NLP</span>
            <span>AI/ML</span>
            <span>Real-Time Data Processing</span>
            <span>css</span>
            <span>UI/UX Design</span>
            <span>Api</span>
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
              Researched and implemented advanced feature extraction techniques
              for gender classification from voice data. Designed an intuitive
              GUI for VoiceGenix, enhancing user interaction and system
              accessibility. Established a dynamic, real-time data collection
              strategy, enabling continuous adaptation and improvement of the
              system’s performance
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
            2D Ray tracing
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            2d ray casting
          </div>
          <div className="size-15px bold-content ">
            <span>
              Implemented a 2D ray casting system to simulate realistic lighting
              by calculating ray-object intersections using vector mathematics.
              Determined reflection paths and handled shadow rendering by
              tracing rays from hit points to light sources with occlusion
              detection. Achieved visually accurate light behavior for dynamic
              scene interactions
            </span>

            <div className="project-buttons">
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleViewP5}
              >
                <a>View Site</a>
              </div>
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleCodeP5}
              >
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>Vector</span>
            <span>3D Graphics Theory (2D simulation)</span>
            <span>js</span>
            <span>Lighting and Shadow Simulation</span>
          </div>
        </div>

        <div className="block-1 project-block-color-6 f">
          <div className="block-title bold block-title-proj">
            Second Life App
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            Buy and Sell items
          </div>
          <div className="size-15px bold-content ">
            <span>
              Second Life App is a cross-platform marketplace built with React
              Native for buying and selling pre-owned items. It features an
              intuitive UI for easy item listings, browsing, and secure
              transactions. The app promotes sustainable reuse by connecting
              users to give items a second life. It also includes chat
              functionality and secure payment integration for seamless
              transactions
            </span>
            <div className="project-buttons">
              {/* <div
                className="p1-button bold-content p4-button-color"
                onClick={handleViewP4}
              >
                <a>Releases</a>
              </div> */}
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleCodeP6}
              >
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>React Native</span>
            <span>JavaScript</span>
            <span>Pyton</span>
            <span>OAuth</span>
            <span>real-time chat</span>
            <span>UI/UX Design (Figma, Adobe XD)</span>
          </div>
        </div>

        <div className="block-1 project-block-color-7 g">
          <div className="block-title bold block-title-proj">
            System volume control using hand Gestures
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            volume control
          </div>
          <div className="size-15px bold-content ">
            <span>
              This system uses OpenCV for real-time hand gesture recognition to
              control the computer's volume. By tracking hand movements via
              webcam, users can adjust the volume up or down intuitively,
              without needing to physically interact with the device.
            </span>

            <div className="project-buttons">
              {/* <div
                className="p1-button bold-content p4-button-color"
                onClick={handleViewP4}
              >
                <a>Releases</a>
              </div> */}
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleCodeP7}
              >
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>OpenCV</span>
            <span>Gesture Recognition</span>
            <span>Pyton</span>
            <span>Research & Development</span>
            <span>Real-Time Processing</span>
          </div>
        </div>

        <div className="block-1 project-block-color-8 h">
          <div className="block-title bold block-title-proj">
            Currency converter
          </div>
          <div className="block-sub-title bold-subheading size-15px block-sub-title-proj">
            30+ Currencies
          </div>
          <div className="size-15px bold-content ">
            <span>
              A ReactJS app supporting 30+ currencies with real-time exchange
              rates. Users can save favorite currencies and preferences using
              local storage. Offers seamless currency conversion with a clean,
              intuitive interface
            </span>

            <div className="project-buttons">
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleViewP8}
              >
                <a>View Site</a>
              </div>
              <div
                className="p1-button bold-content p4-button-color"
                onClick={handleCodeP8}
              >
                <a>Source Code</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <span>ReactJS</span>
            <span>TypeScript</span>
            <span>Local Storage</span>
            <span>Currency Formatting</span>
            <span>State Management (Context API)</span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
