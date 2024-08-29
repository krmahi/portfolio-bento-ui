import { BrowserRouter as Router } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Header from "../components/Header";
import SkillBento from "../components/SkillBento";
import About from "../components/About";
import GradientName from "../components/GradientName";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certification from "../components/Certification";
import Competitions from "../components/Competitions";
import EndGit from "../components/EndGit";
import Footer from "../components/Footer";
import Education from "../components/Education";
import "../App.css";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  // locomotiveScroll.start();

  useGSAP(() => {
    gsap.set("body", { opacity: 0 });
    gsap.to("body", { opacity: 1, duration: 3, ease: "power2" });
  });

  return (
    <>
      <Router>
        <Header />
        {/* <Routes>
          <Route path=""></Route>
        </Routes> */}
      </Router>
      <div className="wrapper">
        <div className="after-header">
          <SkillBento />
          <div className="in-about">
            <GradientName />
            <About />
          </div>
        </div>
        <Experience />
        <Projects />
        <Education />
        <Certification />
        <Competitions />
        <div className="endgit">
          <EndGit />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
