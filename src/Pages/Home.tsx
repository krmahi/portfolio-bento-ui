import { BrowserRouter as Router } from "react-router-dom";

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

function Home() {
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