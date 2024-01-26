import React from 'react'
import './MainContent.css'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Works/Projects';

function Main() {
  return (
    <div className='main-content'>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Main