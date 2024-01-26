import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className="project-container">
          <div className="project" id="foundation-capstone">
              <h2>Projects</h2>
        <h3>Anime GO</h3>
        <p className='tools'>HTML | CSS | JavaScript | API</p>
        <p className='summary'>
          Anime GO is a dedicated platform designed for anime enthusiasts to
          explore and discover their favorite anime series and movies. With a
          user-friendly interface, this app provides a comprehensive database of
          anime titles, characters, genres, and more, making it the go-to
          resource for anime fans. <br />
          <a href="https://github.com/HomeroC/Foundations-Capstone">
            github repo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects