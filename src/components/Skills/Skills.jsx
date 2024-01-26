import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const html = (
    <FontAwesomeIcon icon={faHtml5} size="2xl" style={{ color: "#fa5700" }} />
  );
  const css = (
    <FontAwesomeIcon icon={faCss3} size="2xl" style={{ color: "#0623f9" }} />
  );
  const js = (
    <FontAwesomeIcon icon={faJs} size="2xl" style={{ color: "#FFD43B" }} />
  );
  const react = (
    <FontAwesomeIcon icon={faReact} size="2xl" style={{ color: "#00a0f0" }} />
  );
  const node = (
    <FontAwesomeIcon icon={faNodeJs} size="2xl" style={{ color: "#00e00f" }} />
  );
  const git = (
    <FontAwesomeIcon icon={faGitAlt} size="2xl" style={{ color: "#f64c04" }} />
  );
  const github = (
    <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "black" }} />
  );

  return (
    <>
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-item">{react}</div>
        <div className="skill-item">{js}</div>
        <div className="skill-item">{node}</div>
        <div className="skill-item">{git}</div>
        <div className="skill-item">{github}</div>
        <div className="skill-item">{html}</div>
        <div className="skill-item">{css}</div>
      </div>
    </>
  );
}

export default Skills;
