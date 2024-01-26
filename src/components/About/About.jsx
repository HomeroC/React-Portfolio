import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="intro">
        <h1 className="name">
          <pre>
            <code>&lt;h1&gt; I'm Homero Cazares &lt;/h1&gt;</code>
          </pre>
        </h1>
        <h2 className="role">Full Stack Web Developer</h2>
      </div>
      <h2 className="about-me">About Me</h2>
      <p className="summary">
        I am a results-driven web developer proficient in HTML, CSS, and
        JavaScript. Experienced in React and Redux for dynamic UIs, with Node.js
        expertise for scalable backend solutions. Skilled in Git for
        collaborative development. Committed to innovation and continual skill
        enhancement. Ready to contribute technical expertise to dynamic teams.
      </p>
    </div>
  );
}

export default About;
