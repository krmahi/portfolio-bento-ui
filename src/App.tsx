import "./App.css";
import Header from "./components/Header";
import SkillBento from "./components/SkillBento";
import About from "./components/About";
import GradientName from "./components/GradientName";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Competitions from "./components/Competitions";
import EndGit from "./components/EndGit";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="header"> */}
      <Router>
        <Header />
        {/* <Routes>
          <Route path=""></Route>
        </Routes> */}
      </Router>
      {/* </div> */}
      <div className="wrapper">
        <div className="after-header">
          <SkillBento />
          <GradientName />
          <About />
        </div>
        <Experience />
        <Projects />
        <Certification />
        <Competitions />
        <EndGit />
        <Footer />
      </div>
    </>
  );
}

export default App;
