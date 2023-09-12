import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Typer from "./components/Typer";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div className="HomepageLayout">
      <Header />
      <Element name="home" className="section">
        <Typer />
      </Element>
      <Element name="about" className="section">
        <AboutMe />
      </Element>
      <Element name="skills" className="section">
        <Skill />
      </Element>
      <Element name="project" className="section">
        <Project />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
